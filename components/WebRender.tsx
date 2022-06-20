import * as React from 'react';
import { Dimensions, StyleSheet } from 'react-native';
import { WebView } from 'react-native-webview';


export default function WebRender({htmlData}) {
  return (
    <WebView
      style={styles.container}
      originWhitelist={['*']}
      source={{ html: '<html><head><base target="_top"></head><body>'+htmlData+'</body></html>' }}
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