import { FontAwesome } from '@expo/vector-icons'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { useIsFocused, useNavigation } from '@react-navigation/native'
import he from 'he'
import React, { useEffect, useRef, useState } from 'react'
import {
  Button,
  Dimensions,
  FlatList,
  Image,
  Share,
  StyleSheet,
  Text,
  View,
} from 'react-native'
import { AdManager } from '../components/AdManager'
import ContentRender from '../components/ContentRender'
import Footer from '../components/Footer'
import { useCounter } from '../components/GlobalContext'
import { Modal } from '../components/Modal'
import SaveButton from '../components/SaveFavoriteButton'
export default function FullArticleScreen({ props, route }) {
  const {
    nameSlug,
    authorName,
    htmlData,
    imageData,
    title,
    date,
    LBD_Ad,
    MPU_Ad,
  } = route.params
  const navigation = useNavigation()
  const scrollRef = useRef()
  const scrollViewRef = useRef()
  const [popUpState, setPopUpState] = useState(false)
  const [saveText, setSaveText] = useState('Save')
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const handleModal = () => setPopUpState(() => !popUpState)
  const { count, increment, decrement } = useCounter()
  const [propagatedLBPAd, setPropagatedAd] = useState(LBD_Ad)
  const [propagatedMPUAd, setPropagatedMPUAd] = useState('MPU')
  const logInRef = useRef(false)
  const goToLink = (value) => {
    //console.log('before')

    navigation.navigate('Home')
  }
  const isFocused = useIsFocused()
  useEffect(() => {
    setSaveText('Save')
    if (isFocused) {
      scrollViewRef.current?.scrollTo({ x: 5, y: 5, animated: false })
    }
  }, [isFocused])
  useEffect(() => {
    if (MPU_Ad) {
      setPropagatedMPUAd(MPU_Ad)
    }

    scrollViewRef.current?.scrollTo({ x: 5, y: 5, animated: false })
  }, [title])

  useEffect(() => {
    logInRef.current = false
    const retrieveData = async () => {
      const results = await AsyncStorage.getItem('userProfile')
      setIsLoggedIn(JSON.parse(results).isLoggedIn)
      logInRef.current = JSON.parse(results).isLoggedIn
    }
    retrieveData().then(() => {
      if (!logInRef.current) {
        decrement()
        if (count === 1) {
          setPopUpState(true)
        } else {
          setPopUpState(false)
        }
        if (count <= 0) {
          increment(5)
          navigation.navigate('SignInScreen')
        }
      }
    })
  }, [])

  const saveFavorites = async (articleData) => {
    //await AsyncStorage.removeItem("FAVORITES")
    setSaveText('Saving')
    let arr = []
    let id = 0
    let data = await AsyncStorage.getItem('FAVORITES').then((req) =>
      JSON.parse(req),
    )

    if (data !== null) {
      arr = data
      id = data.length
    } else {
      arr = []
    }
    arr.push({ id: id, data: articleData })
    await AsyncStorage.setItem('FAVORITES', JSON.stringify(arr)).then(() => {
      setSaveText('Saved')
    })
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
    <View style={styles.container}>
      <Modal isVisible={popUpState}>
        <Modal.Container>
          <Modal.Header
            style={{ color: 'white' }}
            title="Article Limit Reached"
          />
          <Modal.Body>
            <Text style={{ color: 'white' }}>You have 0 Free article Left</Text>
            <Text style={{ color: 'white' }}>
              You must log in to continue reading
            </Text>
          </Modal.Body>
          <Modal.Footer>
            <Button title="Close" color="#000" onPress={handleModal} />
          </Modal.Footer>
        </Modal.Container>
      </Modal>
      <FlatList
        overScrollMode="never"
        removeClippedSubviews={true}
        ListHeaderComponent={
          <View
            style={styles.scrollView}
            overScrollMode="never"
            removeClippedSubviews={true}
          >
            {propagatedLBPAd ? (
              <AdManager selectedAd={propagatedLBPAd} sizeType={'SMALL'} />
            ) : (
              <AdManager selectedAd={'LDB_MOBILE'} sizeType={'SMALL'} />
            )}

            <Text style={styles.greenTitle}>{nameSlug}</Text>
            <Text style={styles.title}>{he.decode(title)}</Text>
            <View style={styles.subTitle}>
              <Text style={styles.byTwo}>By </Text>
              <Text
                style={{
                  color: 'black',
                  fontFamily: 'Lato_400Regular',
                  fontWeight: 'bold',
                }}
              >
                {authorName}
              </Text>
            </View>
            <Text
              style={{
                color: 'black',
                fontFamily: 'Lato_400Regular',
                paddingLeft: 25,
              }}
            >
              {date}
            </Text>
            <View style={styles.imageContainer}>
              <Image style={styles.image} source={{ uri: '' + imageData }} />
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
                      nameSlug,
                      authorName,
                      htmlData,
                      imageData,
                      title,
                      date,
                    }}
                  />
                </View>
              </View>
            </View>
          </View>
        }
        ListFooterComponent={
          <View>
            <View>
              <ContentRender htmlData={htmlData} newHeight={900} />
            </View>

            {/* <View
              style={{
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center',
                width: '100%',
              }}
            >
              <TouchableOpacity
                style={{
                  backgroundColor: '#6e822b',
                  margin: 8,
                  flex: 1,
                  justifyContent: 'center',
                  paddingHorizontal: 5,
                  borderRadius: 4,
                }}
                onPress={() => {
                  navigation.goBack()
                }}
              >
                <Text style={{ color: 'white', fontSize: 16 }}>Back</Text>
              </TouchableOpacity>
            </View> */}
            <Footer
              navi={navigation}
              refS={scrollRef}
              adSelected={propagatedMPUAd}
            />
          </View>
        }
        data={[]}
        listKey={(item, index) => `D_key${index.toString()}`}
        keyExtractor={(item, index) => `_key${index.toString()}`}
        renderItem={({ item, index }) => {}}
      />
    </View>
  )
}
const windowWidth = Dimensions.get('window').width
const styles = StyleSheet.create({
  container: {
    height: 100,
    width: 'auto',
    flex: 1,
    color: '#000',
    backgroundColor: '#fff',
  },
  title: {
    fontFamily: 'Merriweather_400Regular',
    fontSize: 24,
    justifyContent: 'center',
    padding: 5,
    marginHorizontal: 20,
  },
  subTitle: {
    flex: 1,
    flexDirection: 'row',
    fontFamily: 'Lato_700Bold',
  },
  image: {
    width: windowWidth - 50,
    height: 300,
    resizeMode: 'contain',
    marginHorizontal: 25,
    marginTop: -20,
  },
  imageContainer: {},
  scrollView: { backgroundColor: 'white' },
  shareButton: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    paddingBottom: 20,
    marginLeft: 22,
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
    paddingLeft: 25,
  },
  spacer: {
    margin: -5,
  },
  buttonT: {
    alignItems: 'center',
    backgroundColor: '#6E822B',
    padding: 5,
    borderRadius: 4,
    marginTop: 10,
  },
  byTwo: {
    fontFamily: 'Lato_400Regular',
    fontSize: 15,
    color: 'black',
    marginTop: 1,
    paddingLeft: 25,
  },
})
