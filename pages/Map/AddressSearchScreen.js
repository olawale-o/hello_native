import React from 'react';
import { View, StyleSheet, Dimensions, Pressable} from 'react-native';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import {GOOGLE_MAP_KEY} from '@env';
import IonIcons from 'react-native-vector-icons/Ionicons';
import { AddressContext } from '../../context/addressContext';
navigator.geolocation = require('react-native-geolocation-service');
const { width } = Dimensions.get('window');


const LeftButton = ({navigation}) => {
  return (
    <Pressable onPress={() => navigation.goBack()}>
      <IonIcons name="ios-arrow-back" size={30} color="black" />
    </Pressable>
  );
}

const AddressSearchScreen = ({navigation})  => {
  const { updateAddress } = React.useContext(AddressContext);
  return (
    <View style={{
      flex: 1,
    }
    }>
      <GooglePlacesAutocomplete
        placeholder='Search'
        fetchDetails={true}
        autoFocus={true}
        GoooglePlacesSearchQuery={{
          rankBy: 'distance',
        }}
        onFail={error => console.error(error)}
        onPress={(data, details = null) => {
          updateAddress(data.description);
          navigation.goBack();
        }}
        preProcess={(data) => data.toLowerCase()}
        renderLeftButton={() => <LeftButton navigation={navigation} />}
        query={{
          key: GOOGLE_MAP_KEY,
          language: 'en',
          components: 'country:ng',
          location: '6.5963, 3.346',
          radius: '30000',
        }}
        currentLocation={true}
        styles={{
          textInput: {
            height: 38,
            color: '#5d5d5d',
            fontSize: 16,
            width: width - 40,
            marginRight: 20,
          },
          container: {flex: 0, position: 'absolute', width: '100%', zIndex: 10},
          listView: { backgroundColor: '#fff' },
        }}
      />
    </View>
  );
};

export default AddressSearchScreen;

const styles = StyleSheet.create({});