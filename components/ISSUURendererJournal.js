import React from 'react'
import WebView from 'react-native-webview'
const ISSUURendererJournal = ({ htmlData }) => {
  return (
    <WebView
      style={{ opacity: 0.99, overflow: 'hidden' }}
      setSupportMultipleWindows={false}
      allowsLinkPreview={false}
      onNavigationStateChange={(event) => {
        if (event.url !== 'about:blank') {
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

export default ISSUURendererJournal
