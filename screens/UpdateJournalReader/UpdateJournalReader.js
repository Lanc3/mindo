import React from 'react'
import { Dimensions, StyleSheet, View } from 'react-native'
import ISSUURendererJournal from '../../components/ISSUURendererJournal'
export default function UpdateJournalReader({ navigation, props, route }) {
  const { content } = route.params

  return (
    <View
      style={{ backgroundColor: 'black', height: '100%' }}
      renderToHardwareTextureAndroid={true}
    >
      <ISSUURendererJournal htmlData={content.content} />
    </View>
  )
}
const windowWidth = Dimensions.get('screen').width
const windowHeight = Dimensions.get('window').height
const styles = StyleSheet.create({
  container: {
    color: '#000',
    width: windowWidth,
    height: 2000,
    backgroundColor: '#161B22',
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
