import React,{useEffect,useState} from "react";
import { View,StyleSheet,Text,Image,TouchableOpacity} from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import * as Linking from 'expo-linking';
import { Avatar, Button, Card,Surface ,Title,IconButton, Paragraph,Divider } from 'react-native-paper';
import useResults from '../hooks/useResults';
import { WebView } from 'react-native-webview';
import WebRender from "./WebRender";
import { useNavigation } from '@react-navigation/native';

export function ArticleCard({navi,props,title,excerpt,date,mediaID,totalData,authorId}) {
    const [getCategoryAPI,getAllPosts,getCategoyIdBySlug,getFirstPostSet,getPostsByCategory,categories,getMediaAPI,getAuthor] = useResults();
    const [imageData, setImageData] = useState("../assets/images/splash.png");
    const [name, setName] = useState([]);

const LeftContent = props => <Avatar.Icon {...props} icon="folder" />

const _handleFacebookLinking =() =>
{
        Linking.openURL("http://www.facebook.com/MedicalIndependent");
};
const _handleTwitterLinking =() => {
    Linking.openURL("http://www.twitter.com/med_indonews");
};
const _handleLinkedInLinking =() => {
    Linking.openURL("http://www.linkedin.com/company/greencross-publishing");
};

const getMedia = async() =>{
    try{
        const image = await getMediaAPI(mediaID);
        setImageData(image)
    }catch(error){
        console.log(error)
    }finally{
       
    };
}

const getAuthorName = async() =>{
    try{
        const name = await getAuthor(1);
        console.log(name)
        setName(name)
    }catch(error){
        console.log(error)
    }finally{
    };
}

const formatDate = (dateString) => {
    const options = { year: "numeric", month: "long", day: "numeric" }
    return new Date(dateString).toLocaleDateString(undefined, options)
}
useEffect(() => {
    getMedia();
  }, []);
  const navigation = useNavigation();
    return (
        <View style={styles.container}>
            <TouchableOpacity
                onPress={() => navi.navigate("FullArticleScreen",{title:title,date:date,imageData:imageData,htmlData:totalData})}
            >
        <Surface style={styles.cardStyle}>
                <Card.Cover source={{ uri: imageData }} resizeMode={'cover'} />
                <Card.Content>
                    <Text style={styles.titleStyle} numberOfLines={3}>{title}</Text>
                <Divider style={styles.divider}/>
                <WebRender htmlData={excerpt}/>
                <Divider style={styles.divider}/>
                <View style={styles.cardEnd}>
                    {/* <Text style={styles.dateS}>{formatDate(date)}</Text> */}
                </View>
                </Card.Content>
            </Surface>
            </TouchableOpacity>
        </View>
    );
};
const styles = StyleSheet.create({
    container:{
        backgroundColor:'#fff',
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center',
        flexGrow:1,
        paddingBottom:55
    },
    spacer:{
        padding:10
    },
    cardStyle:{
        minWidth:'100%',
        padding:0,
        marginBottom:10,
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
        paddingRight:0,
        fontSize:17,
        fontWeight:'bold',
        justifyContent:'center'
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
        justifyContent:'center'
    }
})