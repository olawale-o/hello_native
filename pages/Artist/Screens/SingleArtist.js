import React from 'react';
import {View, Image, Text, Pressable, StyleSheet} from 'react-native';

const SingleArtist = ({artist, navigation}) => {
  const imgUri = `https://image.tmdb.org/t/p/w500${artist.profile_path}`;
  return (
    <View style={[styleSheets.container, styleSheets.artistList]}>
      <View style={styleSheets.SingleArtist}>
        <Image style={styleSheets.img} source={{uri: imgUri}} />
        <Pressable
          onPress={() => navigation.navigate('Artist', {name: artist.name, id: artist.id})}>
          <View>
            <Text style={styleSheets.text}>{artist.name}</Text>
            <Text style={[styleSheets.text, styleSheets.smText]}>
              {artist.popularity}
            </Text>
          </View>
        </Pressable>
      </View>
    </View>
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
    fontFamily: 'Quicksand-Regular',
  },

  smText: {
    fontSize: 18,
  },
});

export default SingleArtist;
