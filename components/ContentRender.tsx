import React, { useState, useEffect } from 'react';
import { WebView } from 'react-native-webview';
import { StyleSheet ,View,Dimensions} from 'react-native';
import Constants from 'expo-constants';
import rnTextSize, { TSFontSpecs } from 'react-native-text-size'
import AutoHeightWebView from 'react-native-autoheight-webview'
import HTMLView from 'react-native-htmlview'

export default function ContentRender({htmlData,newHeight}) {


  return (
    <View style={{paddingTop:80,padding:10}}>

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
      flexGrow:1
    },
    a: {
 
      color: '#6e822b', // make links coloured pink
    },
    p:{
      marginTop:-80,
      fontSize:18,
      color: '#000', // make links coloured pink
    }
  });