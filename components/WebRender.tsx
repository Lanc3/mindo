import React, { useRef, useState } from 'react'
import { Dimensions, StyleSheet } from 'react-native'
import { WebView } from 'react-native-webview'

export default function WebRender({ htmlData }) {
  const [webview, setWebview] = useState({})
  const WebRef = useRef(null)
  const stopLoading = () => {
    if (WebRef.current !== null) WebRef.current.StopLoading()
  }
  return (
    <WebView
      ref={WebRef}
      style={styles.container}
      setSupportMultipleWindows={true}
      allowsLinkPreview={false}
      originWhitelist={['*']}
      source={{
        html:
          '<html><head></head><meta name="viewport" content="width=device-width,initial-scale=1.0"><body>' +
          htmlData +
          '</body></html>',
      }}
    />
  )
}
const windowWidth = Dimensions.get('window').width
const styles = StyleSheet.create({
  container: {
    fontSize: 20,
    minHeight: 100,
    width: windowWidth - 10,
    flex: 1,
    color: '#000',
    marginBottom: 10,
  },
})
