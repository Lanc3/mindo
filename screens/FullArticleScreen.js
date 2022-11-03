import { FontAwesome } from '@expo/vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useIsFocused } from "@react-navigation/native";
import he from 'he';
import React, { useEffect, useRef, useState } from "react";
import { Button, Dimensions, FlatList, Image, ScrollView, Share, StyleSheet, Text, View } from 'react-native';
import { AdManager } from "../components/AdManager";
import ContentRender from '../components/ContentRender';
import Footer from '../components/Footer';
import { useCounter } from '../components/GlobalContext';
import { Modal } from "../components/Modal";
export default function FullArticleScreen({navigation,props,route}) {
const {nameSlug,authorName,htmlData,imageData,title,date} = route.params;
const scrollRef = useRef();
const scrollViewRef = useRef();
const [popUpState, setPopUpState] = useState(false);
const [isLoggedIn, setIsLoggedIn] = useState(false);
const handleModal = () => setPopUpState(() => !popUpState);
const { count, increment, decrement } = useCounter();
const decodeString = (str) => {
  return str.replace(/(&nbsp;|<([^>]+)>)/ig, '').replace(/^(-)+|(-)+$/g,'');
}
const isFocused = useIsFocused();
useEffect(() => {
    if (isFocused) {
        scrollViewRef.current?.scrollTo({x: 5, y: 5, animated: false})
    }
}, [isFocused]);
useEffect(() => {
  scrollViewRef.current?.scrollTo({x: 5, y: 5, animated: false})
}, [title]);
const retrieveData = async () => {
  try {
    const value = await AsyncStorage.getItem('userProfile');
    if (value !== null) {
      setIsLoggedIn(JSON.parse(value).isLoggedIn);
    }
    else{
      
    }
  }
  catch(error){
    
  }
  finally{
    if(!isLoggedIn)
    {
      decrement();
      if(count === 1){
        setPopUpState(true);
      }
      else{
        setPopUpState(false);
      }
      if(count <= 0){
        increment(5)
        navigation.navigate('SignInScreen');
      }
    }
  }
};
useEffect(() => {
  retrieveData();
}, [title]);
const onShare = async () => {
  try {
    const result = await Share.share({
      message: 'React Native | A framework for building native apps using React',
    });
    if (result.action === Share.sharedAction) {
      if (result.activityType) {
        // shared with activity type of result.activityType
      } else {
        // shared
      }
    } else if (result.action === Share.dismissedAction) {
      // dismissed
    }
  } catch (error) {
    alert(error.message);
  }
};

  return (
    <ScrollView ref={scrollViewRef} style={styles.container} overScrollMode="never" removeClippedSubviews={true}>
      <Modal isVisible={popUpState}>
  <Modal.Container>
    <Modal.Header style={{color:'white'}} title="Article Limit Reached" />
    <Modal.Body>
      <Text style={{color:'white'}}>You have 0 Free article Left</Text>
      <Text style={{color:'white'}}>You must log in to continue reading</Text>
      </Modal.Body>
    <Modal.Footer>
      <Button title="Close" color='#000' onPress={handleModal} />
    </Modal.Footer>
  </Modal.Container>
</Modal>
<FlatList
overScrollMode="never"
      removeClippedSubviews={true}
        ListHeaderComponent={
          <View style={styles.scrollView} overScrollMode="never" removeClippedSubviews={true}>
      <AdManager selectedAd={"LDB_MOBILE"} sizeType={"SMALL"}/>
      <Text style={styles.greenTitle}>{nameSlug}</Text>
      <Text style={styles.title} numberOfLines={3}>{he.decode(decodeString(title))}</Text>
      <View style={styles.subTitle}>
      <Text style={{paddingLeft:10,color:'black',fontFamily: 'Lato_400Regular',fontWeight:'bold'}}>By </Text>
      <Text style={{color:'black',fontFamily: 'Lato_400Regular',fontWeight:'bold'}}>{authorName} - </Text>
        <Text style={{color:'black',fontFamily: 'Lato_400Regular',fontWeight:'bold'}}>{date}</Text>
      </View>
      <View>
      </View>
      <View style={styles.imageContainer}>
      <Image style={styles.image} source={{ uri: ""+imageData }}/>
      <View style={styles.shareButton}>
      
      <View style={styles.spacer}>
                <FontAwesome.Button  name="twitter"size={28} color="#000" backgroundColor='transparent' onPress={onShare}>
                </FontAwesome.Button>
            </View>
            <View style={styles.spacer}>
                <FontAwesome.Button  name="facebook-square" size={28} color="#000" backgroundColor='transparent' onPress={onShare}>
                </FontAwesome.Button>
            </View>
            <View style={styles.spacer}>
                <FontAwesome.Button  name="linkedin-square" size={28} color="#000" backgroundColor='transparent' onPress={onShare}>
                </FontAwesome.Button>
            </View>
            <View style={styles.spacer}>
                <FontAwesome.Button  name="instagram" size={28} color="#000" backgroundColor='transparent' onPress={onShare}>
                </FontAwesome.Button>
            </View>
      </View>
      </View>

      </View>
        }
        ListFooterComponent={
        <View>
          <ContentRender htmlData={htmlData} newHeight={1800}/>
          <Footer navi={navigation} refS={scrollRef}/>
        </View>}
      data={[]}
      listKey={(item, index) => `D_key${index.toString()}`}
        keyExtractor={(item, index) => `_key${index.toString()}`}
        renderItem={({ item, index })=>{}}/>
    </ScrollView>
  );
}
const windowWidth = Dimensions.get('window').width;
const styles = StyleSheet.create({
    container: {
   
      height:100,
      width:'auto',
      flex: 1,
      color:'#000',
      backgroundColor:'#fff'
    },
    title:{
      fontFamily: 'Merriweather_400Regular',
      fontSize:24,
      justifyContent:'center',
      padding:5,
      marginLeft:5
    },
    subTitle:{
      flex:1,
      flexDirection:'row',
      fontFamily: 'Lato_700Bold',
    },
    image:{
      width: windowWidth,
      height:300,
      resizeMode: 'contain',
    },
    imageContainer:{
    },
    scrollView: {
      marginHorizontal: 0,
    },
    shareButton:{
      flex:1,
      flexDirection:'row',
      justifyContent:'flex-start',
      paddingBottom:20,
      marginLeft:20
    },
    shareText:{
      color:'#fff',
      fontSize:20,
      fontWeight:'bold',
      textAlign:'center',
    },
    greenTitle:{
      color:'#6e822b',
      paddingTop:10,
      paddingLeft:10,
  },
    spacer:{
      margin:-5
    }
  });