import { StatusBar } from 'expo-status-bar';
import 'react-native-gesture-handler';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import {store, persistor} from './state/store';
import React, { useEffect } from 'react';
import {StyleSheet, BackHandler, Alert} from 'react-native';
import {NavigationContainer,} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createDrawerNavigator} from '@react-navigation/drawer';
import FirstRunScreen from './screens/FirstRunScreen';
import SignInScreen from './screens/SignInScreen';
import SignUpScreen from './screens/SignUpScreen';
import {drawerItemsMain} from './DrawerItemsMain';
import CustomDrawerContent from './CustomDrawerContent.js';
import CustomHeader from './CustomHeader';
import BreakingNews from './screens/news/BreakingNews';
import LatestNews from './screens/news/LatestNews';
import NewsFeatures from './screens/news/NewsFeatures';
import Investigations from './screens/news/Investigations';
import Interviews from './screens/news/Interviews';
import PhotoNews from './screens/news/PhotoNews';
import Conference from './screens/news/Conference';
import EditorialScreen from './screens/comments/EditorialScreen';
import DrChristineScreen from './screens/comments/DrChristineScreen';
import DrMichaelScreen from './screens/comments/DrMichaelScreen';
import DrPatScreen from './screens/comments/DrPatScreen';
import GeorgeWinterScreen from './screens/comments/GeorgeWinterScreen';
import DrPaddyScreen from './screens/comments/DrPaddyScreen';
import DrLuciaScreen from './screens/comments/DrLuciaScreen';
import DrNeasaScreen from './screens/comments/DrNeasaScreen';
import ProfBrendanScreen from './screens/comments/ProfBrendanScreen';
import ProfSeamusScreen from './screens/comments/ProfSeamusScreen';
import MedicoLegal from './screens/comments/MedicoLegal';
import BookReview from './screens/life/BookReview';
import FinanceScreen from './screens/life/FinanceScreen';
import TheGanderScreen from './screens/life/TheGanderScreen';
import TheDorsalViewScreen from './screens/life/TheDorsalViewScreen';
import SportScreen from './screens/life/SportScreen';
import Cartoon from './screens/life/Cartoon';
import MotoringScreen from './screens/life/MotoringScreen';
import SportsQuizScreen from './screens/life/SportsQuizScreen';
import CaseStudiesScreen from './screens/clinical/CaseStudiesScreen';
import FeatureScreen from './screens/clinical/FeatureScreen';
import ClinicalNews from './screens/clinical/ClinicalNews';
import ResearchScreen from './screens/clinical/ResearchScreen';
import ISRScreen from './screens/societies/ISRScreen';
import CPIScreen from './screens/societies/CPIScreen';
import ITSScreen from './screens/societies/ITSScreen';
import ISMOScreen from './screens/societies/ISMOScreen';
import PCDSIScreen from './screens/societies/PCDSIScreen';
import ISGScreen from './screens/societies/ISGScreen';
import IICNINAScreen from './screens/societies/IICNINAScreen';
import IESScreen from './screens/societies/IESScreen';
import ICSScreen from './screens/societies/ICSScreen';
import GalleriesScreen from './screens/galleries/GalleriesScreen';
import ConsultingRoomsScreen from './screens/classifieds/ConsultingRoomsScreen';
import DermatologyScreen from './screens/classifieds/DermatologyScreen';
import DoctorWantedScreen from './screens/classifieds/DoctorWantedScreen';
import DoctorAvailableScreen from './screens/classifieds/DoctorAvailableScreen';
import FlatsToLetScreen from './screens/classifieds/FlatsToLetScreen';
import GolfAndSportsScreen from './screens/classifieds/GolfAndSportsScreen';
import HolidayResortsScreen from './screens/classifieds/HolidayResortsScreen';
import InternationalJobsScreen from './screens/classifieds/InternationalJobsScreen';
import LanguagesScreen from './screens/classifieds/LanguagesScreen';
import LocumAvailableScreen from './screens/classifieds/LocumAvailableScreen';
import LocumRequiredScreen from './screens/classifieds/LocumRequiredScreen';
import MedicalEquipmentScreen from './screens/classifieds/MedicalEquipmentScreen';
import MedicalPracticeScreen from './screens/classifieds/MedicalPracticeScreen';
import MedicalSecretaryScreen from './screens/classifieds/MedicalSecretaryScreen';
import MiscellaneousScreen from './screens/classifieds/MiscellaneousScreen';
import PartnershipAvailable from './screens/classifieds/PartnershipAvailableScreen';
import PracticeNurseScreen from './screens/classifieds/PracticeNurseScreen';
import PropertyScreen from './screens/classifieds/PropertyScreen';
import TrainingScreen from './screens/classifieds/TrainingScreen';
import VolunterringScreen from './screens/classifieds/VolunterringScreen';
import EventsScreen from './screens/classifieds/EventsScreen';
import HomeScreen from './screens/HomeScreen';
import FullArticleScreen from './screens/FullArticleScreen';
import CatherineReillyScreen from './screens/newsTeam/CatherineReillyScreen';
import DavidLynchScreen from './screens/newsTeam/DavidLynchScreen';
import PaulMulhollandScreen from './screens/newsTeam/PaulMulhollandScreen';
import PriscillaLynchScreen from './screens/newsTeam/PriscillaLynchScreen';
import SponsoredScreen from './screens/sponsored/SponsoredScreen';
import AdvertiseScreen from './screens/advertise/AdvertiseScreen';
import DrGabrielleScreen from './screens/comments/DrGabrielleScreen';
import FoodAndDrink from './screens/life/FoodAndDrink';
import IOSScreen from './screens/societies/IOSScreen';
import ECopy from './screens/life/ECopy';
const Drawer = createDrawerNavigator();

