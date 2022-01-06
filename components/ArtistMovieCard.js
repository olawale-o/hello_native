import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';

const getPosterPath = (item) => `https://image.tmdb.org/t/p/original${item.poster_path}`;

const ArtistMovieCard = ({item}) => {
  return (
    <>
      <View style={styles.imgOverlay}>
        <Text style={styles.itemTitle}>{item.original_title ? item.original_title : item.original_name}</Text>
      </View>
      <View style={styles.movieCard}>
        <Image style={styles.movieCardImg} source={{uri: getPosterPath(item)}} />
      </View>
    </>
  );
};

export default ArtistMovieCard;

const styles = StyleSheet.create({
  movieCard: {
    width: 200,
    height: 200,
    marginHorizontal: 10,
  },
    
  imgOverlay: {
    width: 200,
    height: 200,
    backgroundColor: 'rgba(0,0,0,0.5)',
    position: 'absolute',
    top: 0,
    left: 10,
    borderRadius: 15,
    zIndex: 1,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },  
  
  movieCardImg: {
    width: '100%',
    height: '100%',
    borderRadius: 15,
    resizeMode: 'cover',
  },
    
  itemTitle: {
    color: '#fff',
    fontSize: 12,
    fontFamily: 'Oxygen-Bold',
  },
});
