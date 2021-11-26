/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
// import Display from './components/Display';
import TestComponent from './components/TestComponent';
import ArtistListPage from './components/ArtistListPage';
import ArtistDetailPage from './components/ArtistDetailPage';
import SettingsPage from './components/SettingsPage';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HeaderTitle from './components/Header';

const Stack = createStackNavigator();

const App = () => {

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name ='Settings' component = {SettingsPage} />
        <Stack.Screen name ='Artists' component = {ArtistListPage} />
        <Stack.Screen name ='Artist' component = {ArtistDetailPage} 
          options={
            ({ route }) =>
            ({ title: route.params.name, 
              headerTitle: () => <HeaderTitle title={ route.params.name } />
            })          
        } />
        
      </Stack.Navigator>
    </NavigationContainer>
  );
};



export default App;
