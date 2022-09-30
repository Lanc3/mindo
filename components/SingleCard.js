import { useNavigation } from '@react-navigation/native';
import React from "react";
import { Dimensions, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { WebView } from 'react-native-webview';
export function SingleCard({navi,props,title,excerpt,date,mediaID,totalData,nameSlug,authorId}) {


const INJECTED_JAVASCRIPT = `(function() {
    var span = document.createElement('p');

// Set DOM property
span.style.fontSize = '300%';
span.style.fontWeight = 'bold';
span.style.fontFamily = 'Merriweather';
span.innerHTML ='${title}';

// Add to document
document.body.appendChild(span);
})();`;

  const navigation = useNavigation();
    return (
        <View style={styles.container}>
            <TouchableOpacity
                onPress={() => navi.navigate("FullArticleScreen",{nameSlug:nameSlug,authorName:authorId,title:title,date:date,imageData:mediaID,htmlData:totalData})}
            >
                <Image style={styles.image} source={{ uri:mediaID }}/>
                <Text style={styles.greenTitle}>{nameSlug}</Text>
                <WebView
                    style={styles.titleStyle}
                    injectedJavaScript={INJECTED_JAVASCRIPT}
                    />
                <View style={styles.footer}>
                    <Text style={{paddingLeft:10}}>By </Text>
                    <Text style={{fontWeight:'bold', color:'black'}}>{authorId}</Text>
                    <Text> - </Text>
                    <Text >{date}</Text>
                </View>
                <View style={{margin:0}}>
                <Text style={styles.textStyle} numberOfLines={3}>{excerpt}</Text>
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
        marginLeft:5,
        fontSize:17,
        fontWeight:'bold',
        justifyContent:'flex-start',
        height:60,
        marginBottom:10
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
    width:windowWidth,
    height:190,
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