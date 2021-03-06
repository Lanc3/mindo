import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React, { useEffect } from 'react';
import { BackHandler, Platform, StatusBar, StyleSheet } from 'react-native';
import 'react-native-gesture-handler';
import { CounterContextProvider } from './components/GlobalContext';
import CustomDrawerContent from './CustomDrawerContent.js';
import CustomHeader from './CustomHeader';
import { drawerItemsMain } from './DrawerItemsMain';
import AboutScreen from './screens/About/AboutScreen';
import AdvertiseScreen from './screens/advertise/AdvertiseScreen';
import ClassifiedsScreen from './screens/classifieds/Classifieds';
import CaseStudiesScreen from './screens/clinical/CaseStudiesScreen';
import ClinicalNews from './screens/clinical/ClinicalNews';
import FeatureScreen from './screens/clinical/FeatureScreen';
import ResearchScreen from './screens/clinical/ResearchScreen';
import DrChristineScreen from './screens/comments/DrChristineScreen';
import DrGabrielleScreen from './screens/comments/DrGabrielleScreen';
import DrLuciaScreen from './screens/comments/DrLuciaScreen';
import DrMichaelScreen from './screens/comments/DrMichaelScreen';
import DrNeasaScreen from './screens/comments/DrNeasaScreen';
import DrPaddyScreen from './screens/comments/DrPaddyScreen';
import DrPatScreen from './screens/comments/DrPatScreen';
import EditorialScreen from './screens/comments/EditorialScreen';
import GeorgeWinterScreen from './screens/comments/GeorgeWinterScreen';
import MedicoLegal from './screens/comments/MedicoLegal';
import ProfBrendanScreen from './screens/comments/ProfBrendanScreen';
import ProfSeamusScreen from './screens/comments/ProfSeamusScreen';
import EcopyReader from './screens/EcopyReader/EcopyReader';
import FirstRunScreen from './screens/FirstRunScreen';
import FullArticleScreen from './screens/FullArticleScreen';
import GalleriesScreen from './screens/galleries/GalleriesScreen';
import HomeScreen from './screens/HomeScreen';
import BookReview from './screens/life/BookReview';
import Cartoon from './screens/life/Cartoon';
import ECopy from './screens/life/ECopy';
import FinanceScreen from './screens/life/FinanceScreen';
import FoodAndDrink from './screens/life/FoodAndDrink';
import MotoringScreen from './screens/life/MotoringScreen';
import SportScreen from './screens/life/SportScreen';
import SportsQuizScreen from './screens/life/SportsQuizScreen';
import TheDorsalViewScreen from './screens/life/TheDorsalViewScreen';
import TheGanderScreen from './screens/life/TheGanderScreen';
import LogOut from './screens/LogOut';
import MostReadScreen from './screens/MostRead/MostReadScreen';
import BreakingNews from './screens/news/BreakingNews';
import Conference from './screens/news/Conference';
import Interviews from './screens/news/Interviews';
import Investigations from './screens/news/Investigations';
import LatestNews from './screens/news/LatestNews';
import NewsFeatures from './screens/news/NewsFeatures';
import PhotoNews from './screens/news/PhotoNews';
import CatherineReillyScreen from './screens/newsTeam/CatherineReillyScreen';
import DavidLynchScreen from './screens/newsTeam/DavidLynchScreen';
import PaulMulhollandScreen from './screens/newsTeam/PaulMulhollandScreen';
import PriscillaLynchScreen from './screens/newsTeam/PriscillaLynchScreen';
import PrivacyScreen from './screens/privacy/PrivacyScreen';
import SearchScreen from './screens/SearchScreen';
import SignInScreen from './screens/SignInScreen';
import SignUpScreen from './screens/SignUpScreen';
import CPIScreen from './screens/societies/CPIScreen';
import ICSScreen from './screens/societies/ICSScreen';
import IESScreen from './screens/societies/IESScreen';
import IICNINAScreen from './screens/societies/IICNINAScreen';
import IOSScreen from './screens/societies/IOSScreen';
import ISGScreen from './screens/societies/ISGScreen';
import ISMOScreen from './screens/societies/ISMOScreen';
import ISRScreen from './screens/societies/ISRScreen';
import ITSScreen from './screens/societies/ITSScreen';
import PCDSIScreen from './screens/societies/PCDSIScreen';
import SponsoredScreen from './screens/sponsored/SponsoredScreen';
import Terms from './screens/terms/Terms';
import UpdateJournal from './screens/UpdateJournal/UpdateJournal';
const Drawer = createDrawerNavigator();

