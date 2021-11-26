import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Profile from './Profile'; 
import SettingList from './SettingList';

const SettingsStack = createStackNavigator();

const Settings = () => {
  const optionsStyle = {
    headerShown: false,
  };
  return (
    <SettingsStack.Navigator>
      <SettingsStack.Screen name="SettingList" component={SettingList} options={optionsStyle} />
      <SettingsStack.Screen name="Profile" component={Profile} />
    </SettingsStack.Navigator>
  ); 
};

export default Settings;
