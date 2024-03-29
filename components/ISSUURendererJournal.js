import React from 'react'
import WebView from 'react-native-webview'
const ISSUURendererJournal = ({ callback, htmlData }) => {
  const isClicked = () => {
    callback()
  }
  return (
    <WebView
      style={{ opacity: 0.99, overflow: 'hidden' }}
      onShouldStartLoadWithRequest={(request) => {
        if (request.url.includes('https')) {
          isClicked()
          return true
        } else return true
      }}
      setSupportMultipleWindows={false}
      
      allowsLinkPreview={false}
      thirdPartyCookiesEnabled={false}
      onNavigationStateChange={(event) => {
        if (event.url !== 'about:blank') {
          // callback()
        }
      }}
      originWhitelist={['http://*', 'https://*', 'intent://*']}
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
