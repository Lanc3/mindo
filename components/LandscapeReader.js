import { Animated, Dimensions, StyleSheet, Text, View } from 'react-native'
import WebView from 'react-native-webview'
const LandscapeReader = ({ route, params }) => {
  const rotateAnim = new Animated.Value(0)
  const { content } = route.params
  const rotate = rotateAnim.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '90deg'],
  })

  return (
    <View>
      <WebView
        style={styles.container}
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
            '<p>tits</p>' +
            '</body></html>',
        }}
      />

      <Text>tests</Text>
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
export default LandscapeReader
