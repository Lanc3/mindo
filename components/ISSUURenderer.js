import React from 'react'
import WebView from 'react-native-webview'
const ISSUURenderer = ({ callback, htmlData }) => {
  return (
    <WebView
      style={{ opacity: 0.99, overflow: 'hidden' }}
      setSupportMultipleWindows={false}
      allowsLinkPreview={false}
      thirdPartyCookiesEnabled={false}
      onNavigationStateChange={(event) => {
        if (event.url !== 'about:blank') {
          // callback()
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
  )
}

export default ISSUURenderer
