import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import MapScreen from '../Map/MapScreen';
import Artists from '../Artist/Artists';
import Settings from '../Setting/Settings';

const Drawer = createDrawerNavigator();

const DashBoard = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen
        name="Artists"
        component={Artists}
        options={{headerShown: false}}
      />
      <Drawer.Screen
        name="Map"
        component={MapScreen}
        options={{headerShown: false}}
      />
      <Drawer.Screen
        name="Settings"
        component={Settings}
        options={{ headerShown: false }}/>
    </Drawer.Navigator>
  );
};

export default DashBoard;
