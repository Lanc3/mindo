import React,{useEffect,useState} from "react";
import { Image,TouchableOpacity, Text,ScrollView,StyleSheet, View, FlatList, requireNativeComponent} from "react-native";
import { ArticleCard } from "../../components/ArticleCard";
import useResults from "../../hooks/useResults";
import ConsultingRoomsScreen from "../classifieds/ConsultingRoomsScreen";
import { Footer } from "../../components/Footer";
import Carousel from "../../components/Carousel";
import { ShortCard } from "../../components/ShortCard";

const PhotoNews = ({navigation}) => {
    const [categoryID,setCategorID]  = useState(0);
    const [getCategoryAPI,getAllPosts,getCategoyIdBySlug,getFirstPostSet,getPostsByCategory,categories,getMediaAPI,getAuthor,fetchApiData] = useResults();
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [posts, setPosts] = useState([]);
    const [page, setPage] = useState(1);
    const [loading, setLoading] = useState(true);
    const [lastPage, setLastPage] = useState(false);
    const [categoryId, setCategoryId] = useState(0);
    const [totalPages, setTotalPages] = useState(0);
    const nextpage = () =>{
      setPage(prevPage => prevPage + 1)
    }
    const perviouspage = () =>{
      setPage(prevPage => prevPage - 1)
    }
    const getid = async() =>{
        try{
            const response = await getCategoyIdBySlug("photo-news");
            const id = await response;
            const json = JSON.parse(await getPostsByCategory(id,page));
            const total = fetchApiData("photo-news");//getting total pages per slug
            setTotalPages(total._W)
            setData(json);
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
        <ScrollView style={{ flex: 1, paddingTop: 5 }}>
          <Text style={styles.pageTitle}>Photo News</Text>
          <Carousel
        style='slide'
        items={data}
        navigation={navigation}
        nameSlug={"Photo News"}
      />
      {data.length > 0 ? (
        <View>
          <View style={styles.max}>
        <FlatList
          // onEndReached={() => {
          //   if (!loading && !lastPage) {
          //     setPage(prevPage => prevPage + 1);
          //   }
          // }}
          data={data}
          scrollEnabled={false}
          keyExtractor={item => ""+item.date+item.id.toString()}
          renderItem={({ item }) => (
                <ShortCard props title={item["title"]["rendered"].toString()}
                excerpt = {item["excerpt"]["rendered"].toString()}
                date = {item["date"].toString()}
                mediaID = {item["featured_media"]}
                totalData = {item["content"]["rendered"]}
                authorId = {item["author"]}
                navi = {navigation}
                nameSlug = {'Photo News'}
                />

            )}
          />
          <View style={styles.pageNav}>
            <Text>{totalPages}</Text>
            {page > 1 ? 
            <TouchableOpacity onPress={()=> perviouspage()}>
            <Text>Previous  </Text>
          </TouchableOpacity> : null}
          <Text> {page} </Text>
            <TouchableOpacity onPress={()=> nextpage()}>
              <Text>  Next</Text>
            </TouchableOpacity>
          </View>
          </View>
          <ScrollView>
          <Footer
          navi={navigation}
          />
          </ScrollView>
            </View>
          ) : (
          <View>
            <Image style={styles.image} source={require("../../assets/images/logo.png" )}/>
            <Text style={styles.pageTitle}>Loading...</Text>
          </View>
          )}
        </ScrollView>
      );
    };

export default PhotoNews;

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
        margin:5,
        alignSelf:'center'
    },
    image:{
      width: '100%',
      height:300,
      resizeMode: 'contain',
    },
    max:{
      maxHeight:1700
    },
    pageNav:{
      flexDirection:'row'
    }
});