function MainDrawerNavigation() {
  return (
    <Drawer.Navigator
    screenOptions={{
      drawerStyle: {
        backgroundColor: '#000',
        width: '100%',
      },
    }}
      initialRouteName="FirstRunScreen"
      drawerContent={(props) => (<CustomDrawerContent drawerItems={drawerItemsMain} {...props} />)}>
        <Drawer.Screen name="AboutScreen" component={AboutScreen} options={{headerShown:false}}/>
        <Drawer.Screen name="Ecopy-Reader" component={EcopyReader} options={{headerShown:false}}/>
        <Drawer.Screen name="UpdateJournal" component={UpdateJournal} options={{headerShown:false}}/>
      <Drawer.Screen name="MostReadScreen" component={MostReadScreen} options={{headerShown:false}}/>
      <Drawer.Screen name="ECopy" component={ECopy} options={{headerShown:false}}/>
      <Drawer.Screen name="Terms" component={Terms} options={{headerShown:false}}/>
      <Drawer.Screen name="PrivacyScreen" component={PrivacyScreen} options={{headerShown:false}}/>
      <Drawer.Screen name="ClassifiedsScreen" component={ClassifiedsScreen} options={{headerShown:false}}/>
      <Drawer.Screen name="SearchScreen" component={SearchScreen} options={{headerShown:false}}/>
      <Drawer.Screen name="Home" component={HomeScreen} options={{headerShown:false}}/>
      <Drawer.Screen name="BreakingNews" component={BreakingNews} options={{headerShown:false}}/>
      <Drawer.Screen name="IOSScreen" component={IOSScreen} options={{headerShown:false}}/>
      <Drawer.Screen name="FoodAndDrink" component={FoodAndDrink} options={{headerShown:false}}/>
      <Drawer.Screen name="DrGabrielleScreen" component={DrGabrielleScreen} options={{headerShown:false}}/>
      <Drawer.Screen name="LatestNews" component={LatestNews} options={{headerShown:false}}/>
      <Drawer.Screen name="NewsFeatures" component={NewsFeatures} options={{headerShown:false}}/>
      <Drawer.Screen name="Investigations" component={Investigations} options={{headerShown:false}}/>
      <Drawer.Screen name="Interviews" component={Interviews} options={{headerShown:false}}/>
      <Drawer.Screen name="PhotoNews" component={PhotoNews} options={{headerShown:false}}/>
      <Drawer.Screen name="Conference" component={Conference} options={{headerShown:false}}/>
      <Drawer.Screen name="Editorial" component={EditorialScreen} options={{headerShown:false}}/>
      <Drawer.Screen name="DrChristine" component={DrChristineScreen} options={{headerShown:false}}/>
      <Drawer.Screen name="DrMichael" component={DrMichaelScreen} options={{headerShown:false}}/>
      <Drawer.Screen name="DrPat" component={DrPatScreen} options={{headerShown:false}}/>
      <Drawer.Screen name="GeorgeWinter" component={GeorgeWinterScreen} options={{headerShown:false}}/>
      <Drawer.Screen name="DrPaddy" component={DrPaddyScreen} options={{headerShown:false}}/>
      <Drawer.Screen name="DrLucia" component={DrLuciaScreen} options={{headerShown:false}}/>
      <Drawer.Screen name="DrNeasa" component={DrNeasaScreen} options={{headerShown:false}}/>
      <Drawer.Screen name="ProfBrendan" component={ProfBrendanScreen} options={{headerShown:false}}/>
      <Drawer.Screen name="ProfSeamus" component={ProfSeamusScreen} options={{headerShown:false}}/>
      <Drawer.Screen name="MedicoLegal" component={MedicoLegal} options={{headerShown:false}}/>
      <Drawer.Screen name="Cartoon" component={Cartoon} options={{headerShown:false}}/>
      <Drawer.Screen name="Finance" component={FinanceScreen} options={{headerShown:false}}/>
      <Drawer.Screen name="TheGander" component={TheGanderScreen} options={{headerShown:false}}/>
      <Drawer.Screen name="TheDorsalView" component={TheDorsalViewScreen} options={{headerShown:false}}/>
      <Drawer.Screen name="Sport" component={SportScreen} options={{headerShown:false}}/>
      <Drawer.Screen name="BookReview" component={BookReview} options={{headerShown:false}}/>
      <Drawer.Screen name="Motoring" component={MotoringScreen} options={{headerShown:false}}/>
      <Drawer.Screen name="SportsQuiz" component={SportsQuizScreen} options={{headerShown:false}}/>
      <Drawer.Screen name="CaseStudies" component={CaseStudiesScreen} options={{headerShown:false}}/>
      <Drawer.Screen name="Feature" component={FeatureScreen} options={{headerShown:false}}/>
      <Drawer.Screen name="ClinicalNews" component={ClinicalNews} options={{headerShown:false}}/>
      <Drawer.Screen name="Research" component={ResearchScreen} options={{headerShown:false}}/>
      <Drawer.Screen name="ISR" component={ISRScreen} options={{headerShown:false}}/>
      <Drawer.Screen name="CPI" component={CPIScreen} options={{headerShown:false}}/>
      <Drawer.Screen name="ITS" component={ITSScreen} options={{headerShown:false}}/>
      <Drawer.Screen name="ISMO" component={ISMOScreen} options={{headerShown:false}}/>
      <Drawer.Screen name="PCDSI" component={PCDSIScreen} options={{headerShown:false}}/>
      <Drawer.Screen name="ISG" component={ISGScreen} options={{headerShown:false}}/>
      <Drawer.Screen name="IICNINA" component={IICNINAScreen} options={{headerShown:false}}/>
      <Drawer.Screen name="IES" component={IESScreen} options={{headerShown:false}}/>
      <Drawer.Screen name="ICS" component={ICSScreen} options={{headerShown:false}}/>
      <Drawer.Screen name="GalleriesScreen" component={GalleriesScreen} options={{headerShown:false}}/>
      <Drawer.Screen name="FullArticleScreen" component={FullArticleScreen} options={{headerShown:false}}/>
      <Drawer.Screen name="SignInScreenlogout" component={SignInScreen} options={{headerShown:false}}/>
      <Drawer.Screen name="CatherineReilly" component={CatherineReillyScreen} options={{headerShown:false}}/>
      <Drawer.Screen name="DavidLynch" component={DavidLynchScreen} options={{headerShown:false}}/>
      <Drawer.Screen name="PaulMulholland" component={PaulMulhollandScreen} options={{headerShown:false}}/>
      <Drawer.Screen name="PriscillaLynch" component={PriscillaLynchScreen} options={{headerShown:false}}/>
      <Drawer.Screen name="SponsoredScreen" component={SponsoredScreen} options={{headerShown:false}}/>
      <Drawer.Screen name="AdvertiseScreen" component={AdvertiseScreen} options={{headerShown:false}}/>
      <Drawer.Screen name="LogOut" component={LogOut} options={{headerShown:false}}/>
    </Drawer.Navigator>
  );
}

const Stack = createStackNavigator();

export default function App() {

  useEffect(() => {

    const backAction = () => {
      return true;
    };
    const backHandler = BackHandler.addEventListener('hardwareBackPress', backAction);

    return () => backHandler.remove();
  }, []);
  return (
    <CounterContextProvider>
        <NavigationContainer>
        <StatusBar barStyle='dark-content' backgroundColor='#1a1a1a'/>
      <Stack.Navigator
      initialRouteName="FirstRunScreen"
        screenOptions={{
          headerMode: 'float',
          animationTypeForReplace: 'pop',
          animationEnabled:
          Platform.OS == 'android' ? false : false,
          headerTintColor: '#000',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
          header: (props) => {
            return <CustomHeader {...props} />;
          },
        }}>
        <Stack.Screen name="MainDrawer" component={MainDrawerNavigation} />
        <Stack.Screen name="FirstRunScreen" component={FirstRunScreen} options={{headerShown:false}}/>
        <Stack.Screen name="SignInScreen" component={SignInScreen} options={{headerShown:false}}/>
        <Stack.Screen name="SignUpScreen" component={SignUpScreen} options={{headerShown:false}}/>
      </Stack.Navigator>
    </NavigationContainer>
    </CounterContextProvider>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
