import React,{useEffect,useState} from "react";
import { View,SafeAreaView, Text,Button,StyleSheet, ScrollView, FlatList} from "react-native";
import { ArticleCard } from "../../components/ArticleCard";
import useResults from "../../hooks/useResults";
import ConsultingRoomsScreen from "../classifieds/ConsultingRoomsScreen";

const BreakingNews = ({navigation}) => {
    const [categoryID,setCategorID]  = useState(0);
    const [getCategoryAPI,getAllPosts,getCategoyIdBySlug,getFirstPostSet,getPostsByCategory,categories,getMediaAPI,getAuthor,fetchApiData] = useResults();
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [posts, setPosts] = useState([]);
    const [page, setPage] = useState(1);
    const [loading, setLoading] = useState(true);
    const [lastPage, setLastPage] = useState(false);
    const [categoryId, setCategoryId] = useState(0);

    const getid = async() =>{
        
        try{
            const response = await getCategoyIdBySlug("breaking-news");
            const id = await response;
            const json = JSON.parse(await getPostsByCategory(id,page));
            setData(prevPosts => [...prevPosts, ...json]);
        }catch(error){
            console.log(error)
        }finally{
            setLoading(false);
        };

    };

     useEffect(() => {
        getid();
      }, [page]);
    return(
        <SafeAreaView style={{ flex: 1, paddingTop: 5 }}>
      {data.length > 0 ? (
        <FlatList
          onEndReached={() => {
            if (!loading && !lastPage) {
              setPage(prevPage => prevPage + 1);
            }
          }}
          data={data}
          keyExtractor={item => item.id.toString()}
          renderItem={({ item }) => (
                <ArticleCard props title={item["title"]["rendered"].toString()}
                excerpt = {item["excerpt"]["rendered"].toString()}
                date = {item["date"].toString()}
                mediaID = {item["featured_media"]}
                totalData = {item["content"]["rendered"]}
                authorId = {item["author"]}
                navi = {navigation}
                />

            )}
          />
          ) : (
            <Text>Loading...</Text>
          )}
        </SafeAreaView>
      );
    };

export default BreakingNews;

const styles = StyleSheet.create({
    container:{
        flex: 1,
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:'#FFFFFF'
    },
    pageTitle:{
        fontSize:26,
        fontFamily:'sans-serif',
        fontWeight:"bold",
        margin:5
    }
});