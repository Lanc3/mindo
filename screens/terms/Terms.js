import React,{useEffect,useState,useCallback,useRef} from "react";
import { TouchableOpacity, Text,ScrollView,StyleSheet, View, FlatList} from "react-native";
import {getCategoyIdBySlug,getPostsByCategory,fetchApiData} from '../../hooks/useResults'
import { Footer } from "../../components/Footer";
import { ShortCard } from "../../components/ShortCard";
import { Header } from "../../components/Header";
import LoadingView from "../../components/LoadingView";
import { AdManager } from "../../components/AdManager";

const Terms = ({navigation}) => {
    const [data, setData] = useState([]);
    const [page, setPage] = useState(1);
    const [loading, setLoading] = useState(0);
    const [totalPages, setTotalPages] = useState(0);
    const [title,setTitle] = useState("Latest News");
    const [slug,setSlug] = useState("latest-news");
    const scrollRef = useRef();

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
            const response = await getCategoyIdBySlug(slug);
            const id = await response;
            const json = JSON.parse(await getPostsByCategory(id,page));
            const total = await fetchApiData(slug);//getting total pages per slug
            setTotalPages(total)
            setData(json);
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

    return(
        <View style={{ flex: 1 }} ref={scrollRef}>
      <Footer navi={navigation} refS={scrollRef}/>
        </View>
      );
    };

export default Terms;

const styles = StyleSheet.create({
    container:{
        flex: 1,
        alignItems:'center',
        justifyContent:'center',
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
    pageNav:{
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