import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Map from '../Map/Map';
import Artists from '../Artist/Artists';

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
        component={Map}
        options={{headerShown: false}}
      />
    </Drawer.Navigator>
  );
};

export default DashBoard;
