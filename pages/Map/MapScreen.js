import React, {useEffect, useCallback, useRef} from 'react';
import {StyleSheet, Platform, View, Dimensions, Text, TouchableOpacity} from 'react-native';
import MapView, {Marker, Polygon, Circle} from 'react-native-maps';
import Geolocation from 'react-native-geolocation-service';
import {request, PERMISSIONS} from 'react-native-permissions';
import coordinates from '../../constants/coordinates';
import ActionBottomSheet from '../../components/ActionBottomSheet';
import BottomSheetContent from '../../components/BottomSheetContent';
import {AddressContext} from '../../context/addressContext';
const { width, height } = Dimensions.get('window');

const MapScreen = ({navigation}) => {
  const { address } = React.useContext(AddressContext);
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
  const [enableLocation, setEnableLocation] = React.useState(false);
  const [enableTraffic, setEnableTraffic] = React.useState(false);
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
      <TouchableOpacity
        onPress={() => navigation.navigate('AddressSearchScreen') }
        style={styles.addressButton}
        activeOpacity={1}
      >
        <Text style={styles.addressText}>{address}</Text>
      </TouchableOpacity>
      <MapView
        style={styles.mapStyle}
        initialRegion={region.initialRegion}
        showsUserLocation={enableLocation}
        showsMyLocationButton={true}
        showsPointsOfInterest={false}
        zoomControlEnabled={true}
        ref={_map}
        onMapReady={() => console.log('Map is ready!')}
        onRegionChange={() => console.log('change region')}
        onRegionChangeComplete={() => console.log('region changed')}
        showsTraffic={enableTraffic}
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
        <BottomSheetContent
          radiusChange={handleRadiusChange}
          radius={radius}
          enableTraffic={enableTraffic}
          trafficChange={() => setEnableTraffic(prevState => !prevState)}
          enableLocation={enableLocation}
          locationChange={() => setEnableLocation(prevState => !prevState)}
        />
      </ActionBottomSheet>
    </View>
  );
};

export default MapScreen;

const styles = StyleSheet.create({
  addressButton: {
    position: 'absolute',
    top: 10,
    left: 0,
    width: width - 20,
    marginHorizontal: 10,
    backgroundColor: '#fff',
    zIndex: 10,
    padding: 10,
  },
  addressText: {
    color: '#000',
    fontSize: 16,
  },
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
    height: height,
    width: 25,
    opacity: 0.0,
  },
});
