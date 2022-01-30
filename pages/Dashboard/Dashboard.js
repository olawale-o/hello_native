import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Map from '../Map/Map';
import Artists from '../Artist/Artists';
import Settings from '../Setting/Settings';
import Chat from '../Chat';

const Drawer = createDrawerNavigator();

const DashBoard = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name='Chat' component={Chat} options={{headerShown: false}} />
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
      <Drawer.Screen
        name="Settings"
        component={Settings}
        options={{ headerShown: false }}/>
    </Drawer.Navigator>
  );
};

export default DashBoard;
