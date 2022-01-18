import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import MapScreen from './MapScreen';
import AddressSearchScreen from './AddressSearchScreen';
import {AddressContext} from '../../context/addressContext';

const MapStack = createStackNavigator();


const Map = () => {
  const [address, setAddress] = React.useState('old address');
  return (
    <AddressContext.Provider value={
      {
        address,
        updateAddress: (newAddress) => {
          console.log(newAddress);
          setAddress(newAddress);
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