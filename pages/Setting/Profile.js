import React from 'react';
import {View, StyleSheet, Text} from 'react-native';

const Profile = () => {
  return (
    <View style={styles.container}>
      <Text>Profile</Text>
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

  button: {
    position: 'absolute',
    bottom: 30,
    right: 20,
    backgroundColor: '#008AFF',
    width: 50,
    height: 50,
    borderRadius: 25,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  }
});
