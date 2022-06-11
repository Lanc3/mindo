import React,{useEffect,useState,useCallback,useRef} from "react";
import { TouchableOpacity, Text,ScrollView,StyleSheet, View, FlatList} from "react-native";
import {getCategoyIdBySlug,getPostsByCategory,newGetPostsByCatSlug} from '../../hooks/useResults'
import { Footer } from "../../components/Footer";
import { ShortCard } from "../../components/ShortCard";
import { Header } from "../../components/Header";
import LoadingView from "../../components/LoadingView";
import { AdManager } from "../../components/AdManager";

const AdvertiseScreen = ({navigation}) => {
    const [data, setData] = useState([]);
    const [page, setPage] = useState(1);
    const [loading, setLoading] = useState(0);
    const [totalPages, setTotalPages] = useState(0);
    const [title,setTitle] = useState("Advertise");
    const [slug,setSlug] = useState("advertise");
    const scrollRef = useRef();


    return(
        <View style={{ flex: 1 }} ref={scrollRef}>
        <Footer navi={navigation} refS={scrollRef}/>
        </View>
      );
    };

export default AdvertiseScreen;

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