import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import FirstRunScreen from '../screens/FirstRunScreen';
import SignInScreen from '../screens/SignInScreen';
import DrawerNavigator from './DrawerNavigator';
import SignUpScreen from '../screens/SignUpScreen';

const Stack = createStackNavigator();
const StackNavigator = () => {
    return (
      <Stack.Navigator>
        
        <Stack.Screen name="FirstRunScreen" component={FirstRunScreen} options={{headerShown:false}}/>
        <Stack.Screen name="SignInScreen" component={SignInScreen} options={{headerShown:false}}/>
        <Stack.Screen name="SignUpScreen" component={SignUpScreen} options={{headerShown:false}}/>
        <Stack.Screen
          name="Start"
          component={DrawerNavigator}
          options={{
            title: 'Main',
            headerShown:false,
            headerStyle: {
              backgroundColor: '#fff',
            },
          }}
        />
      </Stack.Navigator>
    );
  };
  export default StackNavigator;