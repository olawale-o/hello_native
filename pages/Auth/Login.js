import React, {useState} from 'react';
import {useDispatch} from 'react-redux';
import {
  StyleSheet,
  TextInput,
  View,
  KeyboardAvoidingView,
  TouchableOpacity,
  Text,
  Platform,
  Pressable,
} from 'react-native';
import CheckBox from '@react-native-community/checkbox';

import {auth, signInWithEmailAndPassword} from '../../firebase';
import {authSuccess} from '../../redux/auth/action_creators';
import Icon from 'react-native-vector-icons/AntDesign';

const isAndroid = () => (Platform.OS === 'android' ? 'position' : 'padding');

const Login = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isSelected, setIsSelected] = useState(false);

  const handleLogin = () => {
    signInWithEmailAndPassword(auth, email, password)
      .then(userCrendentials => {
        const user = userCrendentials.user;
        dispatch(authSuccess(user));
      })
      .catch(error => console.log(error.message));
  };
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Login</Text>
        <Icon name="closecircleo" size={30} color="#86897D" />
      </View>
      <Pressable onPress={() => console.log('press')} style={styles.socialButton}>
        <View style={styles.socialButtonContainer}>
          <Icon name="google" size={15} color="#86897D"/>
          <Text style={styles.buttonText}>Log in with Google</Text>
        </View>
      </Pressable>
      <View style={styles.divider} />
      <View style={styles.formContainer}>
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Email</Text>
          <TextInput
            style={styles.input}
            placeholder="wale@test.com"
            value={email}
            onChangeText={text => setEmail(text)}
          />
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Password</Text>
          <TextInput
            style={styles.input}
            placeholder="********"
            value={password}
            onChangeText={text => setPassword(text)}
          />
        </View>
        <View style={styles.checkboxContainer}>
          <CheckBox
            value={isSelected}
            onValueChange={(newValue) => setIsSelected(newValue)}
            style={styles.checkbox}
          />
          <Text style={styles.label}>Remember Me</Text>
        </View>
        <Pressable onPress={() => console.log('login')} style={styles.loginButton}>
          <Text style={styles.loginButtonText}>Log in</Text>
        </Pressable>
        <View style={styles.forgotPasswordContainer}>
        <TouchableOpacity onPress={() => console.log('forgot')}>
          <Text style={styles.linkText}>Forgot Password?</Text>
        </TouchableOpacity>
        </View>
        <View style={styles.divider} />
        <View style={styles.signupContainer}>
          <Text style={styles.signupText}>Don't have an account?</Text>
          <TouchableOpacity onPress={() => console.log('forgot')}>
            <Text style={styles.linkText}>Sign up</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    height: '100%',
    backgroundColor: '#fff',
    padding: 20,
  },

  header: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  headerText: {
    fontSize: 20,
  },

  socialButton: {
    borderRadius: 10,
    marginVertical: 25,
    backgroundColor: '#F3F3F3',
  },

  socialButtonContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    opacity: 0.45,
    alignItems: 'center',
    padding: 10,
  },

  buttonText: {
    color: '#000',
    marginLeft: 10,
    fontWeight: 'bold',
  },

  divider: {
    height: 1,
    backgroundColor: '#eee',
    marginVertical: 10,
  },

  formContainer: {
    paddingVertical: 15,
  },

  inputContainer: {
    paddingVertical: 10,
  },

  label: {
    fontWeight: 'bold',
  },

  input: {
    backgroundColor: '#fff',
    borderRadius: 10,
    marginTop: 10,
    borderWidth: 2,
    borderColor: '#eee',
    paddingHorizontal: 10,
  },

  checkboxContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 15,
  },

  loginButton: {
    backgroundColor: '#008AFF',
    paddingVertical: 10,
    borderRadius: 15,
  },

  loginButtonText: {
    color: '#fff',
    textAlign: 'center',
  },
  
  forgotPasswordContainer: {
    paddingVertical: 20,
  },

  linkText: {
    color: '#008AFF',
    textAlign: 'center',
  },

  signupContainer: {
    display: 'flex',
    alignItems: 'center',
  }
});
