import React, { useState, useEffect } from 'react';
import {
  StyleSheet,
  TextInput,
  View,
  KeyboardAvoidingView,
  TouchableOpacity,
  Text,
  Platform,
} from 'react-native';
import { auth, signInWithEmailAndPassword, onAuthStateChanged } from '../../firebase';



const isAndroid = () => Platform.OS === 'android' ? 'height' :'padding';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  
  useEffect(() => {
    onAuthStateChanged(auth, user => {
      if (user != null) {
        console.log('We are authenticated now!');
      }
    });
  }, []);

  const handleLogin = () => {
    signInWithEmailAndPassword(auth, email, password)
    .then(userCrendentials => {
      const user = userCrendentials.user;
      console.log('user', user);
    })
    .catch(error => alert(error.message));
  };
  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={isAndroid()}
    >
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder='Email'
          value={email}
          onChangeText={text => setEmail(text)} />
        <TextInput
          style={styles.input}
          placeholder='Password'
          value={password}
          onChangeText={text => setPassword(text)} />
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={handleLogin}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.footerContainer}>
        <TouchableOpacity style={styles.linkButton} onPress={() => console.log('signup')}>
          <Text style={styles.linkButtonText}>Don't have an account?</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.linkButton} onPress={() => console.log('signup')}>
          <Text style={styles.linkButtonText}>Forgot password?</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
}

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  inputContainer: {
    width: '80%',
  },

  input: {
    backgroundColor: '#fff',
    borderRadius: 10,
    marginTop : 10,
    paddingVertical: 10,
    paddingHorizontal: 15,
  },

  buttonContainer: {
    width: '60%',
    marginTop: 10,
  },

  button: {
    backgroundColor: '#20232a',
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginBottom: 10,
  },

  buttonText: {
    color: '#fff',
    fontSize: 18,
  },

  footerContainer:{
    width: '100%',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  linkButton: {
    marginBottom: 10,
  },

  linkButtonText: {
    color: '#000',
  }
});
