import React from 'react';
import {View, Text, StyleSheet, Pressable} from 'react-native';
import {navigate} from './helper';

const Auth = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View style={styles.buttonsContainer}>
        <Pressable
          style={styles.button}
          onPress={() => navigate(navigation, 'Login')}>
          <Text style={styles.buttonText}>Log in</Text>
        </Pressable>
        <Pressable
          style={styles.button}
          onPress={() => navigate(navigation, 'Signup')}>
          <Text style={styles.buttonText}>Sign up</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default Auth;

const styles = StyleSheet.create({
  container: {
    height: '100%',
    backgroundColor: '#fff',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 50,
  },

  buttonsContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    height: 100,
    width: '100%',
  },

  button: {
    backgroundColor: '#008AFF',
    paddingVertical: 10,
    borderRadius: 15,
    width: '100%',
  },

  buttonText: {
    color: '#fff',
    textAlign: 'center',
  },
});
