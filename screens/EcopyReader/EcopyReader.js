import { FontAwesome } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'
import he from 'he'
import React, { useState } from 'react'
import {
  Dimensions,
  FlatList,
  Share,
  StyleSheet,
  Text,
  View,
} from 'react-native'
import { AdManager } from '../../components/AdManager'
import Footer from '../../components/Footer'
import ISSUURenderer from '../../components/ISSUURenderer'
import SaveButton from '../../components/SaveFavoriteButton'
export default function EcopyReader({ props, route }) {
  const { content } = route.params
  const [hideTitle, setHideTitle] = useState(false)
  const [iframeHeight, setIframeHeight] = useState(340)
  const windowHeight = Dimensions.get('window').height
  const [slug, setSlug] = useState('Update Journal')
  const authorName = content.author
  const title = content.title
  const date = content.date
  const htmlData = content.content
  const imageData = content.media
  const navigation = useNavigation()
  const decodeString = (str) => {
    return str.replace(/(&nbsp;|<([^>]+)>)/gi, '').replace(/^(-)+|(-)+$/g, '')
  }

  const hide = () => {
    setIframeHeight(windowHeight)
    setHideTitle(true)
  }
  const onShare = async () => {
    try {
      const result = await Share.share({
        message:
          'React Native | A framework for building native apps using React',
      })
      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          // shared with activity type of result.activityType
        } else {
          // shared
        }
      } else if (result.action === Share.dismissedAction) {
        // dismissed
      }
    } catch (error) {
      alert(error.message)
    }
  }
  return (
    <View
      renderToHardwareTextureAndroid={true}
      style={{ backgroundColor: 'white' }}
    >
      <FlatList
        overScrollMode="never"
        removeClippedSubviews={true}
        ListHeaderComponent={
          <View>
            {hideTitle === false ? (
              <View
                style={styles.scrollView}
                overScrollMode="never"
                removeClippedSubviews={true}
              >
                <AdManager selectedAd={'LDB_MOBILE'} sizeType={'SMALL'} />
                <Text style={styles.greenTitle}>{slug}</Text>
                <Text style={styles.title} numberOfLines={3}>
                  {he.decode(decodeString(title))}
                </Text>

                <View style={styles.subTitle}>
                  <Text
                    style={{
                      color: 'black',
                      fontFamily: 'Lato_400Regular',
                      fontWeight: 'bold',
                      paddingLeft: 20,
                    }}
                  >
                    By {authorName}
                  </Text>
                </View>
                <Text
                  style={{
                    color: 'black',
                    fontFamily: 'Lato_400Regular',
                    paddingLeft: 20,
                  }}
                  ss
                >
                  {date}
                </Text>
              </View>
            ) : null}

            <View
              style={{ height: iframeHeight }}
              renderToHardwareTextureAndroid={true}
            >
              <ISSUURenderer
                callback={() => {
                  hide()
                }}
                htmlData={content.content}
              />
            </View>
            {hideTitle === false ? (
              <View style={styles.shareButton}>
                <View style={styles.spacer}>
                  <FontAwesome.Button
                    name="twitter"
                    size={26}
                    color="#000"
                    backgroundColor="transparent"
                    onPress={onShare}
                  ></FontAwesome.Button>
                </View>
                <View style={styles.spacer}>
                  <FontAwesome.Button
                    name="facebook-square"
                    size={26}
                    color="#000"
                    backgroundColor="transparent"
                    onPress={onShare}
                  ></FontAwesome.Button>
                </View>
                <View style={styles.spacer}>
                  <FontAwesome.Button
                    name="linkedin-square"
                    size={26}
                    color="#000"
                    backgroundColor="transparent"
                    onPress={onShare}
                  ></FontAwesome.Button>
                </View>
                <View style={styles.spacer}>
                  <FontAwesome.Button
                    name="instagram"
                    size={26}
                    color="#000"
                    backgroundColor="transparent"
                    onPress={onShare}
                  ></FontAwesome.Button>
                </View>
                <View style={styles.spacer}>
                  <SaveButton
                    articleData={{
                      slug,
                      authorName,
                      htmlData,
                      imageData,
                      title,
                      date,
                    }}
                  />
                </View>
              </View>
            ) : null}
          </View>
        }
        ListFooterComponent={
          <View>
            {hideTitle === false ? (
              <Footer navi={navigation} adSelected="MPU" />
            ) : null}
          </View>
        }
      />
    </View>
  )
}
const windowWidth = Dimensions.get('window').width
const styles = StyleSheet.create({
  container: {
    fontSize: 20,
    height: 100,
    width: windowWidth,
    flex: 1,
    color: '#000',
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 25,
    fontWeight: 'bold',
    justifyContent: 'center',
    padding: 5,
    paddingHorizontal: 20,
  },
  subTitle: {},
  image: {
    width: windowWidth,
    height: 300,
    resizeMode: 'contain',
  },
  imageContainer: {},
  scrollView: {
    marginHorizontal: 0,
    backgroundColor: 'white',
  },
  shareButton: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    paddingHorizontal: 15,
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
    paddingHorizontal: 20,
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
  pageTitle: {
    fontSize: 26,
    fontFamily: 'Merriweather_700Bold',
    alignSelf: 'center',
    textAlign: 'center',
    paddingHorizontal: 20,
    paddingTop: 20,
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
