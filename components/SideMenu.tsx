import React,{ useState ,useEffect} from "react";
import { StyleSheet,SafeAreaView,TouchableOpacity, Text, View, Switch } from "react-native";
import AsyncStorage from '@react-native-async-storage/async-storage';
import AccordionListItem from "./AccordionListItem";
import { List } from 'react-native-paper';
import { ScrollView } from "react-native-gesture-handler";
const SideMenu = ({callParentScreenFunction,closeDrawer}) => {
  const retrieveData = async () => {
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
  };

  const [isFreeAccount, setIsFreeAccount] = useState(true);
  const [articlesLeft, setArticlesLeft] = useState(0);

  useEffect (() => {
    retrieveData();
  });

    return (
     <View style={styles.safeAreaView}>
        {isFreeAccount ? (
        <ScrollView style={styles.safeAreaView}>
        <View style={styles.header}>
          <Text style={styles.DrawerTitle}>
            {isFreeAccount? "Member Log In" : "Premium Account"}
          </Text>
          <TouchableOpacity onPress={() => closeDrawer()}>
            <Text style={styles.link}>X</Text>
          </TouchableOpacity>
        </View>
        <View >
          <TouchableOpacity style={styles.drawerButton} onPress={() => callParentScreenFunction("SignInScreen")}>
            <Text style={styles.text_footer}>Log In</Text>
          </TouchableOpacity>

        </View>
        <View style={styles.outlinksContainer} >
          <Text style={styles.outlinks}>Register</Text>
          <Text style={styles.outlinks}>|</Text>
          <Text style={styles.outlinks}>Lost Your Password</Text>
          </View>
        <View>
        <AccordionListItem title={'Sign Up'}>
          <View style={{padding:15}}>
            <Text style={styles.text_footer_small}>Sign up now for ease of access to The Medical Independent, Ireland’s most frequently published medical newspaper, delivering award-winning news and investigative reporting.
            </Text>
            <List.Item
              title="First Item"
              description="&#9679; receive the eCopy two days prior to the printed edition."
              descriptionStyle={styles.listItem}
          />
          <List.Item
              title="First Item"
              description="&#9679; can partake in our online MCQs."
              descriptionStyle={styles.listItem}
          />
          <List.Item
              title="First Item"
              description="&#9679; can enter our online sports quiz."
              descriptionStyle={styles.listItem}
          />
          </View>
          <TouchableOpacity style={styles.drawerButton} onPress={() => callParentScreenFunction("SignUpScreen")}>
              <Text style={styles.text_footer}>Sign Up</Text>
            </TouchableOpacity>
          </AccordionListItem>
          <AccordionListItem title={'About Us'}>
            <View style={{padding:15}}>
              <Text style={styles.aboutUsTitle}>
              Medicalindependent.ie is Ireland's only investigative medical news website for doctors, healthcare professionals and anyone with an interest in health issues.
                </Text>
            </View>
          <View style={{padding:15}}>
            <Text style={styles.text_footer_small}>Established in 2010, along with its sister publication The Medical Independent, our stated aim is to investigate and analyse the major issues affecting healthcare and the medical profession in Ireland. The Medical Independent has won a number of awards for its investigative journalism, and its stories are frequently picked up by national digital, broadcast and print media. The Medical Independent is published by GreenCross Publishing.
            </Text>
            <List.Item
              title="First Item"
              description="Address: Top Floor, 111 Rathmines Road Lr, Dublin 6 "
              descriptionStyle={styles.listItem}
          />
          <List.Item
              title="First Item"
              description="Tel: 353 (01) 441 0024 "
              descriptionStyle={styles.listItem}
          />
          <List.Item
              title="First Item"
              description="GreenCross Publishing is owned by Graham Cooke. "
              descriptionStyle={styles.listItem}
          />
          </View>
          </AccordionListItem>
        </View>
        <View>
        <Text style={styles.DrawerTitle}>
            {isFreeAccount? "Free Articles Left" : "Premium Account"}: {articlesLeft}
          </Text>
        </View>
      </ScrollView>
      ) : (
        <View style={styles.safeAreaView}>
          <View style={styles.header}>
            <Text style={styles.DrawerTitle}>
              {isFreeAccount? "Member Log In" : "Premium Account"}
            </Text>
          </View>
          <View >
            <TouchableOpacity style={styles.drawerButton} onPress={() => callParentScreenFunction("SportsQuiz")}>
              <Text style={styles.text_footer}>Sports Quiz</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.drawerButton} onPress={() => callParentScreenFunction("ECopy")}>
              <Text style={styles.text_footer}>E-Copy</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.drawerButton} onPress={() => callParentScreenFunction("SignInScreen")}>
              <Text style={styles.text_footer}>Log In</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.drawerButton} onPress={() => callParentScreenFunction("SignUpScreen")}>
              <Text style={styles.text_footer}>Sign Up</Text>
            </TouchableOpacity>
          </View>
          <View>
        <Text style={styles.DrawerTitle}>
            {isFreeAccount? "Free Articles Left" : "Premium Account"}: {articlesLeft}
          </Text>
        </View>
        </View>
      )}
     </View>
    )
  }

  const styles = StyleSheet.create({
    safeAreaView: {
      flex: 1,
      backgroundColor: "#000",
      top:50
      
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
      padding: 10,
      color: "#444",
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
          color: "#00e5bf",
           fontSize: 50,
       },
       drawerButtonLogOut:{
        marginTop:100,
        backgroundColor:'#6e822b',
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
