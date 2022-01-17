import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import MapScreen from './MapScreen';
import AddressSearchScreen from './AddressSearchScreen';

const MapStack = createStackNavigator();

const Map = () => (
  <MapStack.Navigator initialRouteName="MapScreen">
    <MapStack.Screen
      name="MapScreen"
      component={MapScreen}
      options={{headerShown: false}}
    />
    <MapStack.Screen
      name='AddressSearchScreen'
      component={AddressSearchScreen}
      options={{headerShown: false}}
    />
  </MapStack.Navigator>
);

export default Map;