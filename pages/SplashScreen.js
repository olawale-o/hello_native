import React from 'react';
import {StyleSheet, View, Text, Image} from 'react-native';

const SplashScreen = () => (
  <View style={styles.container}>
    <View style={styles.content}>
      <Image source={require('../assets/images/logo.png')} style={styles.logo} />
      <Text style={styles.text}>Native</Text>
    </View>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-end',
    paddingBottom: 50,
    height: '100%',
  },

  content: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },

  logo: {
    height: 50,
    width: 50,
    resizeMode: 'contain',
  },

  text: {
    color: '#002341',
    fontSize: 32,
  },
});

export default SplashScreen;
