import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { DrawerContent } from '../components/DrawerContent';

import HomeScreen from '../screens/HomeScreen';
import NewsScreen from '../screens/NewsScreen';
import CommentsScreen from '../screens/CommentsScreen';
import LifeScreen from '../screens/LifeScreen';
import ClinicalScreen from '../screens/ClinicalScreen';
import SocietiesScreen from '../screens/SocietiesScreen';
import GalleriesScreen from '../screens/GalleriesScreen';
import ClassifiedsScreen from '../screens/ClassifiedsScreen';
import SponsoredScreen from '../screens/SponsoredScreen';
import AdvertiseScreen from '../screens/AdvertiseScreen';
import CompetitionScreen from '../screens/CompetitionScreen';

const Drawer = createDrawerNavigator();
const DrawerNavigator = () => {
  return (
    <Drawer.Navigator screenOptions={{headerStyle:{ backgroundColor:'#000'}, headerTintColor:'#6e822b',headerTitleStyle:{fontWeight:'bold',color:'#6e822b'},headerTitleAlign:'center'}} drawerContent={props => <DrawerContent { ... props}/>}>
        <Drawer.Screen name='Home' component={HomeScreen}/>
        <Drawer.Screen name='News' component={NewsScreen}/>
        <Drawer.Screen name='Comments' component={CommentsScreen}/>
        <Drawer.Screen name='Life' component={LifeScreen}/>
        <Drawer.Screen name='Clinical' component={ClinicalScreen}/>
        <Drawer.Screen name='Societies' component={SocietiesScreen}/>
        <Drawer.Screen name='Galleries' component={GalleriesScreen}/>
        <Drawer.Screen name='Classifieds' component={ClassifiedsScreen}/>
        <Drawer.Screen name='Sponsored' component={SponsoredScreen}/>
        <Drawer.Screen name='Advertise' component={AdvertiseScreen}/>
        <Drawer.Screen name="Competition" component={CompetitionScreen} />
      </Drawer.Navigator>
  );
};
export default DrawerNavigator;