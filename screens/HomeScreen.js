import React, { useCallback, useEffect, useRef, useState } from "react";
import { Dimensions, SafeAreaView, StyleSheet, View } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import { AdManager } from "../components/AdManager";
import ArticleList from "../components/ArticleList";
import Carousel from "../components/Carousel";
import Footer from "../components/Footer";
import LoadingView from "../components/LoadingView";
import SingleArticle from "../components/SingleArticle";
import { newGetPostsByCatSlug } from '../hooks/useResults';
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
    const [isLoaded, setIsLoading] = useState(false);
    const scrollRef = useRef();
    const homeItems=[];
const getContent = useCallback(async() =>{

      try{
        const results = await Promise.all([
          newGetPostsByCatSlug("latest-news",2,1),
          newGetPostsByCatSlug("clinical-news",2,1),
          newGetPostsByCatSlug("motoring",1,1),
          newGetPostsByCatSlug("cartoon",1,1),
          newGetPostsByCatSlug("comment",5,1),
        ])
        const finalData = await Promise.all(results.map(result => result.posts));
        setSliderData(finalData[0]);
        setClinical(finalData[1]);
        setMotoring(finalData[2]);
        setCartoon(finalData[3]);
        setComments(finalData[4]);
        setIsLoading(true)
      }catch(error){
        console.log(error);
      }
  },[]);

    useEffect(() => {
      getContent();
      }, [getContent]);

    return(
        <SafeAreaView style={styles.container}  ref={scrollRef}>
        {isLoaded ? (
        <SafeAreaView>
        <FlatList
        ListHeaderComponent={
          <View>
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
        style='stat'
        items={comments}
        navigation={props.navigation}
        nameSlug={"Comment"}
        />
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
          </View>
        }
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
          return(<View></View>)

        }}/>
        </SafeAreaView>
        ) : (
      <SafeAreaView>
        <LoadingView indeterminate={true}/>
        </SafeAreaView>)}
    </SafeAreaView>
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
      marginLeft:5,
      paddingVertical:2
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