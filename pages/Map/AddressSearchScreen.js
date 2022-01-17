import React from 'react';
import { View, StyleSheet } from 'react-native';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import {GOOGLE_MAP_KEY} from '@env';

const AddressSearchScreen = ()  => {
  return (
    <View style={{
      flex: 1,
    }
    }>
      <GooglePlacesAutocomplete
        placeholder='Search'
        fetchDetails={true}
        GoooglePlacesSearchQuery={{
          rankBy: 'distance',
        }}
        onFail={error => console.error(error)}
        onPress={(data, details = null) => {
          // 'details' is provided when fetchDetails = true
          console.log(data, details);
        }}
        query={{
          key: GOOGLE_MAP_KEY,
          language: 'en',
          components: 'country:ng',
          location: '6.5963, 3.346',
          radius: '30000',
        }}
        styles={{
          textInput: {
            height: 38,
            color: '#5d5d5d',
            fontSize: 16,
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