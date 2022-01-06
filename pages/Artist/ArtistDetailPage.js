import React from 'react';
import {useSelector} from 'react-redux';
import {Text, SafeAreaView, View, StyleSheet, Image, ScrollView, FlatList} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import artistSelector from '../../redux/artist/artistSelector';
import ArtistMovieCard from '../../components/ArtistMovieCard';
import ArtistProfileHeader from '../../components/ArtistProfileHeader';
import ListTile from '../../components/ListTIle';

const ArtistDetailPage = ({route}) => {
  const {artists} = useSelector(artistSelector);
  const {id} = route.params;
  const artist = artists.find(artist => artist.id === id);
  const backDrop = `https://image.tmdb.org/t/p/original${artist.known_for[0].backdrop_path}`;
  return (
    <LinearGradient
      colors={['#223e83', '#20232a']}
      style={styles.gradient}
      start={{x: 0.8, y: 0}} end={{x: 1, y: 0.8}}
    >
      <SafeAreaView style={styles.safeArea}>
        <ScrollView style={[styles.container]}>
          <ArtistProfileHeader
            name={artist.name}
            profile_path={artist.profile_path}
            known_for_department={artist.known_for_department}
          />
          <View style={styles.column}>
            <ListTile title='Popularity' value={artist.popularity} />
            <ListTile title='Starred in' value={artist.known_for.length} />
          </View>
          <View style={styles.movies}>
            <FlatList
              data={artist.known_for}
              renderItem={({item}) => <ArtistMovieCard item={item} /> }
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

  column: {
    flex: 1,
    padding: 10,
  },
  
  movies: {
    marginHorizontal: 15,
  },
});

export default ArtistDetailPage;
