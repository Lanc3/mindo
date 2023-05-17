import { Lato_400Regular, Lato_700Bold } from '@expo-google-fonts/lato'
import {
  Merriweather_300Light,
  Merriweather_300Light_Italic,
  Merriweather_400Regular,
  Merriweather_400Regular_Italic,
  Merriweather_700Bold,
  Merriweather_700Bold_Italic,
  Merriweather_900Black,
  Merriweather_900Black_Italic,
} from '@expo-google-fonts/merriweather'
import AsyncStorage from '@react-native-async-storage/async-storage'
import {
  NavigationContainer,
  useNavigationContainerRef,
} from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { useFonts } from 'expo-font'
import * as Notifications from 'expo-notifications'
import { default as React, useRef, useState } from 'react'
import { Platform, StatusBar, StyleSheet } from 'react-native'
import { FavoritesList } from './components/FavoritesList'
import { CounterContextProvider } from './components/GlobalContext'
import { IOSStatusBar } from './components/IOSStatusBar'
import LandscapeReader from './components/LandscapeReader'
import { NotificationViewList } from './components/NotificationViewList'
import CustomHeader from './CustomHeader'
import AboutScreen from './screens/About/AboutScreen'
import AdvertiseScreen from './screens/advertise/AdvertiseScreen'
import ClassifiedsScreen from './screens/classifieds/Classifieds'
import CaseStudiesScreen from './screens/clinical/CaseStudiesScreen'
import ClinicalNews from './screens/clinical/ClinicalNews'
import FeatureScreen from './screens/clinical/FeatureScreen'
import ResearchScreen from './screens/clinical/ResearchScreen'
import DrChristineScreen from './screens/comments/DrChristineScreen'
import DrGabrielleScreen from './screens/comments/DrGabrielleScreen'
import DrLuciaScreen from './screens/comments/DrLuciaScreen'
import DrMichaelScreen from './screens/comments/DrMichaelScreen'
import DrNeasaScreen from './screens/comments/DrNeasaScreen'
import DrPaddyScreen from './screens/comments/DrPaddyScreen'
import DrPatScreen from './screens/comments/DrPatScreen'
import EditorialScreen from './screens/comments/EditorialScreen'
import GeorgeWinterScreen from './screens/comments/GeorgeWinterScreen'
import MedicoLegal from './screens/comments/MedicoLegal'
import ProfBrendanScreen from './screens/comments/ProfBrendanScreen'
import ProfSeamusScreen from './screens/comments/ProfSeamusScreen'
import EcopyReader from './screens/EcopyReader/EcopyReader'
import EcopyReaderLandscape from './screens/EcopyReader/EcopyReaderLandscape'
import JournalReaderLandscape from './screens/EcopyReader/JournalReaderLandscape'
import FirstRunScreen from './screens/FirstRunScreen'
import FullArticleScreen from './screens/FullArticleScreen'
import FullGallaryScreen from './screens/FullGallaryScreen'
import GalleriesScreen from './screens/galleries/GalleriesScreen'
import HomeScreen from './screens/HomeScreen'
import BookReview from './screens/life/BookReview'
import Cartoon from './screens/life/Cartoon'
import ECopy from './screens/life/ECopy'
import FinanceScreen from './screens/life/FinanceScreen'
import FoodAndDrink from './screens/life/FoodAndDrink'
import Life from './screens/life/Life'
import MotoringScreen from './screens/life/MotoringScreen'
import SportScreen from './screens/life/SportScreen'
import SportsQuizScreen from './screens/life/SportsQuizScreen'
import TheDorsalViewScreen from './screens/life/TheDorsalViewScreen'
import TheGanderScreen from './screens/life/TheGanderScreen'
import LogOut from './screens/LogOut'
import MostReadScreen from './screens/MostRead/MostReadScreen'
import AdTestPage from './screens/news/AdTestPage'
import BreakingNews from './screens/news/BreakingNews'
import Conference from './screens/news/Conference'
import Interviews from './screens/news/Interviews'
import Investigations from './screens/news/Investigations'
import LatestNews from './screens/news/LatestNews'
import NewsFeatures from './screens/news/NewsFeatures'
import PhotoNews from './screens/news/PhotoNews'
import CatherineReillyScreen from './screens/newsTeam/CatherineReillyScreen'
import DavidLynchScreen from './screens/newsTeam/DavidLynchScreen'
import NiamhQuinlanScreen from './screens/newsTeam/NiamhQuinlanScreen'
import PaulMulhollandScreen from './screens/newsTeam/PaulMulhollandScreen'
import PriscillaLynchScreen from './screens/newsTeam/PriscillaLynchScreen'
import PrivacyScreen from './screens/privacy/PrivacyScreen'
import PushArticleScreen from './screens/PushArticleScreen'
import SearchScreen from './screens/SearchScreen'
import SignInScreen from './screens/SignInScreen'
import SignUpScreen from './screens/SignUpScreen'
import CPIScreen from './screens/societies/CPIScreen'
import HAIScreen from './screens/societies/HAIScreen'
import ICSScreen from './screens/societies/ICSScreen'
import IESScreen from './screens/societies/IESScreen'
import IICNINAScreen from './screens/societies/IICNINAScreen'
import INSScreen from './screens/societies/INSScreen'
import IOSScreen from './screens/societies/IOSScreen'
import ISGScreen from './screens/societies/ISGScreen'
import ISMOScreen from './screens/societies/ISMOScreen'
import ISRScreen from './screens/societies/ISRScreen'
import ITSScreen from './screens/societies/ITSScreen'
import PCDSIScreen from './screens/societies/PCDSIScreen'
import SponsoredScreen from './screens/sponsored/SponsoredScreen'
import SubscriberOnly from './screens/SubscriberOnly/SubscriberOnly'
import Terms from './screens/terms/Terms'
import UpdateJournal from './screens/UpdateJournal/UpdateJournal'
import UpdateJournalReader from './screens/UpdateJournalReader/UpdateJournalReader'
import PodcastReader from './screens/UpdateJournalReader/PodcastReader'
Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: true,
    shouldSetBadge: true,
  }),
})
Notifications.setNotificationChannelAsync('default', {
  name: 'default',
  importance: Notifications.AndroidImportance.MAX,
  vibrationPattern: [0, 250, 250, 250],
  lightColor: '#6e822b',
})
Notifications.addNotificationResponseReceivedListener((response) => {
  const {
    categoryName,
    author,
    content,
    media,
    title,
    date,
  } = response.notification.request.content.data

  // setNotification(notification)
  // addNotificationData({
  //   nameSlug: categoryName,
  //   authorName: author,
  //   title: title,
  //   date: date,
  //   imageData: media,
  //   htmlData: content,
  // })

  // navigationRef.navigate('FullArticleScreen', {
  //   nameSlug: categoryName,
  //   authorName: author,
  //   title: title,
  //   date: date,
  //   imageData: media,
  //   htmlData: content,
  // })
})
const Stack = createStackNavigator()

