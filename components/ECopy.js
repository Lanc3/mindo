import AsyncStorage from '@react-native-async-storage/async-storage';
import { useIsFocused } from '@react-navigation/native';
import React, { useCallback, useEffect, useState } from 'react';
import { Dimensions, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { newGetPostsByCatSlug } from '../hooks/useResults';
export function ECopy({navigation,props}) {
    const [isFreeAccount, setIsFreeAccount] = useState(false);
    const [data, setData] = useState({});
    const isFocused = useIsFocused();

    const retrieveData = useCallback(async () => {

        try{
            const response = await newGetPostsByCatSlug("ecopy",1,1);
            setData(response.posts[0]);
          }catch(error){
              
          }
    },[]);
    useEffect (() => {
        retrieveData();
      },[retrieveData]);

      useEffect(() => {
        (async () => {
            const data = await AsyncStorage.getItem('userProfile');
            if(data !== null)
            setIsFreeAccount(JSON.parse(data).isLoggedIn);
        })()
    }, [isFocused]);
    
    return (
        <View>
        <View style={styles.container}>
            <View style={styles.imageContainer}>
            <Image style={styles.image} source={{ uri: ""+data.media }}/>
            </View>
            <View style={styles.textContainer}>
                <Text style={styles.greenText}>ecopy</Text>
                <Text style={styles.title}>{data.title}</Text>
                {!isFreeAccount ?
                <Text>You need to be logged in to access this content. Please login or sign up using the links below.</Text>
                :<View><Text>Read the latest Mindo eCopy right here.</Text></View>}
            </View>
        </View>
        {!isFreeAccount ?
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

        maxWidth:'auto',
        marginBottom:0,
        paddingTop:20,
    },
    spacer:{
        padding:0
    },
    image:{
      height:200,
      width:180,
      resizeMode:'contain',
      flex:1
    },
    imageContainer:{
        padding:10
    },
    greenText:{
        color:'#6e822b',
        fontFamily: 'Lato_400Regular',
        fontSize:13,
    },
    title:{
      fontFamily: 'Merriweather_400Regular',
      fontSize:20,
    },
    text_footer: {
        color: '#fff',
        fontFamily: 'Lato_400Regular',
        fontSize:13,
    },
    textContainer:{
        flex:1,
        maxWidth:(windowWidth/2)-30,
        paddingTop:20,
        paddingLeft:20
    },
    drawerButton:{
        backgroundColor:'#6e822b',
        padding:10,
        margin:10,
        borderRadius:4,
        alignItems:'center',
        marginHorizontal:20,
      }
})