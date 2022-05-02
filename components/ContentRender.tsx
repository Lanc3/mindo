import React, { useState, useEffect } from 'react';
import { WebView } from 'react-native-webview';
import { StyleSheet ,View,Dimensions} from 'react-native';
import Constants from 'expo-constants';
import rnTextSize, { TSFontSpecs } from 'react-native-text-size'
import AutoHeightWebView from 'react-native-autoheight-webview'

export default function ContentRender({htmlData,newHeight}) {

  const injectedScript = function() {
    function waitForBridge() {
      if (window.postMessage.length !== 1){
        setTimeout(waitForBridge, 200);
      }
      else {
        postMessage(
          Math.max(document.documentElement.clientHeight, document.documentElement.scrollHeight, document.body.clientHeight, document.body.scrollHeight)
        )
      }
    }
    waitForBridge();
  };

  return (
    <View style={{paddingLeft:20}}>
      <AutoHeightWebView
    style={{ width: Dimensions.get('window').width - 45, marginTop: 10 }}
    customScript={`document.body.style.background = 'white';document.body.style.padding-left = '50px';document.body.style.margin = '60px';`}
    customStyle={`
      * {
        font-family: 'Times New Roman';
      }
      p {
        font-size: 16px;
      }
    `}
    onSizeUpdated={size => console.log(size.height)}
    files={[{
        href: 'cssfileaddress',
        type: 'text/css',
        rel: 'stylesheet'
    }]}
    source={{ html: '<html><head><meta name="viewport" content="width=device-width, initial-scale=1.0"></head><body>'+htmlData+'</body></html>' }}
    scalesPageToFit={true}
    viewportContent={'width=device-width, user-scalable=no'}
    /*
    other react-native-webview props
    */
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
  });