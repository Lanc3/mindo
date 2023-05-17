import AsyncStorage from '@react-native-async-storage/async-storage'
import React, { useCallback, useEffect } from 'react'
import { Dimensions, Image, StyleSheet, Text, View } from 'react-native'
import * as Animatable from 'react-native-animatable'

const PleaseConnectInternetScreen = ({ navigation }) => {
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
        <Animatable.View animation="fadeInUpBig" style={styles.logo}>
          <Image source={require('../assets/images/adaptive-icon.png')} />
        </Animatable.View>
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
              alignSelf: 'center',
              textAlign: 'center',
            },
          ]}
        >
          No Internet Connection Detected
        </Text>
        <Text style={styles.text}>
          Please connect to the internet use the app, This app required internet
          connection to function
        </Text>
      </Animatable.View>
    </View>
  )
}

export default PleaseConnectInternetScreen

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
  logo: {},
  title: {
    color: '#05375a',
    fontSize: 30,
    fontWeight: 'bold',
    alignSelf: 'center',
  },
  text: {
    color: '#fff',
    marginTop: 5,
    alignSelf: 'center',
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
  outlinks: {
    padding: 5,
    color: 'black',
    fontSize: 14,
  },
})
