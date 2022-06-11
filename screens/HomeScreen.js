import React,{useEffect,useState,useCallback,useRef} from "react";
import { View, Text,Image,StyleSheet, TouchableOpacity, ScrollView ,Dimensions,Button} from "react-native";
import Carousel from "../components/Carousel";
import useResults from "../hooks/useResults";
import Footer from "../components/Footer";
import Svg, { Path } from "react-native-svg";
import { ECopy } from "../components/ECopy";
import ArticleList from "../components/ArticleList";
import AsyncStorage from '@react-native-async-storage/async-storage';
import {getCategoyIdBySlug,getLastPost,getPostsByCategory,getMediaAPI,fetchApiData,getPostByAuthorId,getTotalPostByAuthor} from '../hooks/useResults'
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
    const [team, setTeam] = useState([]);
    const [sliderData, setSliderData] = useState([]);
    const [totalData, setTotalData] = useState([]);
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
        try{
            const json = JSON.parse(await getPostsByCategory(69,1));
            const sliderData = await json.slice(0,2);
            setSliderData(sliderData);
            setlatestNews(json);
        }catch(error){
            console.log(error)
        }finally{
          setLoading(0.25);
          try{
            const json = JSON.parse(await getPostsByCategory(56,1));
            setComments(json);
        }catch(error){
            console.log(error)
        }finally{
          setLoading(0.5);
          try{
            const json = JSON.parse(await getPostsByCategory(37,1));
            const feature = await json.slice(0,2);
            setTotalData(feature);
            setFeature(json);
        }catch(error){
            console.log(error)
        }finally{
          setLoading(1);
          try{
            const json = JSON.parse(await getPostsByCategory(26,1));
            setTeam(json);
        }catch(error){
            console.log(error)
        }finally{
          setLoading(1);
          try{
            const json = JSON.parse(await getPostsByCategory(70,1));
            setClinical(json);
        }catch(error){
            console.log(error)
        }finally{
          setLoading(1);
          try {
            await AsyncStorage.setItem(
              'Articles',
              JSON.stringify({
                latestNews: latestNews,
                breakingNews:team,
                comments:comments,
                feature:feature,
                clinical:clinical,
              })
            );
          } catch {
            console.log('Error storing data on device');
          }finally{
          setLoading(1);
          }
        };
        };
        };
        };
      };

    },[]);

    useEffect(() => {
      getContent();
      }, [getContent]);

    return(
        <ScrollView style={styles.container}  ref={scrollRef}>
        <MostReadSection navigation={props.navigation} showAmount={5} pageRouteName={"MostReadScreen"}/>
        <ArticleList navigation={props.navigation} slugName={"latest-news"}  titleName={"Latest News"} showAmount={5} pageRouteName={"LatestNews"}/>
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