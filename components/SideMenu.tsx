import React,{ useState ,useEffect,useCallback} from "react";
import { StyleSheet,SafeAreaView,TouchableOpacity, Text, View, Switch } from "react-native";
import AsyncStorage from '@react-native-async-storage/async-storage';
import AccordionListItem from "./AccordionListItem";
import { List } from 'react-native-paper';
import { ScrollView } from "react-native-gesture-handler";
import { useNavigation } from '@react-navigation/native';
import { removeToken } from "../hooks/useResults";
import {Linking} from 'react-native';
const SideMenu = ({callParentScreenFunction,closeDrawer}) => {
  const navigation = useNavigation();
  const [token,setToken] = useState({expoPushToken:''});
  const retrieveData = useCallback(async () => {
    try {
      const value = await AsyncStorage.getItem('userProfile');
      if (value !== null) {
        setIsFreeAccount(JSON.parse(value).freeAccount);
        setArticlesLeft(JSON.parse(value).freeArticle);
      }
      else{
        console.log("No data found");
      }
    } catch (error) {
      // Error retrieving data
    }
    try {
      const value = await AsyncStorage.getItem('expoToken');
      if (value !== null) {
        removeToken(JSON.parse(value).expoPushToken);
      }
      else{
        console.log("No data found");
      }
    } catch (error) {
      // Error retrieving data
    }
  },[]);

  const openPhone = (phoneNumber) =>{
    Linking.openURL(`tel:${phoneNumber}`)
  }

  const openURL = (url) =>{
    Linking.openURL(url)
  }
  const openEmail = (address) =>{
    Linking.openURL(`mailto:${address}`)
  }

  const logOut = async () => {
    closeDrawer();
    try {
      await AsyncStorage.removeItem('userProfile');
    } catch (exception) {
      console.log('Error deleting data', exception);
    }finally{

      callParentScreenFunction("SignInScreen");
    }
  };

  const [isFreeAccount, setIsFreeAccount] = useState(true);
  const [articlesLeft, setArticlesLeft] = useState(0);

  useEffect (() => {
    retrieveData();
  },[retrieveData]);

    return (
     <ScrollView style={styles.safeAreaView}>
      <SafeAreaView >
        {isFreeAccount ? (
        <View style={styles.safeAreaView}>

        <View style={styles.header}>
          <Text style={styles.DrawerTitle}>
            {isFreeAccount? "Member Log In" : "Premium Account"}
          </Text>
          <TouchableOpacity onPress={() => closeDrawer()}>
            <Text style={styles.link}>X</Text>
          </TouchableOpacity>
        </View>
        <View >
          <TouchableOpacity style={styles.drawerButton} onPress={() => {closeDrawer();callParentScreenFunction("SignInScreen")}}>
            <Text style={styles.text_footer}>Log In</Text>
          </TouchableOpacity>

        </View>
        <View style={styles.outlinksContainer} >
          <Text style={styles.outlinks}>Register</Text>
          <Text style={styles.outlinks}>|</Text>
          <Text style={styles.outlinks}>Lost Your Password</Text>
          </View>
        <View>
        <AccordionListItem title={'Publisher Information'}>
          <View style={{padding:15,minWidth:'100%',paddingLeft:2}}>
          <View style={styles.outlinksContainer} >
          <Text style={styles.listItem}>GreenCross Publications Ltd is owned by </Text>
          <Text style={{color:'#6E822B'}}>Graham Cooke.</Text>
          </View>
          <View style={styles.outlinksContainer} >
          <Text style={styles.listItem}>Med iLearning Ltd(Mindo) is owned by </Text>
          <Text style={{color:'#6E822B'}}>Graham Cooke.</Text>
          </View>
          <View style={styles.outlinksContainer} >
          <Text style={styles.listItem}>Call us at: </Text>
          <TouchableOpacity onPress={() => openPhone(353014410024)}>
            <Text style={{color:'#6E822B'}}>353 (01) 441 0024</Text>
          </TouchableOpacity>
          </View>
          <View style={styles.outlinksContainer} >
          <Text style={styles.listItem}>Email us at: </Text>
          <TouchableOpacity onPress={() => openEmail("graham@greenx.ie")}>
            <Text style={{color:'#6E822B'}}>graham@greenx.ie</Text>
          </TouchableOpacity>
          </View>
          <View style={styles.outlinksContainer} >
          <Text style={styles.listItem}>Visit GreenCross </Text>
          <TouchableOpacity onPress={() => openURL("http://www.greencrosspublishing.ie")}>
          <Text style={{color:'#6E822B'}}>www.greencrosspublishing.ie</Text>
          </TouchableOpacity>
          </View>
          <View style={styles.outlinksContainer} >
          <Text style={styles.listItem}>Visit Medical Independent </Text>
          <TouchableOpacity onPress={() => openURL("https://www.medicalindependent.ie/about-us/")}>
          <Text style={{color:'#6E822B'}}>www.medicalindependent.ie</Text>
          </TouchableOpacity>
          </View>
          </View>
          </AccordionListItem>
          <AccordionListItem title={'Privacy Policy'}>
            <View style={{padding:15}}>
            <View style={styles.outlinksContainer} >
          <Text style={styles.listItem}>This app stores your contact information : </Text>
          <Text style={{color:'#6E822B'}}>email</Text>
          </View>
          <View style={styles.outlinksContainer} >
          <Text style={styles.listItem}>See Full Privacy Policy </Text>
          <TouchableOpacity onPress={() => openURL("https://www.medicalindependent.ie/privacy-statement/")}>
          <Text style={{color:'#6E822B'}}>Here</Text>
          </TouchableOpacity>
          </View>
          </View>
          </AccordionListItem>
        </View>
      </View>
      ) : (
        <View style={styles.safeAreaView}>
          <View style={styles.header}>
            <Text style={styles.DrawerTitle}>
              {isFreeAccount? "Member Log In" : "Premium Account"}
            </Text>
            <TouchableOpacity onPress={() => closeDrawer()}>
            <Text style={styles.link}>X</Text>
          </TouchableOpacity>
          </View>
          <View >
            <TouchableOpacity style={styles.drawerButton} onPress={() => callParentScreenFunction("SportsQuiz")}>
              <Text style={styles.text_footer}>Update Journal</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.drawerButton} onPress={() => callParentScreenFunction("ECopy")}>
              <Text style={styles.text_footer}>eCopy</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.drawerButton} onPress={() => callParentScreenFunction("SportsQuiz")}>
              <Text style={styles.text_footer}>Sports Quiz</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.drawerButton} onPress={() => logOut()}>
              <Text style={styles.text_footer}>Log Out</Text>
            </TouchableOpacity>
          </View>
        </View>
      )}
      </SafeAreaView>
     </ScrollView>
    )
  }

  const styles = StyleSheet.create({
    safeAreaView: {
      flex: 1,
      backgroundColor: "#000",
      paddingTop:50
      
    },
    aboutUsTitle: {
      fontSize: 20,
      color: "#fff",

    },
    listItem:{
      color: "#fff",
    },
    container: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "#000"

    },
    title: {
      marginTop: 15,
      marginBottom: 10,
      color: "#444",
      fontSize: 14
    },
    outlinks: {
      padding: 5,
      color: "#fff",
      fontSize: 14
    },
    outlinksContainer: {
      flexDirection: "row",
      justifyContent: "center",
      marginTop: 15,
      marginBottom: 10,
      color: "#444",
      fontSize: 14
    },
    swithBlock: {
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center"
    },
    switchText: {
      fontSize: 14,
      color: "#222"
    },
    link: {
      padding: 5,
      margin: 5,
      color:'white',
      fontSize: 17,
      fontWeight: "bold"
    },
    description: {
      fontSize: 13,
      color: "#555",
      marginTop: 12,
      marginBottom: 6
    },
    sideMenuStyle: {
      margin: 0,
 
    },
      plus:{
        flex:1,
          color: "#6E822B",
           fontSize: 50,
       },
       drawerButtonLogOut:{
        marginTop:100,
        backgroundColor:'#6E822B',
        margin:5,
        borderRadius:4,
       },
       logo:{
         flex:1,
         paddingTop:2,
         alignSelf:'center'
       },
       button:{
          position:'absolute',
          top:20,
          zIndex:2
       },
       testingBounds:{
          alignItems:'center'
       },
       menuText:{
        padding:10,
        color:'white',
        alignSelf:'center',
        fontSize:15,
        fontFamily: "serif"
      },
      DrawerTitle: {
        marginTop: 7,
        color: "#6e822b",
        fontFamily: "serif",
        fontSize: 25,
        paddingLeft:10,
      },
      DrawerTitleContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingHorizontal: 20,
        paddingVertical: 10,
      },
      drawerButton:{
        backgroundColor:'#6e822b',
        padding:15,
        margin:10,
        borderRadius:4,
        alignItems:'center',
        
      },
      header: {
        flexDirection: "row",
        justifyContent: "space-between",
    },
    footer: {
        flex: 3,
        backgroundColor: '#000',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingHorizontal: 20,
        paddingVertical: 30
    },
    text_header: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 30
    },
    text_footer: {
        color: '#fff',
        fontSize: 17,
        fontWeight:'bold',
    },
    text_footer_small: {
        color: '#fff',
        fontSize: 15,
    },
    action: {
        flexDirection: 'row',
        marginTop: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#f2f2f2',
        paddingBottom: 5,
        zIndex:1
    },
    actionError: {
        flexDirection: 'row',
        marginTop: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#FF0000',
        paddingBottom: 5
    },
    textInput: {
        height:50,
        marginTop: Platform.OS === 'ios' ? 0 : -12,
        paddingLeft: 10,
        paddingTop:10,
        margin:15,
        color: '#fff',
        backgroundColor:'#1A1A1A'
    },
    errorMsg: {
        color: '#FF0000',
        fontSize: 14,
    },
    button: {
        alignItems: 'center',
        marginTop: 50
    },
    signIn: {
        width: '100%',
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 2
    },
    textSign: {
        fontSize: 18,
        fontWeight: 'bold'
    },
  });
  
  export default SideMenu;
