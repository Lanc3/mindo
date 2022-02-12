import React,{useEffect,useState,useCallback} from "react";
import { Image,TouchableOpacity, Text,ScrollView,StyleSheet, View, FlatList} from "react-native";
import useResults from "../hooks/useResults";
import { ShortCard } from "./ShortCard";
import {getCategoyIdBySlug,getFirstPostSet,getPostsByCategory,getMediaAPI,fetchApiData,getPostByAuthorId,getTotalPostByAuthor} from '../hooks/useResults'


const ArticleList = ({navigation,slugName,titleName,showAmount,pageRouteName}) => {
    //const [getCategoryAPI,getAllPosts,getCategoyIdBySlug,getFirstPostSet,getPostsByCategory,categories,getMediaAPI,getAuthor,fetchApiData] = useResults();
    const [data, setData] = useState([]);
    const [page, setPage] = useState(1);
    const [loading, setLoading] = useState(true);
    const [totalPages, setTotalPages] = useState(0);
    const [title,setTitle] = useState(titleName);
    const [slug,setSlug] = useState(slugName);

    const getContent = useCallback(async() =>{
        try{
            const response = await getCategoyIdBySlug(slug);
            const id = await response;
            const json = JSON.parse(await getPostsByCategory(id,page));
            const total = await fetchApiData(slug);//getting total pages per slug
            setTotalPages(total)
            const newArray = [];
            for(let i = 0;i < showAmount;i++)
            {
                newArray.push(json[i]);
            }
            setData(newArray);
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
        scrollEnabled={false}
          ListHeaderComponent={
              <View style={styles.topSmallNav}>
                  <View style={styles.titleContainer}>
                    <Text style={styles.titleStyle}>{titleName}</Text>
                  </View>
                  <TouchableOpacity onPress={()=>{navigation.navigate('MainDrawer',{screen :pageRouteName});}}>
                      <View style={styles.veiwContainer}>
                        <Text style={styles.viewAll}>View All</Text>
                      </View>
                  </TouchableOpacity>
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
            <Image style={styles.image} source={require("../assets/images/logo.png" )}/>
            <Text style={styles.pageTitle}>Loading...</Text>
          </View>
          )}
        </View>
      );
    };

export default ArticleList;

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
    },
    topSmallNav:{
        flex:1,
        flexDirection:'row',
    },
    viewAll:{
        color:'#6e822b',
    },
    veiwContainer:{
        flex:1,
        justifyContent:'flex-end',
        paddingRight:10
    },
    titleStyle:{
        fontSize:16,
        fontWeight:'bold',
        paddingLeft:10
    },
    titleContainer:{
        flex:1,
        justifyContent:'flex-start'
    }
});