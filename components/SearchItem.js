import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { getAuthorName } from '../hooks/useResults';

export const SearchItem = ({title,itemDate,htmlData,author}) => {
  const navigation = useNavigation();
 const articleDate = itemDate;
 const [name, setName] = useState({firstName:"Mindo",lastName:""});


const goToArticle = () => {
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
        
        fontWeight:"bold",
        margin:5,
        alignSelf:'center'
    },
    title:{
        fontSize:20,
        
        margin:5,
        alignSelf:'flex-start',
        color:'#000'
    },
    container:{
      paddingLeft:20,
    }
  });

export default SearchItem;