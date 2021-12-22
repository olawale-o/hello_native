import React, {useState} from 'react';
import {useDispatch} from 'react-redux';
import {
  TextInput,
  View,
  KeyboardAvoidingView,
  TouchableOpacity,
  Text,
  Platform,
  Pressable,
} from 'react-native';
import CheckBox from '@react-native-community/checkbox';
import Icon from 'react-native-vector-icons/AntDesign';
import styles from './styles';

import {auth, signInWithEmailAndPassword} from '../../firebase';
import {authSuccess} from '../../redux/auth/action_creators';
import {navigate} from './helper';

const isAndroid = () => (Platform.OS === 'android' ? 'position' : 'padding');

const Login = ({navigation}) => {
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
        <Pressable onPress={() => navigate(navigation, 'Auth')}>
          <Icon name="closecircleo" size={30} color="#86897D" />
        </Pressable>
      </View>
      <Pressable
        onPress={() => console.log('press')}
        style={styles.socialButton}>
        <View style={styles.socialButtonContainer}>
          <Icon name="google" size={15} color="#86897D" />
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
            onValueChange={newValue => setIsSelected(newValue)}
            style={styles.checkbox}
          />
          <Text style={styles.label}>Remember Me</Text>
        </View>
        <Pressable
          onPress={() => console.log('login')}
          style={styles.loginButton}>
          <Text style={styles.loginButtonText}>Log in</Text>
        </Pressable>
        <View style={styles.forgotPasswordContainer}>
          <TouchableOpacity onPress={() => console.log('forgot')}>
            <Text style={styles.linkText}>Forgot Password?</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.divider} />
      <View style={styles.signupContainer}>
        <Text style={styles.linkTextTitle}>Don't have an account?</Text>
        <TouchableOpacity onPress={() => navigate(navigation, 'Signup')}>
          <Text style={styles.linkText}>Sign up</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Login;
