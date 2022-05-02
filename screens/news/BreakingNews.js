import React,{useEffect,useState,useCallback} from "react";
import { Image,TouchableOpacity, Text,ScrollView,StyleSheet, View, FlatList} from "react-native";
import { Footer } from "../../components/Footer";
import { ShortCard } from "../../components/ShortCard";
import { Header } from "../../components/Header";
import {getCategoyIdBySlug,getPostsByCategory,fetchApiData,getLatestPostsByCategory} from '../../hooks/useResults'
import LoadingView from '../../components/LoadingView';
import { useSelector,useDispatch } from 'react-redux';
import { updateLastBreakingNews,updateBreakingNews } from "../../actions/articels";
import AsyncStorage from '@react-native-async-storage/async-storage';

const BreakingNews = ({navigation}) => {
  const article = useSelector( state => state.lastBreakingArticle);
    const [data, setData] = useState([]);
    const [page, setPage] = useState(1);
    const [loading, setLoading] = useState(0);
    const [id, setId] = useState(null);
    const [totalPages, setTotalPages] = useState(0);
    const [title,setTitle] = useState("Breaking News");
    const [slug,setSlug] = useState("breaking-news");
    const [isUpToDate, setIsUpToDate] = useState(false);
    const [date, setDate] = useState("");
    const dispatch = useDispatch();
    const checkIfTwoDatesAreEqual = (date1, date2) => {
      if (date1=== date2) {
          return true;
      }
      return false;
  }
  const saveDate = async(date) => {
    try {
      await AsyncStorage.setItem(
        'breaking-news-last-update',
        JSON.stringify({
          last: date,
        })
      );
    } catch {
      console.log('Error storing data on device');
    }
    console.log("saveDate : "+date);
}
const retrieveData = async (item) => {
  try {
    const value = await AsyncStorage.getItem('breaking-news-last-update');
    return (JSON.parse(value));
  } catch (error) {
    // Error retrieving data
  }
};
const saveData = (data) => {
  dispatch( updateBreakingNews(data) );
}
    const nextpage = () =>{
      if(page <= totalPages)
      setPage(prevPage => prevPage + 1)
    }
    const perviouspage = () =>{
      if(page > 0)
      setPage(prevPage => prevPage - 1)
    }

    const getContent = useCallback(async() =>{
      let articleDate = await retrieveData('breaking-news-last-update');
      console.log("articleDate : "+articleDate.last);
      setLoading(0.1);
      try{
        const id = await getCategoyIdBySlug(slug);
        setId(id);
        setLoading(0.2);
        const response = await getLatestPostsByCategory(id);
        saveDate(response);
        setLoading(0.3);
      }catch(error){

      }
      finally{
        setLoading(0.5);
        checkIfTwoDatesAreEqual(article.lastBreakingData.toString(),date.toString()) ? setIsUpToDate(true) : setIsUpToDate(false);

        setLoading(0.6);
        if(!isUpToDate){
          try{
            const json = JSON.parse(await getPostsByCategory(id,page));
            const total = await fetchApiData(slug);//getting total pages per slug
            setTotalPages(total)
            setData(json);
            let pageData = {"totalPages":total,"data":json};
            saveData(pageData);
        }catch(error){
            console.log(error)
        }finally{
            setLoading(1);
        }
        }
      }
    },[page]);

     useEffect(() => {
      getContent();
      }, [getContent]);

    return(
        <View style={{ flex: 1, paddingTop: 5 }}>
      {data.length > 0 ? (
        <View>
        <FlatList
          ListHeaderComponent={<Header title={title} navigation={navigation} data={data}></Header>}
          ListFooterComponent={
            <View>
            <View style={styles.pageNav}>
            {page > 1 ?
            <TouchableOpacity onPress={()=> perviouspage()}>
            <Text style={styles.nextGreen}>Previous  </Text>
          </TouchableOpacity> : null}

          <Text style={styles.next}> {page} ...  </Text>
          <Text style={styles.next}>{totalPages}</Text>
            <TouchableOpacity onPress={()=> nextpage()}>
              <Text style={styles.nextGreen}>  Next</Text>
            </TouchableOpacity>
          </View>
            <Footer navi={navigation}/>
            </View>
          }
          data={data}
          keyExtractor={item => ""+item.date+item.id.toString()}
          renderItem={({ item }) => (
                <ShortCard props title={item["title"]["rendered"].toString()}
                excerpt = {item["excerpt"]["rendered"].toString()}
                date = {item["date"].toString()}
                mediaID = {item["featured_media"]}
                totalData = {item["content"]["rendered"]}
                authorId = {item["author"]}
                navi = {navigation}
                nameSlug={title}
                />

            )}
          />
          </View>
          ) : (
  
            <LoadingView loadingProgress={loading}/>

          )}
        </View>
      );
    };

export default BreakingNews;

const styles = StyleSheet.create({
    container:{
        flex: 1,
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:'#FFFFFF'
    },
    pageTitle:{
        fontSize:26,
        fontFamily:'sans-serif',
        fontWeight:"bold",
        margin:5,
        alignSelf:'center'
    },
    image:{
      width: '100%',
      height:300,
      resizeMode: 'contain',
    },
    pageNav:{
      flexDirection:'row'
    },
    next:{
      fontSize:16
    },
    nextGreen:{
      fontSize:16,
      color:'#6e822b',
    }
});