import React, {  useState } from 'react';
import { Dimensions, StyleSheet } from 'react-native';
import { WebView} from 'react-native-webview';
import { Linking } from 'react-native';


export default function WebRender({htmlData}) {
  const [webview,setWebview] = useState({});
  return (
    <WebView
      ref={(ref) =>{setWebview(ref)}}
      style={styles.container}
      setSupportMultipleWindows={true}
      allowsLinkPreview={false}
      originWhitelist={['*']}
      onNavigationStateChange={(event)=>{
        console.log(event)
        if(event.url !== "about:blank")
        {
          Linking.openURL(event.url)
        }

      }}
      source={{ html: '<html><head></head><meta name="viewport" content="width=device-width,initial-scale=1.0"><body>'+htmlData+'</body></html>' }}
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