export default function App() {
  const lastNotificationResponse = Notifications.useLastNotificationResponse()
  const notificationListener = useRef()
  const responseListener = useRef()
  const navigationRef = useNavigationContainerRef() // You can also use a regular ref with `React.useRef()`
  const { notification } = Notifications.useLastNotificationResponse() || {}
  const [netInfo, setNetInfo] = useState('')

  React.useEffect(() => {
    if (lastNotificationResponse) {
      const {
        categoryName,
        author,
        content,
        media,
        title,
        date,
      } = lastNotificationResponse.notification.request.content.data

      //alert(categoryName, categoryName)
      navigationRef.navigate('FullArticleScreen', {
        nameSlug: categoryName,
        authorName: author,
        title: title,
        date: date,
        imageData: media,
        htmlData: content,
      })
      if (!navigationRef.current) {
        ;(async () => {
          await checkNavigation()
          //alert('wait nav') // loop until navigator is ready
          navigationRef.navigate('FullArticleScreen', {
            nameSlug: categoryName,
            authorName: author,
            title: title,
            date: date,
            imageData: media,
            htmlData: content,
          })
        })()
      }
    }
  }, [lastNotificationResponse])
  const delay = (ms) => new Promise((res) => setTimeout(res, ms))
  const checkNavigation = async () => {
    if (!navigationRef.current) {
      await delay(500) // this is for call time exceeded error
      await checkNavigation()
    }
    if (navigationRef.current) await delay(2000) // this is for giving my app time to set up my navigator
  }
  const addNotificationData = async (newData) => {
    try {
      // retrieve the existing notification data from async storage
      const existingDataString = await AsyncStorage.getItem('notifications')

      let existingData = JSON.parse(existingDataString) || []

      // add the new data to the existing array
      existingData.push(newData)

      // save the updated array back to async storage
      await AsyncStorage.setItem('notifications', JSON.stringify(existingData))
    } catch (error) {
      console.log(error)
    }
  }
  let [fontsLoaded] = useFonts({
    Merriweather_300Light,
    Merriweather_300Light_Italic,
    Merriweather_400Regular,
    Merriweather_400Regular_Italic,
    Merriweather_700Bold,
    Merriweather_700Bold_Italic,
    Merriweather_900Black,
    Merriweather_900Black_Italic,
    Lato_400Regular,
    Lato_700Bold,
  })

  if (!fontsLoaded) {
    return null
  } else {
    return (
      <CounterContextProvider>
        <NavigationContainer ref={navigationRef}>
          
          <IOSStatusBar backgroundColor="black" barStyle="light-content" />
          <Stack.Navigator
            initialRouteName="FirstRunScreen"
            screenOptions={{
              headerMode: 'float',
              animationTypeForReplace: 'pop',
              animationEnabled: Platform.OS == 'android' ? false : false,
              headerTintColor: '#000',
              headerTitleStyle: {
                fontWeight: 'bold',
              },
              headerStyle: {
                backgroundColor: '#f4511e',
              },
              gestureEnabled: false,
              header: ({ navigation, route, options, back, props }) => {
                return <CustomHeader />
              },
            }}
          >
            <Stack.Screen
              name="FirstRunScreen"
              component={FirstRunScreen}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="SignInScreen"
              component={SignInScreen}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="SignUpScreen"
              component={SignUpScreen}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="PushArticleScreen"
              component={PushArticleScreen}
              options={{ headerShown: true }}
            />
            <Stack.Screen
              name="AboutScreen"
              component={AboutScreen}
              options={{ headerShown: true }}
            />
            <Stack.Screen
              name="Life"
              component={Life}
              options={{ headerShown: true }}
            />
            <Stack.Screen
              name="SubscriberOnly"
              component={SubscriberOnly}
              options={{ headerShown: true }}
            />
            <Stack.Screen
              name="Ecopy-Reader"
              component={EcopyReader}
              options={{ headerShown: true }}
            />
            <Stack.Screen
              name="UpdateJournal"
              component={UpdateJournal}
              options={{ headerShown: true }}
            />
            <Stack.Screen
              name="UpdateJournalReader"
              component={UpdateJournalReader}
              options={{ headerShown: true }}
            />
            <Stack.Screen
              name="PodcastReader"
              component={PodcastReader}
              options={{ headerShown: true }}
            />
            <Stack.Screen
              name="JournalReaderLandscape"
              component={JournalReaderLandscape}
              options={{ headerShown: true }}
            />
            <Stack.Screen
              name="MostReadScreen"
              component={MostReadScreen}
              options={{ headerShown: true }}
            />
            <Stack.Screen
              name="ECopy"
              component={ECopy}
              options={{ headerShown: true }}
            />
            <Stack.Screen
              name="Terms"
              component={Terms}
              options={{ headerShown: true }}
            />
            <Stack.Screen
              name="PrivacyScreen"
              component={PrivacyScreen}
              options={{ headerShown: true }}
            />
            <Stack.Screen
              name="ClassifiedsScreen"
              component={ClassifiedsScreen}
              options={{ headerShown: true }}
            />
            <Stack.Screen
              name="SearchScreen"
              component={SearchScreen}
              options={{ headerShown: true }}
            />
            <Stack.Screen
              name="Home"
              component={HomeScreen}
              options={{ headerShown: true }}
            />
            <Stack.Screen
              name="BreakingNews"
              component={BreakingNews}
              options={{ headerShown: true }}
            />
            <Stack.Screen
              name="IOSScreen"
              component={IOSScreen}
              options={{ headerShown: true }}
            />
            <Stack.Screen
              name="FoodAndDrink"
              component={FoodAndDrink}
              options={{ headerShown: true }}
            />
            <Stack.Screen
              name="LandscapeReader"
              component={LandscapeReader}
              options={{ headerShown: true }}
            />
            <Stack.Screen
              name="DrGabrielleScreen"
              component={DrGabrielleScreen}
              options={{ headerShown: true }}
            />
            <Stack.Screen
              name="LatestNews"
              component={LatestNews}
              options={{ headerShown: true }}
            />
            <Stack.Screen
              name="NewsFeatures"
              component={NewsFeatures}
              options={{ headerShown: true }}
            />
            <Stack.Screen
              name="Investigations"
              component={Investigations}
              options={{ headerShown: true }}
            />
            <Stack.Screen
              name="Interviews"
              component={Interviews}
              options={{ headerShown: true }}
            />
            <Stack.Screen
              name="PhotoNews"
              component={PhotoNews}
              options={{ headerShown: true }}
            />
            <Stack.Screen
              name="Conference"
              component={Conference}
              options={{ headerShown: true }}
            />
            <Stack.Screen
              name="Editorial"
              component={EditorialScreen}
              options={{ headerShown: true }}
            />
            <Stack.Screen
              name="DrChristine"
              component={DrChristineScreen}
              options={{ headerShown: true }}
            />
            <Stack.Screen
              name="DrMichael"
              component={DrMichaelScreen}
              options={{ headerShown: true }}
            />
            <Stack.Screen
              name="DrPat"
              component={DrPatScreen}
              options={{ headerShown: true }}
            />
            <Stack.Screen
              name="GeorgeWinter"
              component={GeorgeWinterScreen}
              options={{ headerShown: true }}
            />
            <Stack.Screen
              name="DrPaddy"
              component={DrPaddyScreen}
              options={{ headerShown: true }}
            />
            <Stack.Screen
              name="DrLucia"
              component={DrLuciaScreen}
              options={{ headerShown: true }}
            />
            <Stack.Screen
              name="DrNeasa"
              component={DrNeasaScreen}
              options={{ headerShown: true }}
            />
            <Stack.Screen
              name="ProfBrendan"
              component={ProfBrendanScreen}
              options={{ headerShown: true }}
            />
            <Stack.Screen
              name="ProfSeamus"
              component={ProfSeamusScreen}
              options={{ headerShown: true }}
            />
            <Stack.Screen
              name="MedicoLegal"
              component={MedicoLegal}
              options={{ headerShown: true }}
            />
            <Stack.Screen
              name="Cartoon"
              component={Cartoon}
              options={{ headerShown: true }}
            />
            <Stack.Screen
              name="Finance"
              component={FinanceScreen}
              options={{ headerShown: true }}
            />
            <Stack.Screen
              name="TheGander"
              component={TheGanderScreen}
              options={{ headerShown: true }}
            />
            <Stack.Screen
              name="TheDorsalView"
              component={TheDorsalViewScreen}
              options={{ headerShown: true }}
            />
            <Stack.Screen
              name="Sport"
              component={SportScreen}
              options={{ headerShown: true }}
            />
            <Stack.Screen
              name="BookReview"
              component={BookReview}
              options={{ headerShown: true }}
            />
            <Stack.Screen
              name="Motoring"
              component={MotoringScreen}
              options={{ headerShown: true }}
            />
            <Stack.Screen
              name="SportsQuiz"
              component={SportsQuizScreen}
              options={{ headerShown: true }}
            />
            <Stack.Screen
              name="CaseStudies"
              component={CaseStudiesScreen}
              options={{ headerShown: true }}
            />
            <Stack.Screen
              name="Feature"
              component={FeatureScreen}
              options={{ headerShown: true }}
            />
            <Stack.Screen
              name="ClinicalNews"
              component={ClinicalNews}
              options={{ headerShown: true }}
            />
            <Stack.Screen
              name="Research"
              component={ResearchScreen}
              options={{ headerShown: true }}
            />
            <Stack.Screen
              name="ISR"
              component={ISRScreen}
              options={{ headerShown: true }}
            />
            <Stack.Screen
              name="CPI"
              component={CPIScreen}
              options={{ headerShown: true }}
            />
            <Stack.Screen
              name="ITS"
              component={ITSScreen}
              options={{ headerShown: true }}
            />
            <Stack.Screen
              name="ISMO"
              component={ISMOScreen}
              options={{ headerShown: true }}
            />
            <Stack.Screen
              name="PCDSI"
              component={PCDSIScreen}
              options={{ headerShown: true }}
            />
            <Stack.Screen
              name="ISG"
              component={ISGScreen}
              options={{ headerShown: true }}
            />
            <Stack.Screen
              name="IICNINA"
              component={IICNINAScreen}
              options={{ headerShown: true }}
            />
            <Stack.Screen
              name="IES"
              component={IESScreen}
              options={{ headerShown: true }}
            />
            <Stack.Screen
              name="ICS"
              component={ICSScreen}
              options={{ headerShown: true }}
            />
            <Stack.Screen
              name="INS"
              component={INSScreen}
              options={{ headerShown: true }}
            />
            <Stack.Screen
              name="HAI"
              component={HAIScreen}
              options={{ headerShown: true }}
            />
            <Stack.Screen
              name="GalleriesScreen"
              component={GalleriesScreen}
              options={{ headerShown: true }}
            />
            <Stack.Screen
              name="FullArticleScreen"
              component={FullArticleScreen}
              options={{ headerShown: true }}
            />
            <Stack.Screen
              name="SignInScreenlogout"
              component={SignInScreen}
              options={{ headerShown: true }}
            />
            <Stack.Screen
              name="CatherineReilly"
              component={CatherineReillyScreen}
              options={{ headerShown: true }}
            />
            <Stack.Screen
              name="NiamhQuinlan"
              component={NiamhQuinlanScreen}
              options={{ headerShown: true }}
            />
            <Stack.Screen
              name="DavidLynch"
              component={DavidLynchScreen}
              options={{ headerShown: true }}
            />
            <Stack.Screen
              name="PaulMulholland"
              component={PaulMulhollandScreen}
              options={{ headerShown: true }}
            />
            <Stack.Screen
              name="PriscillaLynch"
              component={PriscillaLynchScreen}
              options={{ headerShown: true }}
            />
            <Stack.Screen
              name="SponsoredScreen"
              component={SponsoredScreen}
              options={{ headerShown: true }}
            />
            <Stack.Screen
              name="AdvertiseScreen"
              component={AdvertiseScreen}
              options={{ headerShown: true }}
            />
            <Stack.Screen
              name="FavoritesList"
              component={FavoritesList}
              options={{ headerShown: true }}
            />
            <Stack.Screen
              name="NotificationViewList"
              component={NotificationViewList}
              options={{ headerShown: true }}
            />
            <Stack.Screen
              name="LogOut"
              component={LogOut}
              options={{ headerShown: true }}
            />
            <Stack.Screen
              name="AdTestPage"
              component={AdTestPage}
              options={{ headerShown: true }}
            />
            <Stack.Screen
              name="EcopyLandscape"
              component={EcopyReaderLandscape}
              options={{ headerShown: true }}
            />
            <Stack.Screen
              name="FullGallaryScreen"
              component={FullGallaryScreen}
              options={{ headerShown: true }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </CounterContextProvider>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
  },
})
