import MaterialIcons from '@expo/vector-icons/MaterialCommunityIcons'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { LinearGradient } from 'expo-linear-gradient'
import React, { useCallback, useEffect } from 'react'
import {
  Dimensions,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native'
import * as Animatable from 'react-native-animatable'

const FirstRunScreen = ({ navigation }) => {
  const getContent = useCallback(async () => {
    try {
      const value = await AsyncStorage.getItem('userProfile')
      if (!value) {
      } else {
        navigation.replace('Home')
      }
    } catch (error) {
      // Error retrieving data
    }
  }, [])

  const _storeData = async (value) => {
    try {
      await AsyncStorage.setItem(
        'userProfile',
        JSON.stringify({
          isLoggedIn: false,
          authToken: null,
          id: null,
          name: null,
          avatar: null,
          freeArticle: 5,
          freeAccount: true,
        }),
      )
    } catch {
      console.log('Error storing data on device')
    } finally {
      navigation.replace('Home')
    }
  }

  useEffect(() => {
    getContent()
  }, [getContent])
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Animatable.View
          animation="bounceIn"
          style={styles.logo}
        ></Animatable.View>
      </View>
      <Animatable.View
        style={[
          styles.footer,
          {
            backgroundColor: '#6e822b',
          },
        ]}
        animation="fadeInUpBig"
      >
        <Text
          style={[
            styles.title,
            {
              color: '#fff',
            },
          ]}
        >
          Stay Up to date with Medical Independent
        </Text>
        <Text style={styles.text}>Sign in with your account</Text>
        <View style={styles.button}>
          <TouchableOpacity
            style={styles.containerButtons}
            onPress={() => navigation.replace('SignInScreen')}
          >
            <LinearGradient colors={['#000', '#000']} style={styles.signIn}>
              <Text style={styles.textSign}>Sign In</Text>
              <MaterialIcons
                name="account-arrow-right-outline"
                color="#fff"
                size={20}
              />
            </LinearGradient>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.containerButtons}
            onPress={_storeData}
          >
            <LinearGradient colors={['#000', '#000']} style={styles.signIn}>
              <Text style={styles.textSign}>Continue with limited access</Text>
            </LinearGradient>
          </TouchableOpacity>
        </View>
      </Animatable.View>
    </View>
  )
}

export default FirstRunScreen

const { height, width } = Dimensions.get('screen')
const height_logo = height * 0.28
const width_logo = width

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
  header: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  footer: {
    flex: 1,
    backgroundColor: '#6e822b',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingVertical: 50,
    paddingHorizontal: 30,
  },
  logo: {
    flex: 1,
    justifyContent: 'center',
    width: width_logo,
    height: height_logo,
    margin: 100,
    padding: 20,
  },
  title: {
    color: '#05375a',
    fontSize: 30,
    fontWeight: 'bold',
  },
  text: {
    color: '#fff',
    marginTop: 5,
  },
  button: {
    marginTop: 30,
  },
  signIn: {
    width: '100%',
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    flexDirection: 'row',
  },
  textSign: {
    color: 'white',
    fontWeight: 'bold',
    paddingRight: 5,
  },
  containerButtons: {
    padding: 3,
  },
})
