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

export function ArticleCard({navi,props,title,excerpt,date,mediaID,totalData,nameSlug,authorId}) {

function convertDateToEnglish(date){
    var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    var date = new Date(date);
    var month = months[date.getMonth()];
    var day = date.getDate();
    var year = date.getFullYear();
    return day + " " + month + ", " + year;
}

useEffect(() => {
  }, []);
  const navigation = useNavigation();
    return (
        <View style={styles.container}>
            <TouchableOpacity
                onPress={() => navi.navigate("FullArticleScreen",{nameSlug:nameSlug,authorName:authorId,title:title,date:date,imageData:mediaID,htmlData:totalData})}
            >
                <Image style={styles.image} source={{ uri: ""+mediaID }}/>
                <Text style={styles.greenTitle}>{nameSlug}</Text>
                <Text style={styles.titleStyle} numberOfLines={3}>{title}</Text>
                <View style={styles.footer}>
                    <Text style={{paddingLeft:10}}>By </Text>
                    <Text style={{fontWeight:'bold', color:'black'}}>{authorId}</Text>
                    <Text> - </Text>
                    <Text >{convertDateToEnglish(date)}</Text>
                </View>
            </TouchableOpacity>
        </View>
    );
};
const windowWidth = Dimensions.get('window').width;
const styles = StyleSheet.create({
    container:{
        backgroundColor:'#fff',
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center',
        flex:1,
        paddingBottom:0
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
        margin:5
    },
    content:{
        paddingLeft:0,
    },
    titleStyle:{
        paddingLeft:10,
        fontSize:17,
        fontWeight:'bold',
        justifyContent:'flex-start',
        height:50
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
    width:windowWidth,
    height:200,
    resizeMode:'stretch'
    },
    greenTitle:{
        color:'#6e822b',
        paddingTop:10,
        paddingLeft:10,
    },
    footer:{
        flex:1,
        flexDirection:'row',
        height:20,
        width:'100%'
    }
})