import React,{useEffect,useState,useCallback,useRef} from "react";
import { TouchableOpacity, Text,ScrollView,StyleSheet, View, FlatList} from "react-native";
import {getPostByAuthorId,getTotalPostByAuthor,fetchApiData} from '../../hooks/useResults'
import { Footer } from "../../components/Footer";
import { ShortCard } from "../../components/ShortCard";
import { Header } from "../../components/Header";
import LoadingView from "../../components/LoadingView";
import { AdManager } from "../../components/AdManager";


const DavidLynchScreen = ({navigation}) => {
    const [data, setData] = useState([]);
    const [page, setPage] = useState(1);
    const [loading, setLoading] = useState(0);
    const [totalPages, setTotalPages] = useState(0);
    const [title,setTitle] = useState("David Lynch");
    const [authorID,setAuthorID] = useState(3250);
    const scrollRef = useRef();
    const nextpage = () =>{
      if(page <= totalPages)
      setPage(prevPage => prevPage + 1)
    }
    const perviouspage = () =>{
      if(page > 0)
      setPage(prevPage => prevPage - 1)
    }
    const getContent = useCallback(async() =>{
      setLoading(0.25);
        try{
            const response = await getPostByAuthorId(authorID);
            const total = await getTotalPostByAuthor(authorID);//getting total pages per slug
            setLoading(0.50);
            setTotalPages(total)
            setLoading(0.75);
            setData(response);
            setLoading(1);
        }catch(error){
            console.log(error)
        }finally{
          setLoading(1);
        };

    },[page]);

     useEffect(() => {
      getContent();
      }, [getContent]);

    return(
      <ScrollView style={{ flex: 1 }} ref={scrollRef}>
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
          <Footer navi={navigation} refS={scrollRef}/>
            </View>
          }
          data={data}
          keyExtractor={item => ""+item.date+item.id.toString()}
          renderItem={({ item, index })=>{
            if(index === 3){
                return(<AdManager selectedAd={"MPU_PUBLIC"} sizeType={"BIG"}/>)
            }
            else if(index === 7){
              return(<AdManager selectedAd={"MPU_PUBLIC"} sizeType={"BIG"}/>)
            }
            return(
              <ShortCard props title={item["title"]["rendered"].toString()}
                excerpt = {item["excerpt"]["rendered"].toString()}
                date = {item["date"].toString()}
                mediaID = {item["featured_media"]}
                totalData = {item["content"]["rendered"]}
                authorId = {item["author"]}
                navi = {navigation}
                nameSlug={title}
                />
            )
        }}
          />
          </View>
          ) : (
            <View style={{}}>
                <LoadingView loadingProgress={loading}/>
            </View>
          )}
        </ScrollView>
      );
    };

export default DavidLynchScreen;

const styles = StyleSheet.create({
    container:{
        flex: 1,
        alignItems:'center',
        justifyContent:'center',
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