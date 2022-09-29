import { useNavigation } from '@react-navigation/native';
import React, { useEffect } from "react";
import { Dimensions, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export function HalfCard({navi,props,title,excerpt,date,mediaID,totalData,nameSlug,authorId}) {

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
            <View style={styles.halfText}>
            <Image style={styles.image} source={{ uri: ""+mediaID }}/>
            <View style={styles.textContainer}>
            <Text style={styles.greenTitle}>{nameSlug}</Text>
            <Text style={styles.titleStyle} numberOfLines={3}>{title}</Text>
            <Text style={{fontWeight:'bold', color:'black'}} >By - {authorId}</Text>
            
                    <Text> - </Text>
                    <Text >{convertDateToEnglish(date)}</Text>
            </View>
            
                <View style={styles.footer}>
                    
                </View>
            </View>

            <View style={styles.halfText}>
           
            </View>

            </TouchableOpacity>
        </View>
    );
};
const windowWidth = Dimensions.get('window').width;
const halfWindowWidth = windowWidth/2;
const styles = StyleSheet.create({
    container:{
        backgroundColor:'#fff',
        flex:1,
        flexDirection:"row"
    },
    halfText:{
        flex: 1,
        flexDirection:"row"
    },
    textContainer:{
        width:halfWindowWidth
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
        width:halfWindowWidth-60,
        fontSize:15,
        justifyContent:'flex-start',
        paddingRight:10
    },
    textStyle:{
    fontSize:15,
    paddingHorizontal:10,
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
    width:50,
    height:75,
    margin:10
    
    },
    greenTitle:{
        color:'#6e822b',
        margin:2
    },
    footer:{

    }
})