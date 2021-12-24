import React, {useEffect, useCallback} from 'react';
import {StyleSheet, Platform} from 'react-native';
import MapView from 'react-native-maps';
import Geolocation from 'react-native-geolocation-service';
import {request, PERMISSIONS} from 'react-native-permissions';

const MapScreen = () => {
  const [region, setRegion] = React.useState({
    initialRegion: {
      latitude: 6.5963,
      longitude: 3.346,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.015,
    },
    error: null,
  });

  const errorCallBack = useCallback(
    error => {
      setRegion({...region, error: error.message});
    },
    [region],
  );

  const successCallBack = useCallback(
    position => {
      const {latitude, longitude} = position.coords;
      setRegion({
        ...region,
        initialRegion: {...region.initialRegion, latitude, longitude},
      });
    },
    [region],
  );

  const getCurrentLocation = useCallback(() => {
    Geolocation.getCurrentPosition(successCallBack, errorCallBack, {
      enableHighAccuracy: true,
      timeout: 20000,
      maximumAge: 1000,
    });
  }, [successCallBack, errorCallBack]);

  const requestLocationPermission = useCallback(async () => {
    if (Platform.OS === 'android') {
      const response = await request(PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION);
      if (response === 'granted') {
        getCurrentLocation();
      }
    }
  }, [getCurrentLocation]);

  useEffect(() => {
    (async () => {
      requestLocationPermission();
    })();
  }, [requestLocationPermission]);
  return (
    <MapView
      style={styles.mapStyle}
      initialRegion={region.initialRegion}
      showsUserLocation={true}
      showsMyLocationButton={true}
      showsPointsOfInterest={false}
      zoomControlEnabled={true}
    />
  );
};

export default MapScreen;

const styles = StyleSheet.create({
  mapStyle: {
    width: '100%',
    height: '100%',
  },
});
