import React , { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {SafeAreaView, View, Text, Image, FlatList, StyleSheet, ActivityIndicator, Pressable } from 'react-native';
import { MOVIEDB_API_KEY } from '@env';
import { getArtists } from '../../redux/artist/artist_async_action';
import artistSelector from '../../redux/artist/artistSelector';
import SingleArtist from './Screens/SingleArtist';

const ArtistListPage = ({navigation}) => {
  const dispatch = useDispatch();
  const { loading, artists, error } = useSelector(artistSelector);

  useEffect(() => {
    dispatch(getArtists());
  }, []);
  const renderItem = ({ item }) => <SingleArtist artist ={ item } navigation = {navigation} />;
  return (
    <SafeAreaView
      style={styleSheets.safeArea}
    >
      {artists && !loading &&
        <FlatList
          data= {artists}
          renderItem= {renderItem}
          keyExtractor={item => item.id}
        />}
        {loading && <View style = {[styleSheets.container, styleSheets.center]}>
          <ActivityIndicator size="large" color="red" /></View>}
            {error && <View style = {[styleSheets.container,styleSheets.center]}>
            <Text style = {[styleSheets.text,styleSheets.center]}>Error</Text></View>}
         
        </SafeAreaView>
    );
}

const styleSheets = StyleSheet.create({
  safeArea: {
    backgroundColor: "#20232a",
    height: "100%",
  },

  container: {
    flex: 1,
    padding: 5
  },

  center: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },

  artistList: { },

  SingleArtist: {
    flex: 1,
    flexDirection: "row",
    padding: 20,
    alignItems: "center"
  },

  img: {
    width: 50,
    height: 50,
    marginRight: 20,
    borderRadius: 50
  },

  text: {
    color: "#eee",
    fontSize: 20
  },

  smText:{
    fontSize: 18
  }
});

export default ArtistListPage;
