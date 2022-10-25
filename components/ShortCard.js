import { useNavigation } from '@react-navigation/native';
import he from 'he';
import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
export function ShortCard({navi,props,title,excerpt,date,mediaID,totalData,authorId,nameSlug}) {

 

  const navigation = useNavigation();
    return (
        <View style={styles.container}>
            <TouchableOpacity
                onPress={() => navi.navigate("FullArticleScreen",{nameSlug:nameSlug,authorName:authorId,title:title,date:date,imageData:mediaID,htmlData:totalData})}
            >
            <View style={styles.separators}></View>
                <View style={styles.shortContainer}>
                    <View style={styles.imageContainer}>
                    <Image style={styles.image} source={{ uri:mediaID }}/>
                    </View>
                    <View style={styles.contentContainer}>
                    <Text style={styles.greenTitle}>{nameSlug}</Text>
                    <Text style={styles.titleStyle}>{he.decode(title)}</Text>
                    <View style={styles.footer}>
                        <Text style={styles.by}>By - </Text>
                        <Text style={styles.by}>{authorId}</Text>
                        <Text> - </Text>
                        
                    </View>
                    <Text >{date}</Text>
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
        paddingHorizontal:10,
       
    },
    separators:{
        borderBottomColor:'#eaeaea',
        borderBottomWidth:1,
        marginRight:20,
        marginLeft:10,
        height:1
    },
    by:{
        fontFamily: 'Lato_400Regular',
        fontWeight:'bold',
        fontSize:15,
        color:'black'
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

        fontFamily: 'Merriweather_300Light',
        fontSize:15
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
        paddingTop:5,
        fontFamily: 'Lato_400Regular',
        fontSize:13,
       
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