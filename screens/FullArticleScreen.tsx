import React,{ useState ,useEffect,useRef} from "react";
import { StyleSheet,View,Text,Share,Image,SafeAreaView,TouchableOpacity, ScrollView } from 'react-native';
import { Dimensions } from 'react-native';
import ContentRender from '../components/ContentRender';
import Footer from '../components/Footer';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { AdManager } from "../components/AdManager";
import { FontAwesome } from '@expo/vector-icons';
import * as Linking from 'expo-linking';

export default function FullArticleScreen({navigation,props,route}) {
  const {nameSlug,authorName,htmlData,imageData,title,date} = route.params;
  const [name,setName] = useState(authorName)
  const scrollRef = useRef();
  const formatDate = (dateString) => {
    const options = { year: "numeric", month: "long", day: "numeric" }
    return new Date(dateString).toLocaleDateString(undefined, options)
}
const [isFreeAccount, setIsFreeAccount] = useState(true);
const [articlesLeft, setArticlesLeft] = useState(0);
const [autor,setAuthor] = useState("Mindo");
const onPressLogIn = () => {

  //navigation.navigate('SignInScreen');
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
const convertDateToEnglish = (date) => {
  
  var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  var d = new Date(date.replace(" ","T"))
  var month = months[d.getMonth()];
  var day = d.getDate();
  var year = d.getFullYear();
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
      <ScrollView style={styles.scrollView}  ref={scrollRef}>
      <AdManager selectedAd={"ICS_MPU"} sizeType={"SMALL"}/>
      <Text style={styles.greenTitle}>{nameSlug}</Text>
      <Text style={styles.title} numberOfLines={3}>{title}</Text>
      <View style={styles.subTitle}>
      <Text style={{paddingLeft:10}}>By </Text>
      <Text style={{color:'black'}}>{authorName.firstName} {authorName.lastName} - </Text>
        <Text>{convertDateToEnglish(date)}</Text>
      </View>
      <View>
      </View>
      <View style={styles.imageContainer}>
      <Image style={styles.image} source={{ uri: ""+imageData }}/>
      <View style={styles.shareButton}>
      <Text style={{color:'#eaeaea',padding:5}}>Share to:</Text>
      <View style={styles.spacer}>
                <FontAwesome.Button  name="twitter"size={18} color="#000" backgroundColor="#fff" onPress={onShare}>
                </FontAwesome.Button>
            </View>
            <View style={styles.spacer}>
                <FontAwesome.Button  name="facebook-square" size={18} color="#000" backgroundColor="#fff" onPress={onShare}>
                </FontAwesome.Button>
            </View>
            <View style={styles.spacer}>
                <FontAwesome.Button  name="linkedin-square" size={18} color="#000" backgroundColor="#fff" onPress={onShare}>
                </FontAwesome.Button>
            </View>
            <View style={styles.spacer}>
                <FontAwesome.Button  name="instagram" size={18} color="#000" backgroundColor="#fff" onPress={onShare}>
                </FontAwesome.Button>
            </View>
      </View>
      </View>
      <ContentRender htmlData={htmlData} newHeight={1800}/>
      <Footer navi={navigation} refS={scrollRef}/>
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
      flex:1,
      flexDirection:'row',
      justifyContent:'flex-start'
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
        
    }
  });