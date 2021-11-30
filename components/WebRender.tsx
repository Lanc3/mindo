import * as React from 'react';
import { WebView } from 'react-native-webview';
import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';
import { Dimensions } from 'react-native';


export default function WebRender({htmlData}) {
  return (
    <WebView
      style={styles.container}
      originWhitelist={['*']}
      source={{ html: '<html><head><meta name="viewport" content="width=device-width, initial-scale=1.0"></head><body>'+htmlData+'</body></html>' }}
    />
  );
}
const windowWidth = Dimensions.get('window').width;
const styles = StyleSheet.create({
    container: {
      fontSize:20,
      minHeight:100,
      width:windowWidth-10,
      flex: 1,
      color:'#000',
      marginBottom:10
    },
  });