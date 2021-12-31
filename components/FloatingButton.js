import React from 'react';
import { Pressable } from 'react-native';

const FloatingButton = ({openSheet, style, children}) => {
  return (
    <Pressable
      style={style}
      onPress={openSheet}
    >
      {children}
    </Pressable>
  );
};

export default FloatingButton;
