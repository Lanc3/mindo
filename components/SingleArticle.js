import React, { useCallback, useEffect, useState } from "react";
import { FlatList, StyleSheet, View } from "react-native";
import LoadingView from '../components/LoadingView';
import { newGetPostsByCatSlug } from '../hooks/useResults';
import { ShortCard } from "./ShortCard";

const SingleArticle = ({navigation, slugName,list,titleName,showAmount,pageRouteName}) => {
    //const [getCategoryAPI,getAllPosts,getCategoyIdBySlug,getFirstPostSet,getPostsByCategory,categories,getMediaAPI,getAuthor,fetchApiData] = useResults();
    const [data, setData] = useState([]);
    const [page, setPage] = useState(1);
    const [loading, setLoading] = useState(0);
    const [totalPages, setTotalPages] = useState(0);
    const [title,setTitle] = useState(titleName);
    const [slug,setSlug] = useState(slugName);
    const [isdata,setisdata] = useState(false);

 const getContent = useCallback(async() =>{
      setLoading(0.25);
        try{
          setLoading(0.5);
          const response = await newGetPostsByCatSlug(slug,showAmount,page);
          setTotalPages(Math.ceil(response.totalPosts/10));
          setData(response.posts);
          setLoading(1);
        }catch(error){
            console.log(error)
        }finally{
            setLoading(1);
        };
        setLoading(1);
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
          
          data={data}
          listKey={(item, index) => `D_key${index.toString()}`}
          keyExtractor={(item, index) => `_key${index.toString()}`}
          renderItem={({ item, index })=>{
            // if(index === 3){
            //     return(<AdManager selectedAd={"MPU_PUBLIC"} sizeType={"BIG"}/>)
            // }
            // else if(index === 7){
            //   return(<AdManager selectedAd={"MPU_PUBLIC"} sizeType={"BIG"}/>)
            // }
            return(
              <ShortCard props title={item.title.toString()}
                excerpt = {item.excerpt.toString()}
                date = {item.date.toString()}
                mediaID = {item.media.toString()}
                totalData = {item.content}
                authorId = {item.author}
                navi = {navigation}
                nameSlug={item.categoryName}
                />
            )
        }}
          />
          </View>
          ) : (
          <View>
            <LoadingView loadingProgress={loading}/>
          </View>
          )}
        </View>
      );
    };

export default SingleArticle;

const styles = StyleSheet.create({
    container:{
        flex: 1,
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:'#FFFFFF'
    },
    pageTitle:{
        fontSize:26,
        
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