function MainDrawerNavigation() {
  
  return (
    <Drawer.Navigator
    screenOptions={{
      drawerStyle: {
        backgroundColor: '#c6cbef',
        width: '100%',
      },
      
    }}
      initialRouteName="FirstRunScreen"
      drawerContent={(props) => (
        <CustomDrawerContent drawerItems={drawerItemsMain} {...props} />
      )}><Drawer.Screen name="ECopy" component={ECopy} options={{headerShown:false}}/>
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
      <Drawer.Screen name="ConsultingRooms" component={ConsultingRoomsScreen} options={{headerShown:false}}/>
      <Drawer.Screen name="Dermatology" component={DermatologyScreen} options={{headerShown:false}}/>
      <Drawer.Screen name="DoctorsWanted" component={DoctorWantedScreen} options={{headerShown:false}}/>
      <Drawer.Screen name="DoctorAvailable" component={DoctorAvailableScreen} options={{headerShown:false}}/>
      <Drawer.Screen name="FlatsToLet" component={FlatsToLetScreen} options={{headerShown:false}}/>
      <Drawer.Screen name="GolfAndSports" component={GolfAndSportsScreen} options={{headerShown:false}}/>
      <Drawer.Screen name="HolidayResorts" component={HolidayResortsScreen} options={{headerShown:false}}/>
      <Drawer.Screen name="InternationalJobs" component={InternationalJobsScreen} options={{headerShown:false}}/>
      <Drawer.Screen name="Languages" component={LanguagesScreen} options={{headerShown:false}}/>
      <Drawer.Screen name="LocumAvailable" component={LocumAvailableScreen} options={{headerShown:false}}/>
      <Drawer.Screen name="LocumRequired" component={LocumRequiredScreen} options={{headerShown:false}}/>
      <Drawer.Screen name="MedicalEquipment" component={MedicalEquipmentScreen} options={{headerShown:false}}/>
      <Drawer.Screen name="MedicalPractice" component={MedicalPracticeScreen} options={{headerShown:false}}/>
      <Drawer.Screen name="MedicalSecretary" component={MedicalSecretaryScreen} options={{headerShown:false}}/>
      <Drawer.Screen name="Miscellaneous" component={MiscellaneousScreen} options={{headerShown:false}}/>
      <Drawer.Screen name="PartnershipAvailable" component={PartnershipAvailable} options={{headerShown:false}}/>
      <Drawer.Screen name="PracticeNurse" component={PracticeNurseScreen} options={{headerShown:false}}/>
      <Drawer.Screen name="Property" component={PropertyScreen} options={{headerShown:false}}/>
      <Drawer.Screen name="Training" component={TrainingScreen} options={{headerShown:false}}/>
      <Drawer.Screen name="Volunterring" component={VolunterringScreen} options={{headerShown:false}}/>
      <Drawer.Screen name="Events" component={EventsScreen} options={{headerShown:false}}/>
      <Drawer.Screen name="FullArticleScreen" component={FullArticleScreen} options={{headerShown:false}}/>
      <Drawer.Screen name="SignInScreenlogout" component={SignInScreen} options={{headerShown:false}}/>
      <Drawer.Screen name="CatherineReilly" component={CatherineReillyScreen} options={{headerShown:false}}/>
      <Drawer.Screen name="DavidLynch" component={DavidLynchScreen} options={{headerShown:false}}/>
      <Drawer.Screen name="PaulMulholland" component={PaulMulhollandScreen} options={{headerShown:false}}/>
      <Drawer.Screen name="PriscillaLynch" component={PriscillaLynchScreen} options={{headerShown:false}}/>
      <Drawer.Screen name="SponsoredScreen" component={SponsoredScreen} options={{headerShown:false}}/>
      <Drawer.Screen name="AdvertiseScreen" component={AdvertiseScreen} options={{headerShown:false}}/>
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
    <Provider store={store}>
        <PersistGate persistor={persistor} loading={null}>
        <NavigationContainer>
      <Stack.Navigator
      initialRouteName="FirstRunScreen"
        screenOptions={{
          headerMode: 'float',
          headerTintColor: '#404554',
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
        </PersistGate>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
