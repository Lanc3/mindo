import { FontAwesome } from '@expo/vector-icons';
import React, { useCallback, useEffect, useRef, useState } from "react";
import { Dimensions, FlatList, SafeAreaView, Share, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { AdManager } from '../../components/AdManager';
import Footer from '../../components/Footer';
import ISSUURenderer from '../../components/ISSUURenderer';
import LoadingView from '../../components/LoadingView';
import { newGetPostsByCatSlug } from '../../hooks/useResults';

export default function UpdateJournalReader({navigation,props,route}) {
  const {content} = route.params;
  const scrollRef = useRef();
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(0);
  const [totalPages, setTotalPages] = useState(0);
  const [title,setTitle] = useState("Update Journal");
  const [slug,setSlug] = useState("update-journal");

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
        setLoading(0.5);
        const response = await newGetPostsByCatSlug(slug,10,page);
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

const onShare = async () => {
  try {
    const result = await Share.share({
      message: 'React Native | A framework for building native apps using React',
    });
    if (result.action === Share.sharedAction) {
      if (result.activityType) {
        // shared with activity type of result.activityType
      } else {
        // shared
      }
    } else if (result.action === Share.dismissedAction) {
      // dismissed
    }
  } catch (error) {
    alert(error.message);
  }
};
  return (
    <SafeAreaView style={styles.container}>
<FlatList
        ListHeaderComponent={
          <View style={styles.scrollView}  ref={scrollRef}>
      <AdManager selectedAd={"ICS_MPU"} sizeType={"SMALL"}/>
      <Text style={styles.greenTitle}>Update Journal</Text>
      <Text style={styles.title} numberOfLines={3}>{content.title}</Text>
      <View style={styles.subTitle}>
      <Text style={{paddingLeft:10}}>By </Text>
      <Text style={{color:'black'}}>{content.author} - </Text>
        <Text>{content.date}</Text>
      </View>
      <View>
      </View>
      <View style={styles.imageContainer}>
     
      <View style={styles.shareButton}>
      <Text style={{color:'#6e822b',padding:5}}>Share to:</Text>
      <View style={styles.spacer}>
                <FontAwesome.Button  name="twitter"size={18} color="#000" backgroundColor="#fff" onPress={onShare}>
                </FontAwesome.Button>
            </View>
            <View style={styles.spacer}>
                <FontAwesome.Button  name="facebook-square" size={18} color="#000" backgroundColor="#fff" onPress={onShare}>
                </FontAwesome.Button>
            </View>
            <View style={styles.spacer}>
                <FontAwesome.Button  name="linkedin-square" size={18} color="#000" backgroundColor="#fff" onPress={onShare}>
                </FontAwesome.Button>
            </View>
            <View style={styles.spacer}>
                <FontAwesome.Button  name="instagram" size={18} color="#000" backgroundColor="#fff" onPress={onShare}>
                </FontAwesome.Button>
            </View>
      </View>
      </View>
      </View>
        }
        ListFooterComponent={
        <View>
          <ISSUURenderer htmlData={content.content}/>
          {data.length > 0 ? (
        <View>
        <FlatList
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
            </View>
          }
          data={data}
          listKey={(item, index) => `D_key${index.toString()}`}
          keyExtractor={(item, index) => `_key${index.toString()}`}
          renderItem={({ item, index })=>{
            if(index === 3){
                return(<AdManager selectedAd={"MPU_PUBLIC"} sizeType={"BIG"}/>)
            }
            else if(index === 7){
              return(<AdManager selectedAd={"MPU_PUBLIC"} sizeType={"BIG"}/>)
            }
            return(
              <EcopyShortCard props title={item.title.toString()}
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
            <View style={{}}>
                <LoadingView loadingProgress={loading}/>
            </View>
          )}
          <Footer navi={navigation} refS={scrollRef}/>
        </View>}
      data={[]}
      listKey={(item, index) => `D_key${index.toString()}`}
        keyExtractor={(item, index) => `_key${index.toString()}`}
        renderItem={({ item, index })=>{}}/>
    </SafeAreaView>
  );
}
const windowWidth = Dimensions.get('window').width;
const styles = StyleSheet.create({
    container: {
      fontSize:20,
      height:100,
      width:windowWidth,
      flex: 1,
      color:'#000',
      backgroundColor:'#fff'
    },
    title:{
      fontSize:25,
      fontWeight:'bold',
      justifyContent:'center',
      padding:5,
    },
    subTitle:{
      flex:1,
      flexDirection:'row',
    },
    image:{
      width: windowWidth,
      height:300,
      resizeMode: 'contain',
    },
    imageContainer:{
    },
    scrollView: {
      marginHorizontal: 0,
    },
    shareButton:{
      flex:1,
      flexDirection:'row',
      justifyContent:'flex-start'
    },
    shareText:{
      color:'#fff',
      fontSize:20,
      fontWeight:'bold',
      textAlign:'center',
    },
    greenTitle:{
      color:'#6e822b',
      paddingTop:10,
      paddingLeft:10,
  }, pageNav:{
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