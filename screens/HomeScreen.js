import React,{useEffect,useState,useCallback,useRef} from "react";
import { View, Text,Image,StyleSheet, TouchableOpacity, ScrollView ,Dimensions,Button} from "react-native";
import Carousel from "../components/Carousel";
import useResults from "../hooks/useResults";
import Footer from "../components/Footer";
import Svg, { Path } from "react-native-svg";
import { ECopy } from "../components/ECopy";
import ArticleList from "../components/ArticleList";
import SingleArticle from "../components/SingleArticle";
import AsyncStorage from '@react-native-async-storage/async-storage';
import {newGetPostsByCatSlug} from '../hooks/useResults'
import WebRender from "../components/WebRender";
import LoadingView from "../components/LoadingView";
import { AdBlock } from "../components/AdBlock";
import { AdBlockBig } from "../components/AdBlockBig";
import { useSelector } from 'react-redux'
import { AdManager } from "../components/AdManager";
import MostReadSection from "../components/MostReadSection";

const HomeScreen = (props) => {
    //const [getCategoyIdBySlug,getFirstPostSet,getPostsByCategory,getMediaAPI,fetchApiData,getPostByAuthorId,getTotalPostByAuthor] = useResults();
    const [latestNews, setlatestNews] = useState([]);
    const [isUpToDate, setIsUpToDate] = useState(false);
    const [comments, setComments] = useState([]);
    const [feature, setFeature] = useState([]);
    const [cartoon, setCartoon] = useState([]);
    const [sliderData, setSliderData] = useState([]);
    const [motoring, setMotoring] = useState([]);
    const [clinical, setClinical] = useState([]);
    const [loading, setLoading] = useState(0);
    const scrollRef = useRef();

    const checkIfTwoDatesAreEqual = (date1, date2) => {
        if (date1.getFullYear() === date2.getFullYear() && date1.getMonth() === date2.getMonth() && date1.getDate() === date2.getDate()) {
            return true;
        }
        return false;
    }

    const getContent = useCallback(async() =>{
      await newGetPostsByCatSlug("latest-news",2,1).then((response)=>{
        setSliderData(response.posts);
      }).then(()=>{
         newGetPostsByCatSlug("clinical-news",2,1).then((response)=>{
          setClinical(response.posts);
        }).then(()=>{
          newGetPostsByCatSlug("motoring",1,1).then((response)=>{
            setMotoring(response.posts);
         })
         .then(()=>{
          newGetPostsByCatSlug("cartoon",1,1).then((response)=>{
            setCartoon(response.posts);
         })
      });
    });
  });
  },[]);

    useEffect(() => {
      getContent();
      }, [getContent]);

    return(
        <ScrollView style={styles.container}  ref={scrollRef}>
        <AdManager selectedAd={"ICS_MPU"} sizeType={"SMALL"}/>
        <Carousel
        style='slide'
        items={sliderData}
        navigation={props.navigation}
        nameSlug={"Latest News"}
        />
        <ArticleList navigation={props.navigation} slugName={"latest-news"}  titleName={"Latest News"} showAmount={5} pageRouteName={"LatestNews"}/>
        <View style={styles.divider}/>
        <ArticleList navigation={props.navigation} slugName={"breaking-news"}  titleName={"Breaking News"} showAmount={3} pageRouteName={"BreakingNews"}/>
        <View style={styles.divider}/>
        <Carousel
        style='slide'
        items={clinical}
        navigation={props.navigation}
        nameSlug={"Clinical News"}
        />
        <Carousel
        style='single'
        items={motoring}
        navigation={props.navigation}
        nameSlug={"Motoring"}
        />
        <Carousel
        style='single'
        items={cartoon}
        navigation={props.navigation}
        nameSlug={"Cartoon"}
        />
        <SingleArticle navigation={props.navigation} slugName={"book-review"}  titleName={"Book Review"} showAmount={1} pageRouteName={"BookReview"}/>
        <SingleArticle navigation={props.navigation} slugName={"the-dorsal-view"}  titleName={"The Dorsal View "} showAmount={1} pageRouteName={"TheDorsalView"}/>
        <SingleArticle navigation={props.navigation} slugName={"food-and-drink"}  titleName={"Food and Drink"} showAmount={1} pageRouteName={"FoodAndDrink"}/>
        <SingleArticle navigation={props.navigation} slugName={"sport"}  titleName={"Sport"} showAmount={1} pageRouteName={"Sport"}/>
        
        <ArticleList navigation={props.navigation} slugName={"clinical-news"}  titleName={"Clinical News"} showAmount={3} pageRouteName={"ClinicalNews"}/>
        
      {/* {team.length > 0 ? (
        <View>
        <AdManager selectedAd={"ICS_MPU"} sizeType={"SMALL"}/>
      <Carousel
        style='slide'
        items={sliderData}
        navigation={props.navigation}
        nameSlug={"Latest News"}
      />
      <ArticleList navigation={props.navigation} list={latestNews} slugName={"latest-news"}  titleName={"Latest News"} showAmount={5} pageRouteName={"LatestNews"}/>
      <View style={styles.divider}/>
      <ArticleList navigation={props.navigation} list={team} slugName="breaking-news" titleName={"Breaking News"} showAmount={3} pageRouteName={"BreakingNews"}/>
      <View style={styles.divider}/>
      <View style={styles.topSmallNav}>
                  <View style={styles.titleContainer}>
                    <Text style={styles.titleStyle}>Comment</Text>
                  </View>
                  <TouchableOpacity onPress={()=>{props.navigation.navigate('MainDrawer',{screen :'Editorial'});}}>
                      <View style={styles.veiwContainer}>
                        <Text style={styles.viewAll}>View All</Text>
                      </View>
                  </TouchableOpacity>
              </View>
      <Carousel
        style='stats'
        items={comments}
        navigation={props.navigation}
        nameSlug={"Comments"}
        title={"Comment"}
        pageRouteName={"Editorial"}
      />
      <AdBlockBig/>
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
        items={totalData}
        navigation={props.navigation}
      />
      <ArticleList navigation={props.navigation} list={feature} slugName={"news-features"} titleName={"News Features"} showAmount={3} pageRouteName={"NewsFeatures"}/>
      <View style={styles.divider}/>
   
      <View style={styles.divider}/>
      <View style={styles.topSmallNav}>
                  <View style={styles.titleContainer}>
                    <Text style={styles.titleStyle}>Clinical News</Text>
                  </View>
                  <TouchableOpacity onPress={()=>{props.navigation.navigate('MainDrawer',{screen :'ClinicalNews'});}}>
                      <View style={styles.veiwContainer}>
                        <Text style={styles.viewAll}>View All</Text>
                      </View>
                  </TouchableOpacity>
              </View>
      <Carousel
        style='slide'
        items={clinical}
        navigation={props.navigation}
      />
      <ArticleList navigation={props.navigation} list={feature} slugName={"clinical-news"} titleName={"Clinical News"} showAmount={3} pageRouteName={"ClinicalNews"}/>
      <View style={styles.divider}/>
      <View style={styles.topSmallNav}>
                  <View style={styles.titleContainer}>
                    <Text style={styles.titleStyle}>Clinical News</Text>
                  </View>
                  <TouchableOpacity onPress={()=>{props.navigation.navigate('MainDrawer',{screen :'ClinicalNews'});}}>
                      <View style={styles.veiwContainer}>
                        <Text style={styles.viewAll}>View All</Text>
                      </View>
                  </TouchableOpacity>
              </View>
      <Carousel
        style='slide'
        items={totalData}
        navigation={props.navigation}
      />
      <ArticleList navigation={props.navigation} list={feature} slugName={"life"} titleName={"Life"} showAmount={3} pageRouteName={"ClinicalNews"}/>
      <View style={styles.divider}/>
      <Footer navi={props.navigation} refS={scrollRef}/>

      </View>
      )
    : (
      <View>
        <LoadingView loadingProgress={loading}/>
          </View>
    )}
    <TouchableOpacity onPress={() => reference._root.scrollToPosition(0, 0)}>
        <Text style={{color:'white'}}>Back to top</Text>
      </TouchableOpacity> */}
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
    },
    loadingContainer:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#000',
        height:'100%'
    },
});