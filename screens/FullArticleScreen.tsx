import * as React from 'react';
import { WebView } from 'react-native-webview';
import { StyleSheet,View,Text,Image,SafeAreaView, ScrollView } from 'react-native';
import Constants from 'expo-constants';
import { Dimensions } from 'react-native';
import WebRender from '../components/WebRender';
import { useRoute } from '@react-navigation/native';
import ContentRender from '../components/ContentRender';


export default function FullArticleScreen({route}) {
  const {htmlData,imageData,title,date} = route.params;
  const formatDate = (dateString) => {
    const options = { year: "numeric", month: "long", day: "numeric" }
    return new Date(dateString).toLocaleDateString(undefined, options)
}
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
      <Text style={styles.title} numberOfLines={3}>{title}</Text>
      <View style={styles.subTitle}>
        <Text>Autor Name - </Text>
        <Text>{formatDate(date)}</Text>
      </View>
      <View>
      <Image style={styles.image} source={{ uri: ""+imageData }}/>
      </View>
      <ContentRender htmlData={htmlData} newHeight={1800}/>
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
      padding:15,
    },
    subTitle:{
      flex:1,
      flexDirection:'row',
    },
    image:{
      width: '100%',
      height:300,
      resizeMode: 'contain',
    },
    scrollView: {
      marginHorizontal: 20,
    },
  });