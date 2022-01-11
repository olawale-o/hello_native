import React from 'react';
import {View, Text, Image, StyleSheet, Animated, TouchableOpacity} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const getPosterPath = (item) => `https://image.tmdb.org/t/p/original${item.poster_path}`;

const ArtistMovieCard = ({item}) => {
  const opacity = React.useRef(new Animated.Value(0)).current;
  const scale = React.useRef(new Animated.Value(0)).current;
  const translateY = React.useRef(new Animated.Value(5)).current;
  React.useEffect(() => {
    Animated.timing(opacity, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: true,
    }).start();
    Animated.timing(scale, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: true,
    }).start();
    Animated.timing(translateY, {
      toValue: 0,
      duration: 1000,
      useNativeDriver: true,
    }).start();
  }, []);
  const onPress = () => {
    console.log('onPress');
  };
  return (
    <TouchableOpacity
      activeOpacity={1}
      style={{
        flex: 1,
      }}
      onPress={onPress}>
      <View style={styles.movieCard}>
        <Image style={{
          ...StyleSheet.absoluteFillObject,
        }} source={{uri: getPosterPath(item)}} />
        <View style={styles.textContainer}>
          <Animated.Text style={[styles.itemTitle, {opacity: opacity} ]}>{item.original_title ? item.original_title : item.original_name}</Animated.Text>
          <Animated.View style={[styles.iconContainer, {transform: [{ scale: scale}, { translateY: translateY }] } ]}>
            <Ionicons name="heart" size={20} style={styles.icon} />
            <Text style={styles.iconText}>{item.vote_average}</Text>
          </Animated.View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default ArtistMovieCard;

const styles = StyleSheet.create({
  movieCard: {
    width: 200,
    height: 200,
    marginHorizontal: 10,
  },

  textContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
    position: 'relative',
  },
    
  itemTitle: {
    color: '#fff',
    fontSize: 12,
    fontFamily: 'Oxygen-Bold',
  },

  iconContainer: {
    position: 'absolute',
    bottom: 10,
    right: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  icon: {
    color: '#fff',
    marginRight: 5,
  },
  
  iconText: {
    color: '#fff',
    fontSize: 12,
    fontFamily: 'Oxygen-Bold',
  },
});
