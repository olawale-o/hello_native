import React from 'react';
import {
  StyleSheet,
  TextInput,
  View,
  KeyboardAvoidingView,
  TouchableOpacity,
  Text,
  Platform,
} from 'react-native'

const isAndroid = () => Platform.OS === 'android' ? 'height' :'padding';

const Login = () => {
  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={isAndroid()}
    >
      <View style={styles.inputContainer}>
        <TextInput style={styles.input} placeholder='Email' />
        <TextInput style={styles.input} placeholder='Password' />
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={() => console.log('login')}>
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
