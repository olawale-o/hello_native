/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

 import React from 'react';
 import {NavigationContainer} from '@react-navigation/native';
 import {createStackNavigator} from '@react-navigation/stack';
 import Settings from './Setting/Settings';
 import Auth from './Auth/Auth';
 import SplashScreen from './SplashScreen';
 import DashBoard from './Dashboard/Dashboard';
 const Stack = createStackNavigator();
 
 const Main = () => {
   return (
     <NavigationContainer>
       <Stack.Navigator>
         <Stack.Screen
           name="Splash"
           component={SplashScreen}
           options={{headerShown: false}}
         />
         <Stack.Screen
           name="Auth"
           component={Auth}
           options={{headerShown: false}}
         />
         <Stack.Screen
           name="Settings"
           component={Settings}
           options={{headerShown: false}}
         />
         <Stack.Screen
           name="Dashboard"
           component={DashBoard}
           options={{headerShown: false}}
         />
       </Stack.Navigator>
     </NavigationContainer>
   );
 };
 
 export default Main;
 
 