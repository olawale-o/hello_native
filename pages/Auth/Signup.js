import React, {useState} from 'react';
import {useDispatch} from 'react-redux';
import {
  TextInput,
  View,
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

// const isAndroid = () => (Platform.OS === 'android' ? 'position' : 'padding');

const SignUp = ({navigation}) => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isSelected, setIsSelected] = useState(false);

  const handleRegister = () => {
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
        <Text style={styles.headerText}>Signup</Text>
        <Pressable onPress={() => navigate(navigation, 'Auth')}>
          <Icon name="closecircleo" size={30} color="#86897D" />
        </Pressable>
      </View>
      <Pressable
        onPress={() => console.log('press')}
        style={styles.socialButton}>
        <View style={styles.socialButtonContainer}>
          <Icon name="google" size={15} color="#86897D" />
          <Text style={styles.buttonText}>Sign up with Google</Text>
        </View>
      </Pressable>
      <View style={styles.divider} />
      <View style={styles.formContainer}>
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Name</Text>
          <TextInput
            style={styles.input}
            placeholder="wale"
            value={email}
            onChangeText={text => setEmail(text)}
          />
        </View>
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
            placeholder="at least 8 characters"
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
          <Text style={styles.label}>
            I agree with <Text style={styles.linkText}>Terms</Text> and
            <Text style={styles.linkText}>Privacy</Text>
          </Text>
        </View>
        <Pressable
          onPress={() => console.log('login')}
          style={styles.loginButton}>
          <Text style={styles.loginButtonText}>Sign up</Text>
        </Pressable>
      </View>
      <View style={styles.divider} />
      <View style={styles.signupContainer}>
        <Text style={styles.linkTextTitle}>Already have an account?</Text>
        <TouchableOpacity onPress={() => navigate(navigation, 'Login')}>
          <Text style={styles.linkText}>Log in</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default SignUp;
