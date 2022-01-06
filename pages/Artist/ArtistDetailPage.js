import React from 'react';
import {useSelector} from 'react-redux';
import {Text, SafeAreaView, View, StyleSheet, Image, ScrollView, FlatList} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import artistSelector from '../../redux/artist/artistSelector';

const getPosterPath = (item) => `https://image.tmdb.org/t/p/original${item.poster_path}`;

const ArtistDetailPage = ({route}) => {
  const {artists} = useSelector(artistSelector);
  const {id} = route.params;
  const artist = artists.find(artist => artist.id === id);
  const backDrop = `https://image.tmdb.org/t/p/original${artist.known_for[0].backdrop_path}`;
  const imgUri = `https://image.tmdb.org/t/p/w500${artist.profile_path}`;
  console.log(artist);
  const renderItem = ({item}) => {
    console.log('hey');
    return (
      <>
        <View style={styles.imgOverlay}>
          <Text style={styles.itemTitle}>{item.original_title}</Text>
        </View>
        <View style={styles.movieCard}>
          <Image style={styles.movieCardImg} source={{uri: getPosterPath(item)}} />
        </View>
      </>
    );
  };
  return (
    <LinearGradient
      colors={['#223e83', '#20232a']}
      style={styles.gradient}
      start={{x: 0.8, y: 0}} end={{x: 1, y: 0.8}}
    >
      <SafeAreaView style={styles.safeArea}>
        <ScrollView style={[styles.container]}>
          <View style={styles.header}>
            <View style={styles.imgContainer}>
              <Image source={{uri: imgUri}} style={styles.img} />
            </View>
            <View style={styles.textContainer}>
              <Text style={styles.name}>{artist.name}</Text>
              <Text style={styles.role}>{artist.known_for_department}</Text>
            </View>
          </View>
          <View style={styles.column}>
            <View style={styles.listTile}>
              <Text style={styles.listTileTile}>Popularity:</Text>
              <Text style={styles.trailing}>{artist.popularity}</Text>
            </View>
            <View style={styles.listTile}>
              <Text style={styles.listTileTile}>Starred In:</Text>
              <Text style={styles.trailing}>{artist.known_for.length}</Text>
            </View>
          </View>
          <View style={styles.movies}>
            <FlatList
              data={artist.known_for}
              renderItem={renderItem}
              keyExtractor={item => item.id}
              horizontal={true}
            />
          </View>
        </ScrollView>
      </SafeAreaView>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  gradient: {
    flex: 1,
    backgroundColor: '#20232a',
  },

  safeArea: {
    height: '100%',
    flex: 1,
  },

  container: {
    flex: 1,
  },

  center: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },

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

  column: {
    flex: 1,
    padding: 10,
  },
  
  listTile: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 20,
    paddingHorizontal: 10,
    borderRadius: 5,
    shadowColor: "#386FEA",
    shadowOffset: {
	    width: 0,
	    height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,
    elevation: 6,
    marginVertical: 5,
  },

  listTileTile: {
    color: '#99A5C3',
    fontWeight: 'bold',
  },

  trailing: {
    color: '#fff',
    fontWeight: 'bold',
  },
  
  movies: {
    marginHorizontal: 15,
  },

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
  }

});

export default ArtistDetailPage;
