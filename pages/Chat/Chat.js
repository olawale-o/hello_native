import React from 'react';
import  { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ChatList from './ChatList';
const ChatStack = createBottomTabNavigator();

const Chat = () => (
  <ChatStack.Navigator initialRouteName='ChatList'>
    <ChatStack.Screen name='ChatList' component={ChatList} options={{headerShown: false}} />
  </ChatStack.Navigator>
);

export default Chat;
