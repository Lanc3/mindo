import React,{useEffect,useState} from "react";
import { View,ActivityIndicator, Text,Button,StyleSheet, ScrollView, FlatList} from "react-native";
import { ArticleCard } from "../../components/ArticleCard";
import useResults from "../../hooks/useResults";

const BreakingNews = ({navigation}) => {
    const [categoryID,setCategorID]  = useState(0);
    const [getCategoryAPI,getAllPosts,getCategoyIdBySlug,getFirstPostSet,getPostsByCategory,categories,getMediaAPI,getAuthor] = useResults();
    const [data, setData] = useState([]);
    const [isLoading, setLoading] = useState(true);

    const getid = async() =>{
        
        try{
            const response = await getCategoyIdBySlug("breaking-news");
            const id = await response;
            const json = JSON.parse(await getPostsByCategory(id,1));
            setData(json)
        }catch(error){
            console.log(error)
        }finally{
            setLoading(false);
        };

    };

     useEffect(() => {
        getid();
      }, []);

    return(
        <View style={styles.container}>
            <Text style={styles.pageTitle}>Breaking News</Text>
            {isLoading ? <ActivityIndicator/> : (
            <FlatList
            data={data}
            keyExtractor={({ id }, index) => id.toString()}
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
          )}

        </View>
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