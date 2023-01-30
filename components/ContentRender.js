import React, { useState } from 'react'
import { Dimensions, StyleSheet, View } from 'react-native'
import WebView from 'react-native-webview'
const decodeString = (str) => {
  return str.replace(/(&nbsp;|<([^>]+)>)/gi, '').replace(/^(-)+|(-)+$/g, '')
}

export default function ContentRender({ htmlData, newHeight }) {
  const [theHeight, setHeight] = useState(2000)
  const data =
    `
  <html>
  <head>
  <link href='http://fonts.googleapis.com/css?family=Lato:400,700' rel='stylesheet' type='text/css'>
  <style>body {font-family: 'Lato'; font-weight: 400; font-size: 20px; word-wrap: break-word; overflow-wrap: break-word;letter-spacing:0.1 }</style><meta name="viewport" content="width=device-width, initial-scale=1.0">
  </head>
  <body id="test">
    <div style="line-height:38px ;font-family: 'Lato';" id="foo">
    ` +
    htmlData +
    `</div>
    <script>
    setTimeout(() => {
      var height = Math.max(
    document.getElementById('foo').getBoundingClientRect().height);
    window.ReactNativeWebView.postMessage(height+50)
  }, 300);
    </script>
  </body>
  </html>
`
  const onNavigationStateChange = (event) => {
    if (event) {
      setHeight(Number(event))
    }
  }

  return (
    <View
      style={{ height: theHeight, paddingHorizontal: 20 }}
      scrollEnabled={false}
      showsHorizontalScrollIndicator={false}
    >
      <WebView
        style={{ lineHeight: 42 }}
        originWhitelist={['*']}
        scrollEnabled={false}
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
        automaticallyAdjustContentInsets={true}
        scalesPageToFit={true}
        bounces={false}
        source={{ html: data }}
        onMessage={(event) => {
          onNavigationStateChange(event.nativeEvent.data)
        }}
      />
    </View>
  )
}
const windowWidth = Dimensions.get('window').width
const windowHeight = Dimensions.get('window').height
const styles = StyleSheet.create({
  container: {
    fontSize: 20,
    minHeight: 1700,
    width: windowWidth - 40,
    color: '#000',
    marginBottom: 10,
    flexGrow: 1,
    fontFamily: 'Merriweather_400Regular',
  },
  xContainer: {
    fontSize: 20,
    height: 'auto',
    width: windowWidth,
    color: '#000',
  },
  a: {
    color: '#6e822b', // make links coloured pink
  },
  figure: {
    marginTop: -140,
    flex: 1,
    justifyContent: 'center',
    width: '100%',
    height: windowWidth,
  },
  img: {
    width: '100%',
    height: windowWidth,
  },
  p: {
    marginTop: -120,
    paddingTop: 0,
    fontSize: 18,
    color: '#000', // make links coloured pink
    fontFamily: 'Lato_400Regular',
    lineHeight: 32,
    letterSpacing: 0.1,
  },
  div: {
    marginTop: -160,
    width: '100%',
    height: windowWidth,
    marginBottom: 0,
  },
  ul: {
    flex: 1,
    marginBottom: 100,
    marginTop: -120,
  },
  figcaption: {
    flex: 1,
    top: 0,
    width: windowWidth,
  },
})
