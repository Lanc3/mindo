import { useNavigation } from '@react-navigation/native'
import React from 'react'
import {
  Dimensions,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native'

import WebView from 'react-native-webview'
export default function ISSUURendererJournal({ htmlData }) {
  const navigation = useNavigation()

  const handleLinkPress = async (request) => {
    navigation.navigate('JournalReaderLandscape', { content: htmlData })
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
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          width: '100%',
        }}
      >
        <TouchableOpacity
          style={{
            backgroundColor: '#6e822b',
            margin: 8,
            flex: 1,
            justifyContent: 'center',
            paddingHorizontal: 5,
            borderRadius: 4,
          }}
          onPress={() => {
            handleLinkPress()
          }}
        >
          <Text style={{ color: 'white', fontSize: 16 }}>Fullscreen</Text>
        </TouchableOpacity>
      </View>
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
