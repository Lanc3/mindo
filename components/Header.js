import { useNavigation } from '@react-navigation/native'
import he from 'he'
import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import { AdManager } from './AdManager'
import Carousel from './Carousel'
export const Header = ({
  title,
  blurb,
  data,
  adType,
  MPU_Ad,
  ImageURL,
  fullImage,
}) => {
  const decodeString = (str) => {
    return str.replace(/(&nbsp;|<([^>]+)>)/gi, '').replace(/^(-)+|(-)+$/g, '')
  }
  const navigation = useNavigation()
  return (
    <View>
      <View style={{}}>
        <AdManager selectedAd={adType} sizeType={'SMALL'} />
      </View>
      <View>
        {ImageURL != null ? (
          <View
            style={{
              flex: 1,
              width: '100%',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <Image
              style={{
                width: 120,
                height: 120,
                borderRadius: 120 / 2,
                borderColor: 'black',
                borderWidth: 2,
              }}
              source={{
                uri: ImageURL,
              }}
            />
          </View>
        ) : null}
        {fullImage != null ? (
          <View
            style={{
              flex: 1,
              width: '100%',
              justifyContent: 'center',
              alignItems: 'center',
              marginVertical: 10,
            }}
          >
            <Image
              style={{
                width: '90%',
                height: 100,
              }}
              source={{
                uri: fullImage,
              }}
            />
          </View>
        ) : null}
        {title != null ? (
          <Text style={styles.pageTitle}>{decodeString(he.decode(title))}</Text>
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
            LBD_Ad={adType}
            MPU_Ad={MPU_Ad}
          />
        ) : null}
      </View>
    </View>
  )
}
const styles = StyleSheet.create({
  pageTitle: {
    fontSize: 26,
    fontFamily: 'Merriweather_700Bold',
    alignSelf: 'center',
    textAlign: 'center',
    paddingHorizontal: 20,
  },
  pageBlurb: {
    fontSize: 14,
    fontFamily: 'Lato_400Regular',
    margin: 5,
    paddingBottom: 0,
    alignSelf: 'center',
    textAlign: 'center',
    paddingHorizontal: 20,
  },
})

export default Header
