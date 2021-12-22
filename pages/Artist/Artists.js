import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import ArtistListPage from './ArtistListPage';
import ArtistDetailPage from './ArtistDetailPage';

const ArtistStack = createStackNavigator();
const optionsStyle = {
  headerShown: false,
};

const Artists = () => (
  <ArtistStack.Navigator initialRouteName="ArtistList">
    <ArtistStack.Screen
      name="ArtistList"
      component={ArtistListPage}
      options={optionsStyle}
    />
    <ArtistStack.Screen name="Artist" component={ArtistDetailPage} />
  </ArtistStack.Navigator>
);

export default Artists;
