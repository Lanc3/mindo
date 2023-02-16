import AsyncStorage from '@react-native-async-storage/async-storage'
import { useIsFocused, useNavigation } from '@react-navigation/native'
import * as Notifications from 'expo-notifications'
import React, { useEffect, useRef, useState } from 'react'
import {
  Alert,
  Animated,
  Dimensions,
  StyleSheet,
  Text,
  View,
} from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import Modal from 'react-native-modal'
import Svg, { Path } from 'react-native-svg'
import SideMenu from './SideMenu'
Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: true,
    shouldSetBadge: false,
  }),
})
export default function Drawer({ navi }) {
  const navigation = useNavigation()
  const [drawerAnimation, setDrawerAnimation] = useState(new Animated.Value(50))
  const [endValue, setEndValue] = useState(200)
  const [toggle, setToggle] = useState(false)
  const notificationListener = useRef()
  const responseListener = useRef()
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [error, setError] = useState('Enter Details') //Error texts from the app or serve
  const [notificationCount, setNotificationCount] = useState('')
  const wrongDetails = () =>
    Alert.alert('Error', error, [{ text: 'OK', onPress: () => {} }])
  const windowHeight = Dimensions.get('window').height
  const windowWidth = Dimensions.get('window').width
  const isFocused = useIsFocused()
  const [notificationData, setNotificationData] = useState([])
  const _retrieveData = async () => {
    try {
      const value = JSON.parse(await AsyncStorage.getItem('userProfile'))
      if (value !== null) {
        setArticleAmount(value.freeArticle)
        if (value.freeAccount) {
          setIsLoggedIn(false)
          setIsFreeAccount(true)
        } else if (value.isLoggedIn !== null) {
          setIsLoggedIn(true)
          setIsFreeAccount(false)
        }
      } else {
        setIsLoggedIn(false)
      }
    } catch (error) {
      // Error retrieving data
    }
  }
  useEffect(() => {
    notificationListener.current = Notifications.addNotificationReceivedListener(
      (notification) => {
        const {
          categoryName,
          author,
          content,
          media,
          title,
          date,
        } = notification.request.content.data
        getData()
      },
    )

    return () => {
      Notifications.removeNotificationSubscription(notificationListener.current)
    }
  }, [])

  const getData = async () => {
    try {
      const notificationData = await AsyncStorage.getItem('notifications')
      const data = JSON.parse(notificationData)

      if (data.length > 9) {
        setNotificationCount('9+')
      } else {
        setNotificationCount('' + data.length)
      }
    } catch (error) {
      console.log(error)
    }
  }
  const onPressSports = () => {
    navi.navigate('MainDrawer', { screen: 'SportsQuiz' })
    onPressOpen()
  }
  const onPressECopy = () => {
    navi.navigate('MainDrawer', { screen: 'ECopy' })
    onPressOpen()
  }
  const onPressLogIn = () => {
    navigation.navigate('SignInScreen')
    //onPressOpen();
  }

  const onPressSignUp = () => {
    navigation.navigate('SignInScreen')
  }

  const onPressOpen = () => {
    if (!toggle) {
      setToggle(true)
      Animated.timing(drawerAnimation, {
        toValue: -windowWidth + 50,
        duration: 250,
        useNativeDriver: true,
      }).start()
    } else {
      setToggle(false)
      Animated.timing(drawerAnimation, {
        toValue: 50,
        duration: 250,
        useNativeDriver: true,
      }).start()
    }
  }
  useEffect(() => {
    _retrieveData()
  }, [isFocused])

  return (
    <View>
      <TouchableOpacity style={styles.testingBounds} onPress={onPressOpen}>
        <Svg width={50} height={50} viewBox="-10 -13 50 50">
          <Path
            d="M15.3,0C9.4,0,4.6,4.9,4.6,10.9s4.8,10.8,10.7,10.8S26,16.8,26,10.9S21.2,0,15.3,0z M15.3,2.9
	c2.3,0,4.2,1.9,4.2,4.3s-1.9,4.3-4.2,4.3s-4.2-1.8-4.2-4.3S13,2.9,15.3,2.9z M15.3,20.6c-3.8,0-6.8-1.8-6.8-4.1l0,0l0,0l0,0
	c0-0.2,0-0.3,0.1-0.5c0.1-0.6,0.3-1.1,0.5-1.6c0.4-0.8,1.1-1.6,1.8-2.1c0.4-0.3,0.9-0.6,1.4-0.8l0,0c0.8,0.6,1.9,1,3,1s2.2-0.4,3-1
	c0.3,0.1,0.6,0.3,0.9,0.5c0.8,0.5,1.5,1.2,2,2c0.2,0.4,0.4,0.8,0.6,1.2c0.1,0.2,0.1,0.4,0.2,0.7V16c0,0.2,0.1,0.3,0.1,0.5l0,0l0,0
	l0,0C22.1,18.8,19.1,20.6,15.3,20.6z"
            fill="#6E822B"
          />
        </Svg>

        {notificationCount <= 0 ? (
          <View></View>
        ) : (
          <View style={{ position: 'absolute', top: 0, left: 0 }}>
            <View
              style={{
                backgroundColor: '#6E822B',
                borderRadius: 15,
                width: 18,
                height: 18,
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <Text
                style={{ color: 'black', fontWeight: 'bold', marginTop: -2 }}
              >
                {notificationCount}
              </Text>
            </View>
          </View>
        )}
      </TouchableOpacity>
      <Modal
        backdropColor="transparent"
        theme={{
          colors: {
            backdrop: '#181818',
          },
        }}
        isVisible={toggle}
        onBackdropPress={onPressOpen} // Android back press
        onSwipeComplete={onPressOpen} // Swipe to discard
        animationIn="slideInRight" // Has others, we want slide in from the left
        animationOut="slideOutRight" // When discarding the drawer
        swipeDirection="right" // Discard the drawer with swipe to left
        // Faster animation
        // Allows swipe events to propagate to children components (eg a ScrollView inside a modal)
        style={styles.sideMenuStyle} // Needs to contain the width, 75% of screen width in our case
      >
        <SideMenu
          callParentScreenFunction={onPressSignUp}
          closeDrawer={onPressOpen}
        />
      </Modal>
    </View>
  )
}

const windowHeight = Dimensions.get('window').height
const windowWidth = Dimensions.get('window').width
const styles = StyleSheet.create({
  sideMenuStyle: {
    margin: 0,
    top: 60,
  },
  plus: {
    flex: 1,
    color: '#00e5bf',
    fontSize: 50,
  },
  drawerButtonLogOut: {
    marginTop: 100,
    backgroundColor: '#6e822b',
    margin: 5,
    borderRadius: 4,
  },
  container: {
    backgroundColor: 'black',
    height: windowHeight,
    width: windowWidth / 2,
    minHeight: windowHeight,
    minWidth: windowWidth,
    flexDirection: 'column',
    position: 'absolute',
    left: 0,
    top: 0,
    zIndex: 1111,
  },
  logo: {
    flex: 1,
    paddingTop: 2,
    alignSelf: 'center',
  },
  button: {
    position: 'absolute',
    top: 20,
    zIndex: 2,
  },
  testingBounds: {
    alignItems: 'center',
  },
  menuText: {
    padding: 10,
    color: 'white',
    alignSelf: 'center',
    fontSize: 15,
    fontFamily: 'serif',
  },
  DrawerTitle: {
    marginTop: 7,
    color: '#6e822b',
    fontFamily: 'serif',
    fontSize: 25,
  },
  DrawerTitleContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  drawerButton: {
    backgroundColor: '#6e822b',
    margin: 5,
    borderRadius: 4,
  },
  header: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  footer: {
    flex: 3,
    backgroundColor: '#fff',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingHorizontal: 20,
    paddingVertical: 30,
  },
  text_header: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 30,
  },
  text_footer: {
    color: '#05375a',
    fontSize: 18,
  },
  action: {
    flexDirection: 'row',
    marginTop: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#f2f2f2',
    paddingBottom: 5,
    zIndex: 1,
  },
  actionError: {
    flexDirection: 'row',
    marginTop: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#FF0000',
    paddingBottom: 5,
  },
  textInput: {
    height: 50,
    marginTop: Platform.OS === 'ios' ? 0 : -12,
    paddingLeft: 10,
    paddingTop: 10,
    margin: 15,
    color: '#fff',
    backgroundColor: '#1A1A1A',
  },
  errorMsg: {
    color: '#FF0000',
    fontSize: 14,
  },
  button: {
    alignItems: 'center',
    marginTop: 50,
  },
  signIn: {
    width: '100%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 2,
  },
  textSign: {
    fontSize: 18,
    fontWeight: 'bold',
  },
})
