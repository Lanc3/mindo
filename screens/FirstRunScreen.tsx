import React,{useEffect,useState} from "react";
import { View, Text,Platform,StyleSheet,Dimensions,StatusBar,TouchableOpacity } from "react-native";
import { LinearGradient } from 'expo-linear-gradient';
import { useTheme } from '@react-navigation/native';
import * as Animatable from 'react-native-animatable';
import MaterialIcons from '@expo/vector-icons/MaterialCommunityIcons';
import Svg, { Path } from "react-native-svg";
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as Device from 'expo-device';
import * as Notifications from 'expo-notifications';
import {postToken} from '../hooks/useResults';


const FirstRunScreen = ({navigation}) => {
    const { colors } = useTheme();
    const [token,setToken] = useState({expoPushToken:''});
    const registerForPushNotificationsAsync = async () => {
      if (Device.isDevice) {
        const { status: existingStatus } = await Notifications.getPermissionsAsync();
        let finalStatus = existingStatus;
        if (existingStatus !== 'granted') {
          const { status } = await Notifications.requestPermissionsAsync();
          finalStatus = status;
        }
        if (finalStatus !== 'granted') {
          alert('Failed to get push token for push notification!');
          return;
        }
        const token = (await Notifications.getExpoPushTokenAsync()).data;
        console.log(token);
        setToken({ expoPushToken: token });
       
        console.log(token);
      } else {
        alert('Must use physical device for Push Notifications');
      }

      if (Platform.OS === 'android') {
        Notifications.setNotificationChannelAsync('default', {
          name: 'default',
          importance: Notifications.AndroidImportance.MAX,
          vibrationPattern: [0, 250, 250, 250],
          lightColor: '#FF231F7C',
        });
      }
      };

    const _retrieveData = async () => {
        try {
          const value = await AsyncStorage.getItem('userProfile');
          if (value === null) {
            registerForPushNotificationsAsync();
          }
          else{
            navigation.navigate('MainDrawer',{screen :'Home'});
          }
        } catch (error) {
          // Error retrieving data
        }
      };
      const _storeData = async (value) => {
        try {
          await AsyncStorage.setItem(
            'userProfile',
            JSON.stringify({
              isLoggedIn: null,
              authToken: null,
              id: null,
              name: null,
              avatar: null,
              freeArticle: 5,
              freeAccount: true,
            })
          );
        } catch {
          console.log('Error storing data on device');

        }finally{
          try{
            navigation.navigate('MainDrawer',{screen :'Home'});
          }
          catch{
            console.log('Error navigating to Home');
          }
        }
      };

    useEffect(() => {
        _retrieveData();
      }, []);

    return (
        <View style={styles.container}>
            <StatusBar backgroundColor='#000' barStyle="light-content"/>
          <View style={styles.header}>
          <Animatable.View 
            animation="bounceIn"
            style={styles.logo}
        >
        <Svg
                            width={"100%"}
                            height={'100%'}
                            viewBox="21 0 90 120"
                        >
                        <Path d="M21.8,17.9c1.3,0,2.4,0.2,3.2,0.5c0.8,0.3,1.5,0.8,2,1.4c0.5,0.6,0.9,1.4,1.1,2.4c0.2,1,0.3,2.2,0.3,3.8v12.8
                                c0,1.3,0.2,2.2,0.6,2.7c0.4,0.5,1.1,0.7,2.1,0.7v1c-0.6,0-1.4-0.1-2.6-0.1c-1.2,0-2.3-0.1-3.4-0.1c-1.1,0-2.3,0-3.4,0.1
                                c-1.1,0-1.9,0.1-2.5,0.1v-1c0.9,0,1.4-0.2,1.8-0.7c0.3-0.5,0.5-1.4,0.5-2.7V23.9c0-0.8-0.1-1.5-0.2-2.1c-0.1-0.6-0.4-1-0.7-1.4
                                C20.3,20.1,19.7,20,19,20c-0.8,0-1.6,0.2-2.3,0.7c-0.7,0.5-1.3,1.1-1.7,2c-0.4,0.8-0.6,1.8-0.6,2.8v13.2c0,1.3,0.2,2.2,0.5,2.7
                                c0.3,0.5,0.9,0.7,1.8,0.7v1c-0.5,0-1.3-0.1-2.4-0.1c-1.1,0-2.1-0.1-3.3-0.1c-1.2,0-2.4,0-3.7,0.1c-1.3,0-2.2,0.1-2.8,0.1v-1
                                c1.1,0,1.9-0.2,2.4-0.7c0.5-0.5,0.7-1.4,0.7-2.7v-15c0-1.4-0.2-2.5-0.6-3.2c-0.4-0.7-1.2-1-2.4-1v-1c1,0.1,2,0.1,2.9,0.1
                                c1.3,0,2.6-0.1,3.7-0.2c1.2-0.1,2.2-0.3,3.2-0.5v4.3c0.8-1.6,1.8-2.7,3.1-3.4C18.8,18.2,20.2,17.9,21.8,17.9z M36.1,17.9
                                c1.3,0,2.4,0.2,3.2,0.5c0.8,0.3,1.5,0.8,2,1.4c0.5,0.6,0.9,1.4,1.1,2.4c0.2,1,0.3,2.2,0.3,3.8v12.8c0,1.3,0.2,2.2,0.7,2.7
                                c0.5,0.5,1.2,0.7,2.4,0.7v1c-0.6,0-1.5-0.1-2.7-0.1c-1.2,0-2.4-0.1-3.6-0.1c-1.1,0-2.3,0-3.4,0.1c-1.1,0-1.9,0.1-2.5,0.1v-1
                                c0.9,0,1.4-0.2,1.8-0.7c0.3-0.5,0.5-1.4,0.5-2.7V23.9c0-0.8-0.1-1.5-0.2-2.1c-0.1-0.6-0.4-1-0.8-1.4c-0.4-0.3-1-0.5-1.8-0.5
                                c-1.2,0-2.3,0.5-3.2,1.6c-0.9,1.1-1.4,2.4-1.4,4l-0.2-2.9c0.9-1.9,2-3.2,3.4-3.8C32.9,18.2,34.4,17.9,36.1,17.9z" fill="#6e822b" 
                        />
                        <Path d="M57.4,18v20.7c0,1.3,0.2,2.2,0.7,2.7c0.5,0.5,1.2,0.7,2.4,0.7v1c-0.6,0-1.5-0.1-2.7-0.1
                                c-1.2,0-2.4-0.1-3.6-0.1c-1.2,0-2.5,0-3.8,0.1c-1.3,0-2.2,0.1-2.8,0.1v-1c1.1,0,1.9-0.2,2.4-0.7c0.5-0.5,0.7-1.4,0.7-2.7v-15
                                c0-1.4-0.2-2.5-0.6-3.2c-0.4-0.7-1.2-1-2.4-1v-1c1,0.1,2,0.1,2.9,0.1c1.3,0,2.6-0.1,3.7-0.2C55.3,18.4,56.4,18.2,57.4,18z
                                M53.7,6.3c1.3,0,2.4,0.3,3.2,1C57.6,7.9,58,8.8,58,9.9c0,1.1-0.4,2-1.2,2.7c-0.8,0.6-1.8,1-3.2,1c-1.3,0-2.4-0.3-3.2-1
                                c-0.8-0.6-1.2-1.5-1.2-2.7c0-1.1,0.4-2,1.2-2.7C51.3,6.6,52.3,6.3,53.7,6.3z" fill="#6e822b" 
                        />
                        <Path d="M80.1,17.9c1.3,0,2.4,0.2,3.3,0.5c0.8,0.3,1.5,0.8,2,1.4c0.5,0.6,0.9,1.4,1.1,2.3c0.2,0.9,0.4,2.2,0.4,3.8
                                v12.8c0,1.3,0.2,2.2,0.7,2.7c0.5,0.5,1.2,0.7,2.4,0.7v1c-0.6,0-1.5-0.1-2.7-0.1c-1.2,0-2.4-0.1-3.6-0.1c-1.2,0-2.4,0-3.5,0.1
                                c-1.2,0-2,0.1-2.6,0.1v-1c0.9,0,1.6-0.2,2-0.7c0.4-0.5,0.6-1.4,0.6-2.7V23.9c0-0.8-0.1-1.5-0.2-2.1c-0.2-0.6-0.4-1-0.9-1.4
                                c-0.4-0.3-1-0.5-1.9-0.5c-1.3,0-2.4,0.5-3.3,1.6c-0.9,1-1.4,2.4-1.4,3.9v13.2c0,1.3,0.2,2.2,0.6,2.7c0.4,0.5,1.1,0.7,2,0.7v1
                                c-0.6,0-1.4-0.1-2.5-0.1c-1.1,0-2.2-0.1-3.4-0.1c-1.2,0-2.4,0-3.7,0.1c-1.3,0-2.2,0.1-2.8,0.1v-1c1.1,0,1.9-0.2,2.4-0.7
                                c0.5-0.5,0.7-1.4,0.7-2.7v-15c0-1.4-0.2-2.5-0.6-3.2c-0.4-0.7-1.2-1-2.4-1v-1c1,0.1,2,0.1,2.9,0.1c1.3,0,2.6-0.1,3.7-0.2
                                c1.2-0.1,2.2-0.3,3.2-0.5v4.3c0.8-1.6,1.9-2.8,3.2-3.4C76.9,18.2,78.4,17.9,80.1,17.9z" fill="#6e822b" 
                        />
                        <Path d="M102.9,17.9c1.4,0,2.6,0.2,3.7,0.7c1.1,0.5,1.9,1.2,2.5,2.3l-0.6,0.5c-0.4-0.8-1-1.3-1.6-1.6
                                c-0.7-0.3-1.4-0.5-2.2-0.5c-1.6,0-2.9,0.9-3.8,2.8c-0.9,1.9-1.4,4.8-1.4,8.7c0,2.7,0.2,4.8,0.5,6.4c0.4,1.6,0.9,2.7,1.6,3.4
                                c0.7,0.7,1.5,1,2.4,1c1.1,0,2-0.4,2.9-1.3c0.9-0.9,1.3-2,1.4-3.5l0.2,1.7c-0.5,1.7-1.2,3-2.3,3.8c-1.1,0.9-2.4,1.3-4.2,1.3
                                c-1.9,0-3.5-0.5-5-1.4c-1.5-0.9-2.6-2.3-3.4-4.2c-0.8-1.9-1.2-4.4-1.2-7.4c0-2.9,0.5-5.3,1.4-7.1c0.9-1.9,2.2-3.3,3.8-4.2
                                C99,18.3,100.8,17.9,102.9,17.9z M115,5.9v32c0,1.4,0.2,2.5,0.7,3.2c0.4,0.7,1.2,1,2.4,1v1c-1-0.1-2-0.1-2.9-0.1
                                c-1.3,0-2.6,0-3.7,0.1c-1.2,0.1-2.2,0.3-3.2,0.5v-32c0-1.4-0.2-2.5-0.6-3.2c-0.4-0.7-1.2-1-2.4-1v-1c1,0.1,2,0.1,2.9,0.1
		                        c1.3,0,2.5-0.1,3.7-0.2C112.9,6.3,114,6.1,115,5.9z" fill="#6e822b" 
                        />
                        <Path d="M132.2,17.9c2.3,0,4.3,0.4,6.1,1.3c1.7,0.9,3.1,2.2,4.1,4.1c1,1.9,1.5,4.4,1.5,7.5s-0.5,5.6-1.5,7.5
                                c-1,1.9-2.3,3.3-4.1,4.1c-1.7,0.9-3.8,1.3-6.1,1.3c-2.2,0-4.2-0.4-6-1.3c-1.8-0.9-3.1-2.2-4.1-4.1c-1-1.9-1.5-4.4-1.5-7.5
                                s0.5-5.7,1.5-7.5c1-1.9,2.4-3.3,4.1-4.1C128,18.3,130,17.9,132.2,17.9z M132.2,18.8c-1.3,0-2.3,0.9-3.2,2.8
                                c-0.9,1.9-1.3,4.9-1.3,9.2c0,4.2,0.4,7.3,1.3,9.2c0.9,1.9,1.9,2.8,3.2,2.8c1.3,0,2.4-0.9,3.2-2.8c0.8-1.9,1.3-4.9,1.3-9.2
                                c0-4.2-0.4-7.3-1.3-9.2C134.6,19.8,133.5,18.8,132.2,18.8z" fill="#6e822b" 
                        />
                        <Path d="M152.1,36.4c1.2,0,2.2,0.3,2.9,1c0.7,0.6,1.1,1.5,1.1,2.7c0,1.1-0.4,2-1.1,2.7c-0.7,0.6-1.7,1-2.9,1
		                        c-1.2,0-2.2-0.3-2.9-1c-0.7-0.6-1.1-1.5-1.1-2.7c0-1.1,0.4-2,1.1-2.7C149.9,36.8,150.9,36.4,152.1,36.4z" fill="#6e822b" 
                        />    
                        <Path d="M169.5,18v20.7c0,1.3,0.2,2.2,0.7,2.7c0.5,0.5,1.2,0.7,2.4,0.7v1c-0.6,0-1.5-0.1-2.7-0.1
                                c-1.2,0-2.4-0.1-3.6-0.1c-1.2,0-2.5,0-3.8,0.1c-1.3,0-2.2,0.1-2.8,0.1v-1c1.1,0,1.9-0.2,2.4-0.7c0.5-0.5,0.7-1.4,0.7-2.7v-15
                                c0-1.4-0.2-2.5-0.6-3.2c-0.4-0.7-1.2-1-2.4-1v-1c1,0.1,2,0.1,2.9,0.1c1.3,0,2.6-0.1,3.7-0.2C167.5,18.4,168.5,18.2,169.5,18z
                                M165.8,6.3c1.3,0,2.4,0.3,3.2,1c0.8,0.6,1.2,1.5,1.2,2.7c0,1.1-0.4,2-1.2,2.7c-0.8,0.6-1.8,1-3.2,1c-1.3,0-2.4-0.3-3.2-1
                                c-0.8-0.6-1.2-1.5-1.2-2.7c0-1.1,0.4-2,1.2-2.7C163.4,6.6,164.5,6.3,165.8,6.3z" fill="#6e822b" 
                        />
                        <Path d="M186.8,17.9c2.8,0,5,0.8,6.6,2.5c1.6,1.6,2.4,4.3,2.4,8.1h-15.6l-0.1-0.9h9.7c0-1.6-0.1-3-0.3-4.3
                                c-0.2-1.3-0.6-2.4-1-3.2c-0.5-0.8-1.1-1.2-1.9-1.2c-1.1,0-2,0.7-2.8,2.1c-0.8,1.4-1.2,3.7-1.4,6.9l0.1,0.3c0,0.4-0.1,0.8-0.1,1.2
                                c0,0.4,0,0.8,0,1.3c0,2.2,0.3,4,0.9,5.3c0.6,1.4,1.4,2.4,2.4,3c0.9,0.6,1.9,0.9,2.9,0.9c0.9,0,2-0.2,3.1-0.7
                                c1.1-0.5,2.2-1.5,3.2-3.1l0.9,0.3c-0.4,1.2-1,2.4-1.8,3.5c-0.8,1.1-1.9,2.1-3.1,2.8c-1.3,0.7-2.8,1.1-4.6,1.1
                                c-2.2,0-4.1-0.5-5.7-1.4c-1.6-0.9-2.9-2.3-3.9-4.2c-0.9-1.9-1.4-4.2-1.4-7.1c0-2.9,0.5-5.4,1.5-7.4c1-2,2.4-3.4,4.1-4.4
                                C182.6,18.4,184.6,17.9,186.8,17.9z" fill="#6e822b" 
                        />                 
                        </Svg>
        </Animatable.View>
          </View>
          <Animatable.View 
              style={[styles.footer, {
                  backgroundColor: '#6e822b'
              }]}
              animation="fadeInUpBig"
          >
              <Text style={[styles.title, {
                  color: '#fff'
              }]}>Stay Up to date with Medical Independent</Text>
              <Text style={styles.text}>Sign in with your account{token[0]}</Text>
              <View style={styles.button}>
              <TouchableOpacity style={styles.containerButtons} onPress={()=> navigation.navigate('SignInScreen')}>
                  <LinearGradient
                      colors={['#000', '#000']}
                      style={styles.signIn}
                  >
                      <Text style={styles.textSign}>Sign In</Text>
                      <MaterialIcons 
                          name="account-arrow-right-outline"
                          color="#fff"
                          size={20}
                      />
                  </LinearGradient>
              </TouchableOpacity>
              <TouchableOpacity style={styles.containerButtons} onPress={_storeData}>
                  <LinearGradient
                      colors={['#000', '#000']}
                      style={styles.signIn}
                  >
                      <Text style={styles.textSign}>Continue with limited access</Text>
   
                  </LinearGradient>
              </TouchableOpacity>
              </View>
          </Animatable.View>
        </View>
      );
};

export default FirstRunScreen;

const {height,width} = Dimensions.get("screen");
const height_logo = height * 0.28;
const width_logo = width;

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    backgroundColor: '#000'
  },
  header: {
      flex: 2,
      justifyContent: 'center',
      alignItems: 'center'
  },
  footer: {
      flex: 1,
      backgroundColor: '#6e822b',
      borderTopLeftRadius: 30,
      borderTopRightRadius: 30,
      paddingVertical: 50,
      paddingHorizontal: 30
  },
  logo: {
      width: width_logo,
      height: height_logo,
  },
  title: {
      color: '#05375a',
      fontSize: 30,
      fontWeight: 'bold'
  },
  text: {
      color: '#fff',
      marginTop:5
  },
  button: {

      marginTop: 30
  },
  signIn: {
      width: "100%",
      height: 40,
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 5,
      flexDirection: 'row',
      
  },
  textSign: {
      color: 'white',
      fontWeight: 'bold',
      paddingRight:5
  },
  containerButtons: {
    padding: 3,
  }
});