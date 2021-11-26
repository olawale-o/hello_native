import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Profile from './Profile'; 
import Notifications from './Notifications'; 
import ArtistListPage from './ArtistListPage'; 

const Drawer =  createDrawerNavigator();

const Settings  = () => (
  <Drawer.Navigator initialRouteName="Profile">
    <Drawer.Screen name="Profile" component={Profile} />
    <Drawer.Screen name="Notifications" component={Notifications} />
    <Drawer.Screen name="Artists" component={ArtistListPage} />
  </Drawer.Navigator>   
);

export default Settings;
