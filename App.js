/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import Artists from './pages/Artist/Artists';
import Settings from './pages/Setting/Settings';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
// import HeaderTitle from './components/Header';
const AuthDrawer = createDrawerNavigator();

const App = () => {

  return (
    <NavigationContainer>
      <AuthDrawer.Navigator>
        <AuthDrawer.Screen name='Settings' component={Settings} />
        <AuthDrawer.Screen name='Artists' component={Artists} />
      </AuthDrawer.Navigator>
    </NavigationContainer>
  );
};



export default App;
