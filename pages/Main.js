/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {useSelector, useDispatch} from 'react-redux';
import {auth, onAuthStateChanged} from '../firebase';
import authSelector from '../redux/auth/authSelector';
import Artists from './Artist/Artists';
import Settings from './Setting/Settings';
import Login from './Auth/Login';
import SplashScreen from './SplashScreen';
import {authLoading, authToken} from '../redux/auth/action_creators';
const AuthDrawer = createDrawerNavigator();
const Stack = createStackNavigator();

const Main = () => {
  const dispatch = useDispatch();
  const {userToken, loading} = useSelector(authSelector);
  useEffect(() => {
    dispatch(authLoading());
    onAuthStateChanged(auth, user => {
      if (user != null) {
        dispatch(authToken(user.stsTokenManager.accessToken));
      }
    });
  }, [dispatch]);

  if (loading) {
    console.log('loading');
    return <SplashScreen />;
  }
  return (
    <NavigationContainer>
      {userToken === null ? (
        <Stack.Navigator>
          <Stack.Screen name="Login" component={Login} />
        </Stack.Navigator>
      ) : (
        <AuthDrawer.Navigator>
          <AuthDrawer.Screen name="Settings" component={Settings} />
          <AuthDrawer.Screen name="Artists" component={Artists} />
        </AuthDrawer.Navigator>
      )}
    </NavigationContainer>
  );
};

export default Main;
