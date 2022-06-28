import AsyncStorage from '@react-native-async-storage/async-storage';
import * as Linking from 'expo-linking';
import React, { useCallback, useEffect, useState } from 'react';
import { Dimensions, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { newGetPostsByCatSlug } from '../hooks/useResults';
export function ECopy({navigation,props}) {
    const [isFreeAccount, setIsFreeAccount] = useState(true);
    const [data, setData] = useState({});
    const retrieveData = useCallback(async () => {

        try {
          const value = await AsyncStorage.getItem('userProfile');
          if (value !== null) {
            setIsFreeAccount(JSON.parse(value).freeAccount);
            console.log(isFreeAccount)
          }
          else{
            console.log("No ecopy data found");
          }
        } catch (error) {
        }
        try{
            const response = await newGetPostsByCatSlug("ecopy",1,1);
            setData(response.posts[0]);
          }catch(error){
              console.log(error)
          }
    },[]);
    useEffect (() => {
        retrieveData();
      },[retrieveData]);
  const _handleFacebookLinking =() => {
        Linking.openURL("https://www.medilearning.ie/doctorcpd");
  };
    return (
        <View>
        <View style={styles.container}>
            <View style={styles.imageContainer}>
            <Image style={styles.image} source={{ uri: ""+data.media }}/>
            </View>
            <View style={styles.textContainer}>
                <Text style={styles.greenText}>ecopy</Text>
                <Text style={styles.title}>{data.title}</Text>
                <Text>You need to be logged in to access this content. Please login or sign up using the links below.</Text>
            </View>
        </View>
        {isFreeAccount ?
        <TouchableOpacity style={styles.drawerButton} onPress={() => {navigation.navigate("SignInScreen")}}>
              <Text style={styles.text_footer}>Log In</Text>
            </TouchableOpacity> :
            <TouchableOpacity style={styles.drawerButton} onPress={() => {navigation.navigate("Ecopy-Reader",{content:data})}}>
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