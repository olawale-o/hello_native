import React from 'react';
import {StyleSheet,View, Image, Text} from 'react-native';

const ArtistProfileHeader = ({profile_path, name, known_for_department}) => {
  const imgUri = `https://image.tmdb.org/t/p/w500${profile_path}`;
  return (
    <View style={styles.header}>
      <View style={styles.imgContainer}>
        <Image source={{uri: imgUri}} style={styles.img} />
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.role}>{known_for_department}</Text>
      </View>
    </View>
  );
};

export default ArtistProfileHeader;

const styles = StyleSheet.create({
  header: {
    flex: 1,
    alignItems: 'center',
    marginVertical: 20,
  },
  imgContainer: { },
 
  img: {
    width: 150,
    height: 150,
    marginBottom: 5,
    borderRadius: 75,
    resizeMode: 'cover',
  },

  textContainer: {
    flex: 1,
    alignItems: 'center',
  },
    
  name: {
    color: '#99A5C3',
    fontSize: 18,
  },
    
  role: {
    fontSize: 14,
    color: '#fff',
  },
});
