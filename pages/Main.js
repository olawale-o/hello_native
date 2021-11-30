/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

 import React from 'react';
 import { NavigationContainer } from '@react-navigation/native';
 import { createStackNavigator } from '@react-navigation/stack';
 import { createDrawerNavigator } from '@react-navigation/drawer';
 import { useSelector } from 'react-redux';
 import authSelector from '../redux/auth/authSelector';
 import Artists from './Artist/Artists';
 import Settings from './Setting/Settings';
 import Login from './Auth/Login';
 const AuthDrawer = createDrawerNavigator();
 const Stack = createStackNavigator();

const Main = () => {
  const { userToken } = useSelector(authSelector);
  return (
    <NavigationContainer>
      { userToken === null ? (
        <Stack.Navigator>
          <Stack.Screen name="Login" component={Login} />
        </Stack.Navigator>
      ) : (
        <AuthDrawer.Navigator>
          <AuthDrawer.Screen name='Settings' component={Settings} />
          <AuthDrawer.Screen name='Artists' component={Artists} />
        </AuthDrawer.Navigator>
      ) }
    </NavigationContainer>
  );
};
 
export default Main;
 