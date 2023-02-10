import he from 'he'
import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { AdManager } from './AdManager'
import Carousel from './Carousel'
export const Header = ({ title, blurb, navigation, data, adType }) => {
  const decodeString = (str) => {
    return str.replace(/(&nbsp;|<([^>]+)>)/gi, '').replace(/^(-)+|(-)+$/g, '')
  }

  return (
    <View style={styles.stat}>
      <AdManager selectedAd={adType} sizeType={'SMALL'} />
      {title != null ? (
        <Text style={styles.pageTitle}>{he.decode(title)}</Text>
      ) : null}
      {blurb != null ? (
        <Text style={styles.pageBlurb}>{decodeString(blurb)}</Text>
      ) : null}
      {data != null ? (
        <Carousel
          style="single"
          items={data}
          navigation={navigation}
          nameSlug={he.decode(title)}
        />
      ) : null}
    </View>
  )
}
const styles = StyleSheet.create({
  pageTitle: {
    fontSize: 26,
    fontFamily: 'Merriweather_700Bold',
    alignSelf: 'center',
    textAlign: 'center',
  },
  pageBlurb: {
    fontSize: 14,
    fontFamily: 'Lato_400Regular',
    margin: 5,
    paddingBottom: 20,
    alignSelf: 'center',
    textAlign: 'center',
  },
})

export default Header
