import React,{useEffect,useState} from "react";
import { View,StyleSheet,Text,Image,TouchableOpacity,Dimensions} from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import * as Linking from 'expo-linking';
import { Avatar, Button, Card,Surface ,Title,IconButton, Paragraph,Divider } from 'react-native-paper';
import useResults from '../hooks/useResults';
import { WebView } from 'react-native-webview';
import WebRender from "./WebRender";
import { useNavigation } from '@react-navigation/native';
import {getCategoyIdBySlug,getAuthorName,getPostsByCategory,getMediaAPI,fetchApiData,getPostByAuthorId,getTotalPostByAuthor} from '../hooks/useResults'


export function ShortCard({navi,props,title,excerpt,date,mediaID,totalData,authorId,nameSlug}) {
    //const [getCategoryAPI,getAllPosts,getCategoyIdBySlug,getFirstPostSet,getPostsByCategory,categories,getMediaAPI,getAuthor,fetchApiData,getUser] = useResults();
    const [imageData, setImageData] = useState("../assets/images/splash.png");
    const [name, setName] = useState({firstName:"Mindo",lastName:""});


const getMedia = async() =>{
    try{
        const image = await getMediaAPI(mediaID);
        setImageData(image)
    }catch(error){
        console.log(error)
    }finally{
    };
}
const returnAutorName = async(id) =>{
    try{
        const name = await getAuthorName(id.toString()); 
        if(name.firstName === false){
 
            setName({firstName:"Mindo",lastName:""})
        }
        else {
            setName(name)
        }
        if(name === null || name === 'undefined'){
            setName({firstName:"Mindo",lastName:""})
        }
        
    }catch(error){
        console.log(error)
    }finally{
    };
}


function convertDateToEnglish(date){
    var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    var date = new Date(date);
    var month = months[date.getMonth()];
    var day = date.getDate();
    var year = date.getFullYear();
    return day + " " + month + ", " + year;
  }
useEffect(() => {
    getMedia();
    returnAutorName(authorId);
  }, []);
  const navigation = useNavigation();
    return (
        <View style={styles.container}>
            <TouchableOpacity
                onPress={() => navi.navigate("FullArticleScreen",{nameSlug:nameSlug,authorName:name,title:title,date:date,imageData:imageData,htmlData:totalData})}
            >
                <View style={styles.shortContainer}>
                    <View style={styles.imageContainer}>
                        <Image style ={styles.image}source={{ uri: imageData }}/>
                    </View>
                    <View style={styles.contentContainer}>
                    <Text style={styles.greenTitle}>{nameSlug}</Text>
                    <Text style={styles.titleStyle} numberOfLines={3}>{title}</Text>
                    <View style={styles.footer}>
                        <Text>By </Text>
                        <Text style={{color:'black'}}>{name.firstName} {name.lastName}</Text>
                        <Text> - </Text>
                        <Text >{convertDateToEnglish(date)}</Text>
                    </View>
                    </View>
                </View>
            </TouchableOpacity>
        </View>
    );
};
const styles = StyleSheet.create({
    container:{
        backgroundColor:'#fff',
        paddingTop:10,
        paddingBottom:10,
        borderBottomColor:'#eaeaea',
        borderBottomWidth:1,
    },
    spacer:{
        padding:10
    },
    cardStyle:{
        minWidth:'70%',
        paddingLeft:-10,
        margin:10,
        elevation:12,
    },
    divider:{
        backgroundColor:'#000',
        margin:15
    },
    content:{
        paddingLeft:0,
    },
    titleStyle:{
        paddingRight:10,
        fontSize:15,
        fontWeight:'bold',
        justifyContent:'flex-start',
        minHeight:50
    },
    surface: {
        elevation: 1,
    },
    containImage: {
        width: '100%',
        height: '100%',
        resizeMode: 'contain',
    },
    video: {
      marginTop: 20,
      maxHeight: 200,
      width: 320,
      height:3200,
      flex: 1,
      color:'#000'
    },
    cardEnd:{
       flex:1,
       flexDirection:'row',
       marginBottom:10,
       marginTop:10,
       alignItems:'flex-end'
    },
    author:{
        fontWeight:'bold'
    },
    render:{
        paddingBottom:10
    },
    dateS:{
        justifyContent:'center',
        color:'#000'
    },
    image:{
    width:'90%',
    height:'90%',
    margin:10,
    },
    greenTitle:{
        color:'#6e822b',
        paddingTop:10
    },
    footer:{
        flex:1,
        flexDirection:'row',
        height:20,
        width:'100%'
    },
    shortContainer:{
        flex:3,
        flexDirection:'row',
        justifyContent:'flex-start'
    },
    imageContainer:{
        flex:1,
        justifyContent:'flex-start'
    },
    contentContainer:{
        flex:2,
        justifyContent:'flex-start',
        paddingLeft:10
    }
})