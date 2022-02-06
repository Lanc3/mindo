import React,{useEffect,useState} from "react";
import { View, Text,Image,StyleSheet, SafeAreaView, ScrollView } from "react-native";
import { SocialContent } from "../components/SocialContent";
import { ArticleCard } from "../components/ArticleCard";
import Carousel from "../components/Carousel";
import useResults from "../hooks/useResults";


const HomeScreen = (props) => {
    const [getCategoryAPI,getAllPosts,getCategoyIdBySlug,getFirstPostSet,getPostsByCategory,categories,getMediaAPI,getAuthor,fetchApiData] = useResults();
    const [latestNews, setlatestNews] = useState([]);
    const [comments, setComments] = useState([]);
    const [feature, setFeature] = useState([]);
    const [team, setTeam] = useState([]);
    const [loading, setLoading] = useState(true);
    const getid = async() =>{
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

    };

     useEffect(() => {
        getid();
      },[]);

    return(
        <ScrollView style={styles.container}>
      {team.length > 0 ? (
        <View>
      <Text style={styles.titleStyle}>
        Latest News
      </Text>
      <Carousel
        style='slide'
        items={latestNews}
        navigation={props.navigation}
      />
      <Text style={styles.titleStyle}>
        Comments
      </Text>
      <Carousel
        style='slide'
        items={comments}
        navigation={props.navigation}
      />
      <Text style={styles.titleStyle}>
        Featured News
      </Text>
      <Carousel
        style='slide'
        items={feature}
        navigation={props.navigation}
      />
      <Text style={styles.titleStyle}>
        Comments
      </Text>
      <Carousel
        style='slide'
        items={team}
      />
      </View>
      )
    : (
      <View>
            <Image style={styles.image} source={require("../assets/images/logo.png" )}/>
            <Text style={styles.pageTitle}>Loading...</Text>
          </View>
    )}
    <SocialContent></SocialContent>
    </ScrollView>
    );
};

export default HomeScreen;

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
        alignSelf:'center'
    }
});