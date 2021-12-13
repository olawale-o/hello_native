import React from 'react';
import {Text, SafeAreaView, View, StyleSheet} from 'react-native';

const ArtistDetailPage = ({route}) => {
  const {name} = route.params;
  return (
    <SafeAreaView style={styleSheets.safeArea}>
      <View style={[styleSheets.container, styleSheets.artistList]}>
        <View>
          <Text style={{color: '#eee'}}>Artist: {name}</Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styleSheets = StyleSheet.create({
  safeArea: {
    backgroundColor: '#20232a',
    height: '100%',
  },

  container: {
    flex: 1,
    padding: 5,
  },

  center: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },

  artistList: {},

  SingleArtist: {
    flex: 1,
    flexDirection: 'row',
    padding: 20,
    alignItems: 'center',
  },

  img: {
    width: 50,
    height: 50,
    marginRight: 20,
    borderRadius: 50,
  },

  text: {
    color: '#eee',
    fontSize: 20,
  },

  smText: {
    fontSize: 18,
  },
});

export default ArtistDetailPage;
