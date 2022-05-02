import React,{ useState ,useEffect} from "react";
import { WebView } from 'react-native-webview';
import { StyleSheet,View,Text,Share,Image,SafeAreaView,TouchableOpacity, ScrollView } from 'react-native';
import Constants from 'expo-constants';
import { Dimensions } from 'react-native';
import WebRender from '../components/WebRender';
import { useRoute } from '@react-navigation/native';
import ContentRender from '../components/ContentRender';
import Footer from '../components/Footer';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function FullArticleScreen({navigation,props,route}) {
  const {htmlData,imageData,title,date} = route.params;
  const formatDate = (dateString) => {
    const options = { year: "numeric", month: "long", day: "numeric" }
    return new Date(dateString).toLocaleDateString(undefined, options)
}
const [isFreeAccount, setIsFreeAccount] = useState(true);
const [articlesLeft, setArticlesLeft] = useState(0);
const onPressLogIn = () => {
  console.log('log in');
  navigation.navigate('SignInScreen');
  //onPressOpen();
};
const retrieveData = async () => {
  try {
    const value = await AsyncStorage.getItem('userProfile');
    if (value !== null) {
      setIsFreeAccount(JSON.parse(value).freeAccount);
      setArticlesLeft(JSON.parse(value).freeArticle-1);
    }
    else{
      console.log("No data found");
    }
  } catch (error) {
    // Error retrieving data
  }
  if(isFreeAccount && articlesLeft<=0){
  try {
    await AsyncStorage.setItem(
      'userProfile',
      JSON.stringify({
        isLoggedIn: null,
        authToken: null,
        id: null,
        name: null,
        avatar: null,
        freeArticle: articlesLeft-1,
        freeAccount: true,
      })
    );
  } catch {
    console.log('Error storing data on device');

  }
  finally{
    if(articlesLeft<=0){
      onPressLogIn();
    }
  }
  }
};
useEffect(() => {
  retrieveData();
}, []);
function convertDateToEnglish(date){
  var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  var date = new Date(date);
  var month = months[date.getMonth()];
  var day = date.getDate();
  var year = date.getFullYear();
  return day + " " + month + ", " + year;
}
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
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
      <Text style={styles.title} numberOfLines={3}>{title}</Text>
      <View style={styles.subTitle}>
        <Text> Date - </Text>
        <Text>{convertDateToEnglish(date)}</Text>
      </View>
      <View>
      
      <TouchableOpacity style={styles.shareButton} onPress={onShare}>
                <Text style={styles.shareText}>Share</Text>
      </TouchableOpacity>
      </View>
      <View style={styles.imageContainer}>
      <Image style={styles.image} source={{ uri: ""+imageData }}/>
      </View>
      <ContentRender htmlData={htmlData} newHeight={1800}/>
      <Footer />
      </ScrollView>
      
    </SafeAreaView>
  );
}
const windowWidth = Dimensions.get('window').width;
const styles = StyleSheet.create({
    container: {
      fontSize:20,
      height:100,
      width:windowWidth,
      flex: 1,
      color:'#000',
      backgroundColor:'#fff'
    },
    title:{
      fontSize:25,
      fontWeight:'bold',
      justifyContent:'center',
      padding:5,
    },
    subTitle:{
      flex:1,
      flexDirection:'row',
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
      backgroundColor:'#6e822b',
      borderRadius:10,
      padding:10,
      marginTop:10,
      marginBottom:10,
      marginLeft:10,
      marginRight:10,
      color:'#fff',
    },
    shareText:{
      color:'#fff',
      fontSize:20,
      fontWeight:'bold',
      textAlign:'center',
    }
  });