import React from 'react';
import {StyleSheet} from 'react-native';
import MapView from 'react-native-maps';

const MapScreen = () => {
  return (
    <MapView
      style={styles.mapStyle}
      initialRegion={{
        latitude: 37.78825,
        longitude: -122.4324,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      }}
    />
  );
};

export default MapScreen;

const styles = StyleSheet.create({
  mapStyle: {
    width: '100%',
    height: '100%',
  }
});