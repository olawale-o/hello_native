import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import MapScreen from './MapScreen';
import AddressSearchScreen from './AddressSearchScreen';
import {AddressContext} from '../../context/addressContext';

const MapStack = createStackNavigator();


const Map = () => {
  const [address, setAddress] = React.useState('');
  const [location, setLocation] = React.useState({
    latitdude: 0.0,
    longitude: 0.0,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.015,
  });
  return (
    <AddressContext.Provider value={
      {
        address,
        location,
        updateAddress: (newAddress) => {
          setAddress(newAddress);
        },
        updateLocation: (newLocation) => {
          setLocation(newLocation);
        }
      }
    }>
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
    </AddressContext.Provider>
  );
};

export default Map;