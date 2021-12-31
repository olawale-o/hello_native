import React, {useEffect, useCallback, useRef} from 'react';
import {StyleSheet, Platform, View, Dimensions, Text, Switch} from 'react-native';
import MapView, {Marker, Polygon, Circle} from 'react-native-maps';
import Geolocation from 'react-native-geolocation-service';
import {request, PERMISSIONS} from 'react-native-permissions';
import coordinates from '../../constants/coordinates';
import CustomSlider from '../../components/CustomSlider';
import ActionBottomSheet from '../../components/ActionBottomSheet';

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
  const [radius, setRadius] = React.useState(500);

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

  const handleRadiusChange = (value) => {
    console.log(...value);
    setRadius(...value);
  };

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
        onRegionChangeComplete={() => console.log('region changed')}
        showsTraffic={true}
        loadingEnabled={true}
        >
        {coordinates.map(coordinate => (
          <Marker
            key={`key_${coordinate.latLng.latitude}_${coordinate.latLng.longitude}`}
            coordinate={coordinate.latLng}
            title={coordinate.name}
          />
        ))}
        <Polygon coordinates={[
          {...coordinates[0].latLng},
          {...coordinates[2].latLng},
          {...coordinates[3].latLng},
          {...coordinates[1].latLng}]}
          geodesic={true}
          fillColor='rgba(255,0,0,0.5)'
          strokeColor='#000'
          strokeWidth={5}
        />
        <Circle
          center={{ ...coordinates[3].latLng }}
          radius={radius}
          strokeWidth={5}
          fillColor='rgba(255,0,0,0.5)'
          zIndex={1}
        />
      </MapView>
      <View style={styles.mapOverlay} />
      <ActionBottomSheet>
        <View style={styles.sheetContent}>
          <View style={styles.fieldContainer}>
            <Text style={styles.label}>Radius:</Text>
            <CustomSlider radius={radius} valueChange={handleRadiusChange}/>
          </View>
          <View style={styles.fieldContainer}>
            <Text style={styles.label}>Show Location:</Text>
            <Switch value={true} onValueChange={() => {}} />
          </View>
          <View style={styles.fieldContainer}>
            <Text style={styles.label}>Show Traffic:</Text>
            <Switch value={true} onValueChange={() => {}} />
          </View>
        </View>
      </ActionBottomSheet>
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
  sheetContent: {
    flex: 1,
    width: Dimensions.get('window').width,
    paddingHorizontal: 20,
  },
  label: {
    fontSize: 16,
    marginRight: 10,
    fontWeight: 'bold',
  },
  fieldContainer: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 5,
  },
});
