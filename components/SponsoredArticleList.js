import AsyncStorage from '@react-native-async-storage/async-storage';
import { useIsFocused } from '@react-navigation/native';
import React, { useCallback, useEffect, useState } from "react";
import { FlatList, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { newGetPostsByCatSlug } from '../hooks/useResults';
import { ShortCard } from "./ShortCard";
const SponsoredArticleList = ({navigation, slugName,list,titleName,showAmount,pageRouteName}) => {
    //const [getCategoryAPI,getAllPosts,getCategoyIdBySlug,getFirstPostSet,getPostsByCategory,categories,getMediaAPI,getAuthor,fetchApiData] = useResults();
    const [data, setData] = useState([]);
    const [page, setPage] = useState(1);
    const [loading, setLoading] = useState(0);
    const [totalPages, setTotalPages] = useState(0);
    const [title,setTitle] = useState(titleName);
    const [isLoggedIn,setIsLoggedIn] = useState(false);
    const [slug,setSlug] = useState(slugName);
    const [isdata,setisdata] = useState(false);
    const isFocused = useIsFocused()
 const getContent = useCallback(async() =>{
      setLoading(0.25);
        try{
          setLoading(0.5);
          const response = await newGetPostsByCatSlug(slug,showAmount,page);
          setTotalPages(Math.ceil(response.totalPosts/10));
          setData(response.posts);
          setLoading(1);
        }catch(error){
            
        }finally{
            setLoading(1);
        };
        setLoading(1);
    },[page]);

     useEffect(() => {
      getContent();
      }, [getContent]);
      useEffect(() => {
        (async () => {
            const data = await AsyncStorage.getItem('userProfile');
            if(data !== null)
            setIsLoggedIn(JSON.parse(data).isLoggedIn);
        })()
    }, [isFocused]);
    return(<View>
      {isLoggedIn ?
        <View style={{ flex: 1, paddingTop: 5 }}>
      {data.length > 0 ? (
        <FlatList
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
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
          removeClippedSubviews={true}
          listKey={(item, index) => `D_key${index.toString()}`}
          keyExtractor={(item, index) => `_key${index.toString()}`}
          renderItem={({ item, index })=>{

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
          ) : (
          <View>
            
          </View>
          )}
        </View> : <View></View>}
      </View>);
    };

export default SponsoredArticleList;

const styles = StyleSheet.create({
    container:{
        flex: 1,
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:'#fff'
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
        paddingHorizontal:10
    },
    viewAll:{
        color:'#6e822b',
        fontFamily: 'Lato_400Regular',
        fontSize:13,
    },
    veiwContainer:{
        flex:1,
        justifyContent:'flex-end',
        paddingRight:10
    },
    titleStyle:{
      fontFamily: 'Merriweather_700Bold',
      fontSize:16,
        paddingLeft:10
    },
    titleContainer:{
        flex:1,
        justifyContent:'flex-start'
    }
});