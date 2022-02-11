import React,{useEffect,useState,useCallback} from "react";
import { View, Text,Image,StyleSheet, TouchableOpacity, ScrollView ,Dimensions} from "react-native";
import Carousel from "../components/Carousel";
import useResults from "../hooks/useResults";
import Footer from "../components/Footer";
import { ECopy } from "../components/ECopy";
import ArticleList from "../components/ArticleList";


const HomeScreen = (props) => {
    const [getCategoryAPI,getAllPosts,getCategoyIdBySlug,getFirstPostSet,getPostsByCategory,categories,getMediaAPI,getAuthor,fetchApiData] = useResults();
    const [latestNews, setlatestNews] = useState([]);
    const [comments, setComments] = useState([]);
    const [feature, setFeature] = useState([]);
    const [team, setTeam] = useState([]);
    const [loading, setLoading] = useState(true);

    const getContent = useCallback(async() =>{
        try{
            const response = await getCategoyIdBySlug("latest-news");
            const id = await response;
            const json = JSON.parse(await getPostsByCategory(id,1));
            setlatestNews(json);
        }catch(error){
            console.log(error)
        }finally{
          try{
            const response = await getCategoyIdBySlug("comment");
            const id = await response;
            const json = JSON.parse(await getPostsByCategory(id,1));
            setComments(json);
        }catch(error){
            console.log(error)
        }finally{
          try{
            const response = await getCategoyIdBySlug("news-features");
            const id = await response;
            const json = JSON.parse(await getPostsByCategory(id,1));
            setFeature(json);
        }catch(error){
            console.log(error)
        }finally{
          try{
            const response = await getCategoyIdBySlug("breaking-news");
            const id = await response;
            const json = JSON.parse(await getPostsByCategory(id,1));
            setTeam(json);
        }catch(error){
            console.log(error)
        }finally{
          setLoading(false)
        };
        };
        };
        };

    },[]);

    useEffect(() => {
      getContent();
      }, [getContent]);

    return(
        <ScrollView style={styles.container}>
      {team.length > 0 ? (
        <View>
      <Carousel
        style='slide'
        items={latestNews}
        navigation={props.navigation}
        nameSlug={"Latest News"}
      />
      <ArticleList navigation={props.navigation} slugName={"latest-news"} titleName={"Latest News"} showAmount={5} pageRouteName={"LatestNews"}/>
      <View style={styles.divider}/>
      <ArticleList navigation={props.navigation} slugName={"breaking-news"} titleName={"Breaking News"} showAmount={3} pageRouteName={"BreakingNews"}/>
      <View style={styles.divider}/>
      <Text style={styles.titleStyle}>
        Comments
      </Text>
      <Carousel
        style='stats'
        items={comments}
        navigation={props.navigation}
        nameSlug={"Comments"}
        title={"Comment"}
        pageRouteName={"Editorial"}
      />
      <View style={styles.divider}/>
      <ECopy></ECopy>
      <View style={styles.divider}/>
      <View style={styles.topSmallNav}>
                  <View style={styles.titleContainer}>
                    <Text style={styles.titleStyle}>News Features</Text>
                  </View>
                  <TouchableOpacity onPress={()=>{props.navigation.navigate('MainDrawer',{screen :'NewsFeatures'});}}>
                      <View style={styles.veiwContainer}>
                        <Text style={styles.viewAll}>View All</Text>
                      </View>
                  </TouchableOpacity>
              </View>
      <Carousel
        style='slide'
        items={feature}
        navigation={props.navigation}
      />
      <ArticleList navigation={props.navigation} slugName={"feature-news"} titleName={"Feature News"} showAmount={2} pageRouteName={"NewsFeatures"}/>
      <View style={styles.divider}/>
      <Footer/>
      </View>
      )
    : (
      <View>
            <Image style={styles.image} source={require("../assets/images/logo.png" )}/>
            <Text style={styles.pageTitle}>Loading...</Text>
          </View>
    )}
    </ScrollView>
    );
};

export default HomeScreen;
const windowWidth = Dimensions.get('window').width;
const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor:'#fff'
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
    titleStyle:{
        padding:10,
        fontSize:22,
        fontWeight:'bold',
        justifyContent:'center',
        alignSelf:'center',
    },
    divider:{
      color:'black',
      borderBottomWidth:1,
      borderBottomColor:'black',
      width:windowWidth-10,
      borderStyle:'solid',
      marginLeft:5
    },
    topSmallNav:{
        flex:1,
        flexDirection:'row',
        margin:10
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