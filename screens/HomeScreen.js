import { useNavigation } from '@react-navigation/native';
import * as Notifications from 'expo-notifications';
import React, { useCallback, useEffect, useRef, useState } from "react";
import { Dimensions, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import { AdManager } from "../components/AdManager";
import ArticleListPreload from "../components/ArticleListPreload";
import Carousel from "../components/Carousel";
import CategorySnap from '../components/CategorySnap';
import { ECopy } from "../components/ECopy";
import Footer from "../components/Footer";
import LoadingView from "../components/LoadingView";
import Single from '../components/Single';
import SingleArticle from "../components/SingleArticle";
import SponsoredArticleList from '../components/SponsoredArticleList';
import { newGetPostsByCatSlug } from '../hooks/useResults';
Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: true,
    shouldSetBadge: false,
  }),
});

const HomeScreen = (props) => {
    //const [getCategoyIdBySlug,getFirstPostSet,getPostsByCategory,getMediaAPI,fetchApiData,getPostByAuthorId,getTotalPostByAuthor] = useResults();
    const [latestNews, setlatestNews] = useState([]);
    const [subscriberOnly, setSubscriberOnly] = useState([]);
    const [comments, setComments] = useState([]);
    const [feature, setFeature] = useState([]);
    const [cartoon, setCartoon] = useState([]);
    const [commercial,setCommercial] = useState([]);
    const [sliderData, setSliderData] = useState([]);
    const [motoring, setMotoring] = useState([]);
    const [clinical, setClinical] = useState([]);
    const [breakingNews, setBreakingNews] = useState([]);
    const [interviews, setInterviews] = useState([]);
    const [sponsoredContent, setSponsoredContent] = useState([]);
    const [isLoaded, setIsLoading] = useState(false);
    const scrollRef = useRef();
    const [bgcolor,setBGColor] = useState("#fff")
    const [homeItems, setHomeItems] = useState([]);
    const [notification, setNotification] = useState(false);
    const notificationListener = useRef();
    const responseListener = useRef();
    const navigation = useNavigation();
    useEffect(() => {
      notificationListener.current = Notifications.addNotificationReceivedListener(notification => {
        setNotification(notification);
      });
      responseListener.current = Notifications.addNotificationResponseReceivedListener(response => {
        const {categoryName,author,content,media,title,date} = response.notification.request.content.data;
        navigation.navigate("FullArticleScreen",{nameSlug:categoryName,authorName:author,title:title,date:date,imageData:media,htmlData:content});
      });

      return () => {
        Notifications.removeNotificationSubscription(notificationListener.current);
        Notifications.removeNotificationSubscription(responseListener.current);
      };
    }, []);

const getContent = useCallback(async() =>{

      try{
        const results = await Promise.all([
          newGetPostsByCatSlug("latest-news",5,1),
          newGetPostsByCatSlug("clinical-news",4,1),
          newGetPostsByCatSlug("motoring",1,1),
          newGetPostsByCatSlug("cartoon",1,1),
          newGetPostsByCatSlug("comment",6,1),
          newGetPostsByCatSlug("news-features",5,1),
          newGetPostsByCatSlug("commercial-feature",1,1),
          newGetPostsByCatSlug("subscriber-only",3,1),
          newGetPostsByCatSlug("sponsored-content",3,1),
          newGetPostsByCatSlug("breaking-news",4,1),
          newGetPostsByCatSlug("interviews",4,1),
        ])
        const finalData = await Promise.all(results.map(result => result.posts));
        setSliderData(finalData[0]);
        setClinical(finalData[1]);
        setMotoring(finalData[2]);
        setCartoon(finalData[3]);
        setComments(finalData[4]);
        setFeature(finalData[5]);
        setCommercial(finalData[6]);
        setSubscriberOnly(finalData[7]);
        setSponsoredContent(finalData[8]);
        setBreakingNews(finalData[9]);
        setInterviews(finalData[10]);
      }catch(error){
        ;
      }
      setHomeItems([{component:<AdManager selectedAd={"LDB_MOBILE_PRIVATE"} sizeType={"SMALL"}/>},
                      {component:<View></View>},
                      {component:<View></View>},
                      {component:<View style={styles.divider}/>},
                      {component:<View></View>},
                      {component:<View style={styles.divider}/>},
                      {component:<View style={styles.topSmallNav}><View style={styles.titleContainer}><Text style={styles.titleStyle}>Comments</Text></View><TouchableOpacity onPress={()=>{navigation.navigate('MainDrawer',{screen :"Editorial"});}}><View style={styles.veiwContainer}><Text style={styles.viewAll}>View All</Text></View></TouchableOpacity></View>},
                      {component:<View></View>},
                      {component:<AdManager selectedAd={"MPU_PRIVATE"} sizeType={"BIG"}/>},
                      {component:<View></View>},
                      {component:<ECopy navigation={props.navigation}/>},
                      {component:<View></View>},
                      {component:<View></View>},
                      {component:<Single item={sponsoredContent[0]} navigation={props.navigation} padding={20}/>},
                      {component:<View>
                        <View style={styles.divider}></View>
                        <View style={styles.topSmallNav}>
                      
                      <View style={styles.titleContainer}>
                        <Text style={styles.titleStyle}>Life</Text>
                      </View>
                      <TouchableOpacity onPress={()=>{navigation.navigate('MainDrawer',{screen :"Life"});}}>
                          <View style={styles.veiwContainer}>
                            <Text style={styles.viewAll}>View All</Text>
                          </View>
                      </TouchableOpacity>
            </View>
                      </View>},
                      {component:<View></View>},
                      {component:<View></View>},
                      {component:<SingleArticle navigation={props.navigation} slugName={"book-review"}  titleName={"Book Review"} showAmount={1} pageRouteName={"BookReview"}/>},
                      {component:<SingleArticle navigation={props.navigation} slugName={"the-dorsal-view"}  titleName={"The Dorsal View "} showAmount={1} pageRouteName={"TheDorsalView"}/>},
                      {component:<SingleArticle navigation={props.navigation} slugName={"food-and-drink"}  titleName={"Food and Drink"} showAmount={1} pageRouteName={"FoodAndDrink"}/>},
                      {component:<SingleArticle navigation={props.navigation} slugName={"sport"}  titleName={"Sport"} showAmount={1} pageRouteName={"Sport"}/>},
                      {component:<View style={styles.divider}/>},
                      {component:<View></View>},
                      {component:<SponsoredArticleList navigation={props.navigation} slugName={"subscriber-only"}  titleName={"Subscriber Only Content"} showAmount={3} pageRouteName={"SubscriberOnly"}/>},
                      {component:<Text style={{height:20}}></Text>},
                      {component:<View></View>},
      ])
      setIsLoading(true)
  },[]);

    useEffect(() => {
      getContent();
      }, [getContent]);

    return(
        <SafeAreaView style={styles.container}  ref={scrollRef}>
        {isLoaded ? (
        <SafeAreaView>
        <FlatList
        ListFooterComponent={
          <View>
            <Footer navi={props.navigation} refS={scrollRef}/>
          </View>
        }
        scrollEnabled={true}
        data={homeItems}
        listKey={(item, index) => `outer_key${index.toString()}`}
        keyExtractor={(item, index) => `outer_key${index.toString()}`}
        renderItem={({item,index})=>{
          if(index === 1){
                 return(<Single item={sliderData[0]} navigation={props.navigation} padding={0}/> )
             }
             if(index ===2)
             {
              return(<ArticleListPreload navigation={props.navigation} slugName={"latest-news"} data={sliderData} titleName={"Latest News"} showAmount={5} pageRouteName={"LatestNews"}/>)
             }
             if(index ===4)
             {
              return(<ArticleListPreload navigation={props.navigation} slugName={"breaking-news"} data={breakingNews}  titleName={"Breaking News"} showAmount={3} pageRouteName={"BreakingNews"}/>)
             }
             if(index ===9)
             {
              return(<ArticleListPreload navigation={props.navigation} slugName={"interviews"} data={interviews} titleName={"Latest News"} showAmount={2} pageRouteName={"LatestNews"}/>)
             }
             if(index ===7)
             {
              return(<Carousel style='stat' items={comments} navigation={props.navigation} nameSlug={"Comments"}/>)
             }
             if(index === 11)
             {
              return (<CategorySnap navigation={props.navigation} elements={feature} title={"News Feature"} route={"NewsFeatures"} padding={20}/>)
             }
             if(index === 12)
             {
              return (<CategorySnap navigation={props.navigation} elements={clinical} title={"Clinical News"} route={"NewsFeatures"} padding={20}/>)
             }
             if(index === 15)
             {
              return (<Single item={motoring[0]} navigation={props.navigation} padding={20} />)
             }
             if(index === 16)
             {
              return (<Single item={cartoon[0]} navigation={props.navigation} padding={20} />)
             }
             if(index === 25)
             {
              return (<Single item={commercial[0]} navigation={props.navigation} padding={20}/>)
             }
          return(item.component)

        }}/>
        </SafeAreaView>
        ) : (
          <View style={{}}>
        <LoadingView indeterminate={true}/>
        </View>
        )}
    </SafeAreaView>
    );
};

export default HomeScreen;
const windowWidth = Dimensions.get('window').width;
const styles = StyleSheet.create({
    container:{
      backgroundColor:"#fff"
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
      width:'auto',
      borderStyle:'solid',
      marginHorizontal:20,
      
    },
    topSmallNav:{
        flex:1,
        flexDirection:'row',
        marginTop:10,
        marginBottom:10,
        marginHorizontal:10,
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
        paddingLeft:10,
        fontFamily: 'Merriweather_700Bold',
        fontSize:16,
    },
    titleContainer:{
        flex:1,
        justifyContent:'flex-start',
    },
    loadingContainer:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#000',
        height:'100%'
    },
    
});