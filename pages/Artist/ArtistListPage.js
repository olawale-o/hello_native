import React , {  useState, useEffect} from 'react';
import {SafeAreaView, View, Text, Image, FlatList, StyleSheet, ActivityIndicator, Pressable  } 
from 'react-native';
import SingleArtist from './Screens/SingleArtist'

const ArtistListPage = ({navigation}) => {
  const API_KEY = '3fdb610c99831dacfc2bc8f3c341cc44' ;
  const uri = `https://api.themoviedb.org/3/person/popular?api_key=${API_KEY}`;
  const [artists, setArtists] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const getAllArtsists = async () => {
    setLoading(true)
    try {
      const response =  await fetch(uri,{ headers: {
            "Content-type": "application/json;charset=UTF-8",
            "Accept": "application/json"
      } });
            
      const {results} =  await response.json();
      setArtists(results)
      setLoading(false)
      
    } catch (error) {
      console.log(`error ${error}`);
      setError("there is a problem")
      setLoading(false)
    }
        
  }

  useEffect(() => {
    getAllArtsists()
     
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
