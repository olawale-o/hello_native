import React, {useEffect, useCallback, useRef} from 'react';
import {StyleSheet, Platform, View, Dimensions} from 'react-native';
import MapView, {Marker} from 'react-native-maps';
import Geolocation from 'react-native-geolocation-service';
import {request, PERMISSIONS} from 'react-native-permissions';
import coordinates from '../../constants/coordinates';

const MapScreen = () => {
  const _map = useRef(null);
  const [region, setRegion] = React.useState({
    initialRegion: {
      latitude: 6.5963,
      longitude: 3.346,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.015,
    },
  });
  const [error, setError] = React.useState(null);

  const errorCallBack = useCallback(() => {
    setError(error.message);
  }, [error]);

  const successCallBack = useCallback(
    position => {
      const {latitude, longitude} = position.coords;
      setRegion(prevRegion => {
        return {
          initialRegion: {
            latitude,
            longitude,
            latitudeDelta: prevRegion.initialRegion.latitudeDelta,
            longitudeDelta: prevRegion.initialRegion.longitudeDelta,
          },
        };
      });
    },
    [setRegion],
  );

  const getCurrentLocation = useCallback(() => {
    Geolocation.getCurrentPosition(successCallBack, errorCallBack, {
      enableHighAccuracy: true,
      timeout: 20000,
      maximumAge: 1000,
    });
    _map.current.animateToRegion(
      {...region.initialRegion, latitude: 6.625428, longitude: 3.2872138},
      5000,
    );
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
    console.log('MapScreen useEffect');
    (async () => {
      requestLocationPermission();
    })();
  }, [requestLocationPermission]);

  return (
    <View style={styles.container}>
      <MapView
        style={styles.mapStyle}
        initialRegion={region.initialRegion}
        showsUserLocation={true}
        showsMyLocationButton={true}
        showsPointsOfInterest={false}
        zoomControlEnabled={true}
        ref={_map}
        onMapReady={() => console.log('Map is ready!')}
        onRegionChange={() => console.log('change region')}
        onRegionChangeComplete={() => console.log('region changed')}>
        {coordinates.map(coordinate => (
          <Marker
            key={`key_${coordinate.latLng.latitude}_${coordinate.latLng.longitude}`}
            coordinate={coordinate.latLng}
            title={coordinate.name}
          />
        ))}
      </MapView>
      <View style={styles.mapOverlay} />
    </View>
  );
};

export default MapScreen;

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
  },
  mapStyle: {
    ...StyleSheet.absoluteFillObject,
  },
  mapOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    height: Dimensions.get('window').height,
    width: 25,
    opacity: 0.0,
  },
});
