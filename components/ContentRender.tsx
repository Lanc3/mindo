import React from 'react';
import { Dimensions, StyleSheet, View } from 'react-native';
import HTMLView from 'react-native-htmlview';

export default function ContentRender({htmlData,newHeight}) {
  return (
    <View style={{paddingTop:80,padding:20}}>
     <HTMLView
        value={htmlData}
        stylesheet={styles}
      />
    </View>
  );
}
const windowWidth = Dimensions.get('window').width;
const styles = StyleSheet.create({
    container: {
      fontSize:20,
      minHeight:1700,
      width:windowWidth-40,
      color:'#000',
      marginBottom:10,
      flexGrow:1,
      fontFamily: 'Merriweather_400Regular',
    },
    a: {
 
      color: '#6e822b', // make links coloured pink
    },
    figure:{
      marginTop:-120,
      flex:1,
      justifyContent:'center',
      width:windowWidth,
      height:windowWidth,
      marginBottom:-100
    },
    p:{
      marginTop:-120,
      paddingTop:0,
      fontSize:18,
      color: '#000', // make links coloured pink
      fontFamily: 'Lato_400Regular',
      lineHeight:32,
      letterSpacing:0.1
    },
    div:{
      flex:1,
      marginTop:-160,
      width:windowWidth,
      height:windowWidth,
      justifyContent:'center',
      alignSelf:'center',
      alignItems:'center',
      marginBottom:0
    },
    ul:{
      flex:1,
      marginBottom:100,
      marginTop:-120,
    },
    figcaption:{
      flex:1,
      top:0,
      width:windowWidth
    }
  });