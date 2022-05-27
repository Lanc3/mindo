import React, {useState, useRef, useEffect} from 'react';
import { View, Text ,StyleSheet,ScrollView,SafeAreaView,TouchableOpacity} from 'react-native'
import Carousel from './Carousel';
import { AdManager } from './AdManager';
import { useNavigation } from '@react-navigation/native';
import {getCategoyIdBySlug,getAuthorName,getPostsByCategory,getMediaAPI,fetchApiData,getPostByAuthorId,getTotalPostByAuthor} from '../hooks/useResults'

export const SearchItem = ({title,itemDate,htmlData,author}) => {
  const navigation = useNavigation();
 const articleDate = itemDate;
 const [name, setName] = useState({firstName:"Mindo",lastName:""});


const goToArticle = () => {
  console.log("se",articleDate)
  navigation.navigate("FullArticleScreen",{title:title,date:articleDate,imageData:null,htmlData:htmlData})
}
const getAuthor = async() =>{
  try{
    const name = await getAuthorName(id.toString()); 
    if(name.firstName === false){

        setName({firstName:"Mindo",lastName:""})
    }
    else {
        setName(name)
    }
    if(name === null || name === 'undefined'){
        setName({firstName:"Mindo",lastName:""})
    }
    
}catch(error){
    console.log(error)
}finally{
};
}


  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={goToArticle}>
      <Text style={styles.title}>•{articleDate}</Text>
      </TouchableOpacity>
    </View>
  );
}
 const styles = StyleSheet.create({
    pageTitle:{
        fontSize:26,
        fontFamily:'sans-serif',
        fontWeight:"bold",
        margin:5,
        alignSelf:'center'
    },
    title:{
        fontSize:20,
        fontFamily:'sans-serif',
        margin:5,
        alignSelf:'flex-start',
        color:'#000'
    },
    container:{
      paddingLeft:20,
    }
  });

export default SearchItem;