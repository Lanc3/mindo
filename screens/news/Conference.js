import React,{useEffect,useState,useCallback} from "react";
import { Image,TouchableOpacity, Text,ScrollView,StyleSheet, View, FlatList} from "react-native";
import {getCategoyIdBySlug,getPostsByCategory,fetchApiData} from '../../hooks/useResults'
import { Footer } from "../../components/Footer";
import { ShortCard } from "../../components/ShortCard";
import { Header } from "../../components/Header";

const Conference = ({navigation}) => {
    const [data, setData] = useState([]);
    const [page, setPage] = useState(1);
    const [loading, setLoading] = useState(true);
    const [totalPages, setTotalPages] = useState(0);
    const [title,setTitle] = useState("Conference");
    const [slug,setSlug] = useState("conference");

    const nextpage = () =>{
      if(page <= totalPages)
      setPage(prevPage => prevPage + 1)
    }
    const perviouspage = () =>{
      if(page > 0)
      setPage(prevPage => prevPage - 1)
    }
    const getContent = useCallback(async() =>{
        try{
            const response = await getCategoyIdBySlug(slug);
            const id = await response;
            const json = JSON.parse(await getPostsByCategory(id,page));
            const total = await fetchApiData(slug);//getting total pages per slug
            setTotalPages(total)
            setData(json);
        }catch(error){
            console.log(error)
        }finally{
            setLoading(false);
        };

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
          <View>
            <Image style={styles.image} source={require("../../assets/images/logo.png" )}/>
            <Text style={styles.pageTitle}>Loading...</Text>
          </View>
          )}
        </View>
      );
    };

export default Conference;

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