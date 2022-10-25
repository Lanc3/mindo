import { useNavigation } from '@react-navigation/native';
import he from 'he';
import React, { useEffect } from "react";
import { Dimensions, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
export function ArticleCard({navi,props,title,excerpt,date,mediaID,totalData,nameSlug,authorId}) {



useEffect(() => {
  }, []);
  const navigation = useNavigation();
    return (
        <View style={styles.container}>
            <TouchableOpacity
                onPress={() => navi.navigate("FullArticleScreen",{nameSlug:nameSlug,authorName:authorId,title:title,date:date,imageData:mediaID,htmlData:totalData})}
            >
                <Image style={styles.image} source={{ uri:""+mediaID }}/>
                <Text style={styles.greenTitle}>{nameSlug}</Text>
                <Text style={styles.titleStyle}>{he.decode(title)}</Text>
                <View style={styles.footer}>
                    <Text style={{paddingLeft:10,fontFamily: 'Lato_400Regular',
        fontSize:13,}}>By </Text>
                    <Text style={{fontFamily: 'Lato_400Regular',
        fontSize:13, color:'black'}}>{authorId}</Text>
                    <Text> - </Text>
                    <Text style={{fontFamily: 'Lato_400Regular',
        fontSize:13, color:'black'}} >{date}</Text>
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
        fontFamily: 'Merriweather_400Regular',
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
        fontFamily: 'Lato_400Regular',
        fontSize:13,
    },
    footer:{
        flex:1,
        flexDirection:'row',
        height:20,
        width:'100%'
    }
})