import React, {useEffect} from 'react';
import {useDispatch} from 'react-redux';
import {StyleSheet, View, Text, Image} from 'react-native';
import {auth, onAuthStateChanged} from '../firebase';
import {authToken, authLoading} from '../redux/auth/action_creators';

const SplashScreen = ({navigation}) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(authLoading());
    onAuthStateChanged(auth, user => {
      if (user != null) {
        dispatch(authToken(user.stsTokenManager.accessToken));
        navigation.replace('Dashboard');
      } else {
        dispatch(authToken(null));
        navigation.replace('Auth');
      }
    });
  }, [navigation, dispatch]);
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Image
          source={require('../assets/images/logo.png')}
          style={styles.logo}
        />
        <Text style={styles.text}>Native</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-end',
    paddingBottom: 50,
    height: '100%',
  },

  content: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },

  logo: {
    height: 50,
    width: 50,
    resizeMode: 'contain',
  },

  text: {
    color: '#002341',
    fontSize: 32,
  },
});

export default SplashScreen;
