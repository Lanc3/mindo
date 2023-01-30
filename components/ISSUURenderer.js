import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { Dimensions, StyleSheet, View } from 'react-native'

import WebView from 'react-native-webview'
export default function ISSUURenderer({ htmlData }) {
  const navigation = useNavigation()

  const handleLinkPress = async (request) => {
    return false
  }
  const toggleFullscreen = () => {
    webview.current.injectJavaScript(`
      if (document.webkitIsFullScreen) {
        document.webkitCancelFullScreen();
      } else {
        document.documentElement.webkitRequestFullScreen();
      }
    `)
  }
  return (
    <View>
      <WebView
        style={styles.container}
        setSupportMultipleWindows={false}
        allowsLinkPreview={false}
        onNavigationStateChange={(event) => {
          if (event.url !== 'about:blank') {
            handleLinkPress()
          }
        }}
        originWhitelist={['*']}
        source={{
          html:
            '<html><head></head><meta name="viewport" content="width=device-width,initial-scale=1.0"><body>' +
            htmlData +
            '</body></html>',
        }}
      />
    </View>
  )
}
const windowWidth = Dimensions.get('window').width
const styles = StyleSheet.create({
  container: {
    fontSize: 20,
    minHeight: 326,
    width: windowWidth,
    color: '#000',
  },
  a: {
    color: '#6e822b', // make links coloured pink
  },
  p: {
    marginTop: -80,
    fontSize: 18,
    color: '#000', // make links coloured pink
  },
})
