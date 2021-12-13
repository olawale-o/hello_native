import React from 'react';
import {StyleSheet, View, Text} from 'react-native';

const SplashScreen = () => (
  <View style={styles.container}>
    <Text>Splash Page</Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'yellow',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default SplashScreen;
