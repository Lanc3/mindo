import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { useCallback, useEffect, useState } from 'react';
import { Dimensions, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { WebView } from "react-native-webview";
import { newGetPostsByCatSlug } from '../hooks/useResults';

export default function UpdateJournalComponent({navigation,props}) {
    const [isFreeAccount, setIsFreeAccount] = useState(true);
    const [data, setData] = useState({});
    const retrieveData = useCallback(async () => {

        try {
          const value = await AsyncStorage.getItem('userProfile');
          if (value !== null) {
            setIsFreeAccount(JSON.parse(value).freeAccount);
            
          }
          else{
            console.log("No ecopy data found");
          }
        } catch (error) {
        }
        try{
            const response = await newGetPostsByCatSlug("update-journal",1,1);
            setData(response.posts[0]);
          }catch(error){
              console.log(error)
          }
    },[]);
    useEffect (() => {
        retrieveData();
      },[retrieveData]);

    return (
        <View>
        <View style={styles.container}>
            <View style={styles.imageContainer}>
            <Image style={styles.image} source={{ uri: ""+data.media }}/>
            </View>
            <View style={styles.textContainer}>
                <Text style={styles.greenText}>ecopy</Text>
                <WebView
                    
                    source={{ html: '<html><head></head><meta name="viewport" content="width=device-width,initial-scale=1.0"><body class="">'+data.title+'</body></html>' }}
                    />
                <Text>You need to be logged in to access this content. Please login or sign up using the links below.</Text>
            </View>
        </View>
        {isFreeAccount ?
        <TouchableOpacity style={styles.drawerButton} onPress={() => {navigation.navigate("SignInScreen")}}>
              <Text style={styles.text_footer}>Log In</Text>
            </TouchableOpacity> :
            <TouchableOpacity style={styles.drawerButton} onPress={() => {navigation.navigate("UpdateJournalReader",{content:data})}}>
              <Text style={styles.text_footer}>Read</Text>
            </TouchableOpacity>}
        </View>

    );
};
const windowWidth = Dimensions.get('window').width;
const styles = StyleSheet.create({
    container:{
        flex:1,
        flexDirection:'row',

        maxWidth:windowWidth,
        marginBottom:0,
        paddingTop:20,
    },
    spacer:{
        padding:0
    },
    image:{
      height:280,
      width:180,
      resizeMode:'contain',
      flex:1
    },
    imageContainer:{
        padding:10
    },
    greenText:{
        color:'#6e822b'
    },
    title:{
        fontSize:16,
        fontWeight:'bold'
    },
    text_footer: {
        color: '#fff',
        fontSize: 17,
        fontWeight:'bold',
    },
    textContainer:{
        flex:1,
        maxWidth:(windowWidth/2)-30,
        paddingTop:20,
        paddingLeft:20
    },
    drawerButton:{
        backgroundColor:'#6e822b',
        padding:15,
        margin:10,
        borderRadius:4,
        alignItems:'center',
        
      }
})