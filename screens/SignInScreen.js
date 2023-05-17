import Feather from '@expo/vector-icons//Feather'
import FontAwesome from '@expo/vector-icons/FontAwesome'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { useFocusEffect } from '@react-navigation/native'
import * as Device from 'expo-device'
import { LinearGradient } from 'expo-linear-gradient'
import * as Notifications from 'expo-notifications'
import React, { useState } from 'react'
import {
  ActivityIndicator,
  Alert,
  BackHandler,
  Dimensions,
  KeyboardAvoidingView,
  Modal,
  Platform,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Linking
} from 'react-native'
import * as Animatable from 'react-native-animatable'
import { useTheme } from 'react-native-paper'
import { loginUrl } from '../constants/Const'
import { fetchWithTimeout, postToken } from '../hooks/useResults'

const SignInScreen = ({ navigation }) => {
  const [isLoading, setIsLoading] = useState(true) //true when the app is loading
  const [isLogged, setIsLogged] = useState(false) //True if the user is logged in
  const [userToken, setUserToken] = useState(null) //User token, maybe a useless state
  const [userProfile, setUserProfile] = useState(null) //userProfile object, it contains token too
  const [loggingIn, setloggingIn] = useState(false) //True when user is waiting for auth
  const [error, setError] = useState('Enter Details') //Error texts from the app or serve
  const [email, setEmail] = useState(null)
  const [password, setPassword] = useState(null)
  const [logInState, setLogInState] = useState(true)
  const [exit, setExit] = useState(false)
  const [displayText, setDisplayText] = useState(' ')
  const controller = new AbortController()
  const [modalVisible, setModalVisible] = useState(false)
  const signal = controller.signal

  const registerForPushNotificationsAsync = async () => {
    setDisplayText('Registering device')
    let getToken
    if (Device.isDevice) {
      const {
        status: existingStatus,
      } = await Notifications.getPermissionsAsync()
      let finalStatus = existingStatus
      if (existingStatus !== 'granted') {
        const { status } = await Notifications.requestPermissionsAsync()
        finalStatus = status
      }

      getToken = await (Notifications.getExpoPushTokenAsync())
      
      try {
        await AsyncStorage.setItem(
          'expoToken',
          JSON.stringify({
            expoPushToken: getToken.data,
          }),
        )
      } catch {
        setError('Error storing data on device')
      }
    } else {
      alert('Must use physical device for Push Notifications')
    }
    
    return getToken.data
  }

  const wrongDetails = (type) =>
    Alert.alert(type, error, [{ text: 'OK', onPress: () => {} }])
  const setItem = async (key, value) => {
    try {
      await AsyncStorage.setItem(key, JSON.stringify(value))
      return true
    } catch (error) {
      setError('AsyncStorage#setItem error: ' + error.message)
      wrongDetails()
    }
  }
  const abortFetching = () => {
    // Abort.
    setLogInState(true)
    controller.abort()
    navigation.navigate("FirstRunScreen")
  }
  useFocusEffect(
    React.useCallback(() => {
      const onBackPress = () => {
        return true
      }

      BackHandler.addEventListener('hardwareBackPress', onBackPress)

      return () =>
        BackHandler.removeEventListener('hardwareBackPress', onBackPress)
    }, []),
  )
  const doAuth = async (email, password) => {
    setDisplayText('Connecting to server.')
    setExit(false)
    setLogInState(false)
    setError(null)
    let formData = new FormData()
    formData.append('type', 'login')
    formData.append('email', email)
    formData.append('password', password)
    try {
      const response = await fetchWithTimeout(loginUrl, {
        method: 'POST',
        body: formData,
        signal: signal,
        timeout: 10000,
      })
      const json = await response.json()
      if (json.status != false) {
        setDisplayText('Saving credentials')
        try {
          setDisplayText('Saving credentials')
          await AsyncStorage.setItem(
            'userProfile',
            JSON.stringify({
              isLoggedIn: true,
              authToken: json.token,
              id: json.data.id,
              name: json.data.user_login,
              avatar: json.avatar,
              freeArticle: 5,
              freeAccount: false,
            }),
          )
        } catch {
          setError('Error storing data on device')
          setLogInState(true)
          setModalVisible(true)
        } finally {
          const Expotoken = await registerForPushNotificationsAsync()
          console.log(Expotoken)
          setDisplayText('Registering for push notification')
          const status = await postToken(Expotoken)
          setExit(status)
          setDisplayText('Finishing')
          if (status) {
            setLogInState(true)
            navigation.replace('Home')
          }
        }
      } else {
        setError('Invalid email or password')
        setLogInState(true)
        setModalVisible(true)
      }
    } catch (error) {
      if (error.name === 'AbortError') {
        setError('Network Timeout, Try again')
        setLogInState(true)
        setModalVisible(true)
      }
    }
  }

  const [data, setData] = React.useState({
    username: '',
    password: '',
    check_textInputChange: false,
    secureTextEntry: true,
    isValidUser: true,
    isValidPassword: true,
  })

  const { colors } = useTheme()

  const updateSecureTextEntry = () => {
    setData({
      ...data,
      secureTextEntry: !data.secureTextEntry,
    })
  }

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : null}
    >
      <View style={styles.header}>
        <Animatable.View
          animation="bounceIn"
          style={styles.logo}
        ></Animatable.View>
      </View>

      <Animatable.View
        animation="fadeInUpBig"
        style={[
          styles.footer,
          {
            backgroundColor: '#6e822b',
          },
        ]}
      >
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            Alert.alert('Modal has been closed.')
            setModalVisible(!modalVisible)
          }}
        >
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <Text style={styles.modalText}>{error}</Text>
              <Pressable
                style={[styles.button, styles.buttonClose]}
                onPress={() => setModalVisible(!modalVisible)}
              >
                <Text style={styles.textStyle}>Close</Text>
              </Pressable>
            </View>
          </View>
        </Modal>
        <Text
          style={[
            styles.text_footer,
            {
              color: '#fff',
            },
          ]}
        >
          Email
        </Text>
        <View style={styles.action}>
          <FontAwesome name="user-o" color={'#fff'} size={20} />
          <TextInput
            placeholder="Enter Your Email Address"
            placeholderTextColor="#fff"
            style={[
              styles.textInput,
              {
                color: '#fff',
              },
            ]}
            autoCapitalize="none"
            onChangeText={(email) => setEmail(email)}
            value={email}
          />
          {data.check_textInputChange ? (
            <Animatable.View animation="bounceIn">
              <Feather name="check-circle" color="green" size={20} />
            </Animatable.View>
          ) : null}
        </View>
        {data.isValidUser ? null : (
          <Animatable.View animation="fadeInLeft" duration={500}>
            <Text style={styles.errorMsg}>
              Username must be 4 characters long.
            </Text>
          </Animatable.View>
        )}

        <Text
          style={[
            styles.text_footer,
            {
              color: '#fff',
              marginTop: 35,
            },
          ]}
        >
          Password
        </Text>
        <View style={styles.action}>
          <Feather name="lock" color={'#fff'} size={20} />
          <TextInput
            placeholder="Enter Your Password"
            placeholderTextColor="#fff"
            secureTextEntry={data.secureTextEntry ? true : false}
            style={[styles.textInput]}
            autoCapitalize="none"
            onChangeText={(password) => setPassword(password)}
            value={password}
            secureTextEntry={data.secureTextEntry}
          />
          <TouchableOpacity onPress={updateSecureTextEntry}>
            {data.secureTextEntry ? (
              <Feather name="eye-off" color="#fff" size={20} />
            ) : (
              <Feather name="eye" color="#fff" size={20} />
            )}
          </TouchableOpacity>
        </View>
        {data.isValidPassword ? null : (
          <Animatable.View animation="fadeInLeft" duration={500}>
            <Text style={styles.errorMsg}>
              Password must be 8 characters long.
            </Text>
          </Animatable.View>
        )}

        <TouchableOpacity>
          <Text style={{ color: '#6e822b', marginTop: 15 }}>
            Forgot password?
          </Text>
        </TouchableOpacity>
        <View style={styles.buttonT}>
          {logInState ? (
            <TouchableOpacity
              style={styles.signIn}
              onPress={() => {
                doAuth(email, password)
              }}
            >
              <LinearGradient colors={['#000', '#000']} style={styles.signIn}>
                <Text
                  style={[
                    styles.textSign,
                    {
                      color: '#fff',
                    },
                  ]}
                >
                  Sign In
                </Text>
              </LinearGradient>
            </TouchableOpacity>
          ) : (
            <View>
              <ActivityIndicator size="large" color="#000" />
              <Text>{displayText}</Text>
            </View>
          )}
          <TouchableOpacity
            style={styles.signIn}
            onPress={() => abortFetching()}
          >
            <LinearGradient colors={['#000', '#000']} style={styles.signIn}>
              <Text
                style={[
                  styles.textSign,
                  {
                    color: '#fff',
                  },
                ]}
              >
                Cancel
              </Text>
            </LinearGradient>
          </TouchableOpacity>
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            paddingTop: 10,
          }}
        >
          <TouchableOpacity
            onPress={() => {
              Linking.openURL('https://www.medicalindependent.ie/registration/')
            }}
          >
            <Text style={styles.outlinks}>Subscribe</Text>
          </TouchableOpacity>
          <Text style={styles.outlinks}>|</Text>
          <TouchableOpacity
            onPress={() => {
              Linking.openURL(
                'https://www.medicalindependent.ie/reset-password/',
              )
            }}
          >
            <Text style={styles.outlinks}>Lost Your Password</Text>
          </TouchableOpacity>
        </View>
      </Animatable.View>
    </KeyboardAvoidingView>
  )
}

export default SignInScreen
const { height, width } = Dimensions.get('screen')
const height_logo = height * 0.28
const width_logo = width

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
  header: {
    flex: 1,
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
  outlinks: {
    padding: 5,
    color: 'black',
    fontSize: 14,
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
  },
  actionError: {
    flexDirection: 'row',
    marginTop: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#FF0000',
    paddingBottom: 5,
  },
  textInput: {
    flex: 1,
    marginTop: Platform.OS === 'ios' ? 0 : -12,
    paddingLeft: 10,
    paddingTop: 10,
    color: '#000',
    backgroundColor: '#6e822b',
  },
  errorMsg: {
    color: '#FF0000',
    fontSize: 14,
  },
  buttonT: {
    alignItems: 'center',
    marginTop: 20,
  },
  signIn: {
    width: '100%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 2,
    marginTop: 10,
  },
  textSign: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  logo: {
    flex: 1,
    justifyContent: 'center',
    width: width_logo,
    height: height_logo,
    margin: 20,
    padding: 20,
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'black',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: '#F194FF',
  },
  buttonClose: {
    backgroundColor: '#6e822b',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    color: 'white',
    marginBottom: 15,
    textAlign: 'center',
  },
})
