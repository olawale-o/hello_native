import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Profile from './Profile';
import SettingList from './SettingList';
import Notifications from './Notification';

const SettingsStack = createStackNavigator();

const Settings = () => {
  const optionsStyle = {
    headerShown: false,
  };
  const notificationStyle = {
    headerTitleAlign: 'center',
    headerStyle: {
      backgroundColor: '#20232a',
      elevation: 0,
    },
    headerTintColor: '#fff',
    title: 'Notifications',
  }
  return (
    <SettingsStack.Navigator>
      <SettingsStack.Screen
        name="SettingList"
        component={SettingList}
        options={optionsStyle}
      />
      <SettingsStack.Screen
        name="Notifications"
        component={Notifications}
        options={notificationStyle}
      />
      <SettingsStack.Screen name="Profile" component={Profile} />
    </SettingsStack.Navigator>
  );
};

export default Settings;
