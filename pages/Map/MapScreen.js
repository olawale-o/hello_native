import React from 'react';
import {StyleSheet, Platform, View, Dimensions, Text, TouchableOpacity} from 'react-native';
import MapView, {Marker, Polygon, Circle} from 'react-native-maps';
import Geolocation from 'react-native-geolocation-service';
import {request, PERMISSIONS} from 'react-native-permissions';
import coordinates from '../../constants/coordinates';
import ActionBottomSheet from '../../components/ActionBottomSheet';
import BottomSheetContent from '../../components/BottomSheetContent';
import {AddressContext} from '../../context/addressContext';
import FloatingButton from '../../components/FloatingButton';
import AntDesign from 'react-native-vector-icons/AntDesign';
import IonIcons from 'react-native-vector-icons/Ionicons';
const { width, height } = Dimensions.get('window');

const LATITUDE_DELTA = 0.0922;
const LONGITUDE_DELTA = 0.015;
const MapScreen = ({navigation}) => {
  const { address, location } = React.useContext(AddressContext);
  const _map = React.useRef(null);
  const bottomSheetRef = React.useRef(null);
  // const addressMemo = React.useMemo(() => address, [address]);
  const [isVisible, setIsVisible] = React.useState(false);
  const snapPoints = React.useMemo(() => [1, '25%'], []);

  // callbacks
  const handleSheetChanges = React.useCallback((index) => {
    console.log('handleSheetChanges', index);
  }, []);

  const handleSnapOpen = React.useCallback((index) => {
    setIsVisible(true);
    console.log('bottomSheetRef', bottomSheetRef.current);
    bottomSheetRef.current?.snapToIndex(index);
  });

  const handleSnapClose = React.useCallback(() => {
    bottomSheetRef.current?.close();
    setIsVisible(false);
  } , []);

  const [region, setRegion] = React.useState({
    initialRegion: {
      latitude: 6.5963,
      longitude: 3.346,
      latitudeDelta: LATITUDE_DELTA,
      longitudeDelta: LONGITUDE_DELTA,
    },
  });
  const [error, setError] = React.useState(null);
  const [radius, setRadius] = React.useState(500);
  const [enableLocation, setEnableLocation] = React.useState(false);
  const [enableTraffic, setEnableTraffic] = React.useState(false);
  const errorCallBack = React.useCallback(() => {
    setError(error.message);
  }, [error]);

  const successCallBack = React.useCallback(
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

  const getCurrentLocation = React.useCallback(() => {
    Geolocation.getCurrentPosition(successCallBack, errorCallBack, {
      enableHighAccuracy: true,
      timeout: 20000,
      maximumAge: 1000,
    });
  }, [successCallBack, errorCallBack]);

  const requestLocationPermission = React.useCallback(async () => {
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

  React.useEffect(() => {
    (async () => {
      requestLocationPermission();
    })();
  }, [requestLocationPermission]);

  React.useEffect(() => {
    _map.current.animateToRegion(location, 5000,)
  }, [address]);

  return (
    <View style={styles.container}>
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
        <Marker coordinate={{
          latitude: location.latitude,
          longitude: location.longitude,
        }} />
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
      <View style={styles.searchBar}>
        <TouchableOpacity onPress={() => navigation.toggleDrawer()}>
          <IonIcons name="ios-menu-outline" size={30} color="#000" />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate('AddressSearchScreen')}
          style={styles.addressButton}
          activeOpacity={1}
        >
          <Text style={styles.addressText}>{address}</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity
        onPress={() => handleSnapClose()}
        style={[isVisible ? styles.container : null]}
      />

      <FloatingButton
        openSheet={() => handleSnapOpen(1)}
        style={styles.button}
      >
        <AntDesign name="setting" size={24} color="#fff" />
      </FloatingButton>
      <ActionBottomSheet
        bottomSheetRef={bottomSheetRef}
        handleSnapOpen={handleSnapOpen}
        snapPoints={snapPoints}
        handleSheetChanges={handleSheetChanges}
        close={() => setIsVisible(false)}
        isVisible={isVisible}
      >
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
  searchBar: {
    position: 'absolute',
    top: 10,
    left: 0,
    width: width - 20,
    marginHorizontal: 10,
    backgroundColor: '#fff',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  addressButton: {
    flex: 1,
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
  container: {
    ...StyleSheet.absoluteFillObject,
    flex: 1,
    position: 'absolute',
    backgroundColor: 'rgba(0,0,0,0.5)',
    top: 0,
    left: 0,
  },
  button: {
    position: 'absolute',
    bottom: 30,
    right: 20,
    backgroundColor: '#0C0C34',
    width: 50,
    height: 50,
    borderRadius: 25,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
