import React, { useState, useEffect } from 'react';
import { WebView } from 'react-native-webview';
import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';
import { Dimensions } from 'react-native';
import rnTextSize, { TSFontSpecs } from 'react-native-text-size'


export default function ContentRender({htmlData,newHeight}) {

  return (
    <WebView
      style={{height:newHeight, width:windowWidth-40}}
      originWhitelist={['*']}
      source={{ html: '<html><head><meta name="viewport" content="width=device-width, initial-scale=1.0"></head><body>'+htmlData+'</body></html>' }}
    />
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
  });