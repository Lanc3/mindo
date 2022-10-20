import React, { useCallback, useEffect, useState } from "react";
import { FlatList, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { newGetMostReadPosts } from '../hooks/useResults';
import { AdManager } from "./AdManager";
import { ShortCard } from "./ShortCard";

const MostReadSection = ({navigation,showAmount,pageRouteName}) => {
    //const [getCategoryAPI,getAllPosts,getCategoyIdBySlug,getFirstPostSet,getPostsByCategory,categories,getMediaAPI,getAuthor,fetchApiData] = useResults();
    const [data, setData] = useState([]);
    const [page, setPage] = useState(1);
    const [loading, setLoading] = useState(0);
    const [totalPages, setTotalPages] = useState(0);
    const [title,setTitle] = useState('Most Read');

 const getContent = useCallback(async() =>{
      setLoading(0.25);
        try{
          setLoading(0.5);
          const response = await newGetMostReadPosts(showAmount,page);
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

    return(
        <View style={{ flex: 1, paddingTop: 5 }}>
      {data.length > 0 ? (
        <View>
        <FlatList
        scrollEnabled={false}
        ListHeaderComponent={
              <View style={styles.topSmallNav}>
                  <View style={styles.titleContainer}>
                    <Text style={styles.titleStyle}>Most Read</Text>
                  </View>
                  <TouchableOpacity onPress={()=>{navigation.navigate('MainDrawer',{screen :pageRouteName});}}>
                      <View style={styles.veiwContainer}>
                        <Text style={styles.viewAll}>View All</Text>
                      </View>
                  </TouchableOpacity>
              </View>
          }
          ListFooterComponent={
            <AdManager selectedAd={"MPU_PUBLIC"} sizeType={"BIG"}/>
          }
          data={data}
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
          </View>
          ) : (
          <View>
            
          </View>
          )}
        </View>
      );
    };

export default MostReadSection;

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
      color:'#6e822b',
        fontFamily: 'Lato_400Regular',
        fontSize:13,
    },
    topSmallNav:{
        flex:1,
        flexDirection:'row',
    },
    viewAll:{
      color:'#6e822b',
      fontFamily: 'Lato_400Regular',
      fontSize:13,
      paddingRight:20
    },
    veiwContainer:{
        flex:1,
        justifyContent:'flex-end',
        paddingRight:10
    },
    titleStyle:{
      fontFamily: 'Merriweather_700Bold',
      fontSize:16,
        paddingLeft:20
    },
    titleContainer:{
        flex:1,
        justifyContent:'flex-start'
    }
});