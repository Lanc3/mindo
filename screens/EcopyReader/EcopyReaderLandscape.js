import { useNavigation } from '@react-navigation/native'
import React from 'react'
import {
  Dimensions,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native'
import LandscapeView from '../../components/LandscapeView'

import WebView from 'react-native-webview'
export default function EcopyReaderLandscape({ props, route }) {
  const { content } = route.params
  const authorName = content.author
  const htmlData = content.content
  const imageData = content.media
  const title = content.title
  const date = content.date

  const navigation = useNavigation()

  return (
    <LandscapeView style={{}}>
      <View></View>
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
            content +
            '</body></html>',
        }}
      />
      <View style={styles.back}>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('ECopy')
          }}
        >
          <Text style={{ color: 'white', fontSize: 20 }}>back</Text>
        </TouchableOpacity>
      </View>
    </LandscapeView>
  )
}
const windowWidth = Dimensions.get('window').width
const windowHeight = Dimensions.get('window').height
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#282C34',
    width: windowHeight - 50,
    height: '100%',
    marginLeft: -10,
    paddingTop: 10,
  },
  back: {
    position: 'absolute',
    top: windowWidth - 40,
    backgroundColor: '#282C34',
    zIndex: 10,
    height: 30,
    width: '100%',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 25,
    fontWeight: 'bold',
    justifyContent: 'center',
    padding: 5,
  },
  subTitle: {
    flex: 1,
    flexDirection: 'row',
  },
  image: {
    width: windowWidth,
    height: 300,
    resizeMode: 'contain',
  },
  imageContainer: {},
  scrollView: {
    marginHorizontal: 0,
  },
  shareButton: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
  shareText: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  greenTitle: {
    color: '#6e822b',
    paddingTop: 10,
    paddingLeft: 10,
  },
  pageNav: {
    flexDirection: 'row',
  },
  next: {
    fontSize: 16,
  },
  nextGreen: {
    fontSize: 16,
    color: '#6e822b',
  },
  titleStyle: {
    fontFamily: 'Merriweather_400Regular',
    fontSize: 24,
    justifyContent: 'center',
    paddingLeft: 10,
  },
})
