import React, {useState} from 'react';
import {useDispatch} from 'react-redux';
import {
  Pressable,
  View,
  StyleSheet,
  Text,
  Modal,
  Alert,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {auth} from '../../firebase';
import {authLogout, authLoading} from '../../redux/auth/action_creators';

const SettingList = ({navigation}) => {
  const dispatch = useDispatch();
  const [modalVisible, setModalVisible] = useState(false);
  const logOut = () => {
    dispatch(authLoading());
    auth.signOut();
    dispatch(authLogout());
    setModalVisible(!modalVisible);
  };
  return (
    <View style={styles.container}>
      <Text style={styles.pageTitle}>Settings</Text>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setModalVisible(!modalVisible);
        }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Are you sure!</Text>
            <View style={styles.modalButtonContainer}>
              <Pressable
                style={[styles.buttonModal, styles.yesButton]}
                onPress={logOut}>
                <Text style={styles.textStyle}>Yes</Text>
              </Pressable>
              <Pressable
                style={[styles.buttonModal, styles.noButton]}
                onPress={() => setModalVisible(!modalVisible)}>
                <Text style={styles.textStyle}>No</Text>
              </Pressable>
            </View>
          </View>
        </View>
      </Modal>
      <ScrollView>
        <TouchableOpacity style={styles.button} onPress={() => {}}>
          <View style={styles.buttonContentLeft}>
            <MaterialIcons name="block" size={24} color="white" style={{marginRight: 10}} />
            <Text style={styles.text}>Blocked Accounts</Text>
          </View>
          <Ionicons name="ios-chevron-forward-sharp" size={24} color="white" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => {}}>
          <View style={styles.buttonContentLeft}>
            <AntDesign name="profile" size={24} color="white" style={{marginRight: 10}} />
            <Text style={styles.text}>Account Information</Text>
          </View>
          <Ionicons name="ios-chevron-forward-sharp" size={24} color="white" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => navigation.push('Notifications')}>
          <View style={styles.buttonContentLeft}>
            <Ionicons name="ios-notifications" size={24} color="white" style={{marginRight: 10}} />
            <Text style={styles.text}>Notifications</Text>
          </View>
          <Ionicons name="ios-chevron-forward-sharp" size={24} color="white" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => {}}>
          <View style={styles.buttonContentLeft}>
            <MaterialIcons name="privacy-tip" size={24} color="white" style={{marginRight: 10}} />
            <Text style={styles.text}>Privacy Policy</Text>
          </View>
          <Ionicons name="ios-chevron-forward-sharp" size={24} color="white" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => {}}>
          <View style={styles.buttonContentLeft}>
            <FontAwesome5 name="shapes" size={24} color="white" style={{marginRight: 10}} />
            <Text style={styles.text}>Terms of service</Text>
          </View>
          <Ionicons name="ios-chevron-forward-sharp" size={24} color="white" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => {}}>
          <View style={styles.buttonContentLeft}>
            <Ionicons name="document-text-outline" size={24} color="white" style={{marginRight: 10}} />
            <Text style={styles.text}>Community Guidelines</Text>
          </View>
          <Ionicons name="ios-chevron-forward-sharp" size={24} color="white" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => {}}>
          <View style={styles.buttonContentLeft}>
            <SimpleLineIcons name="question" size={24} color="white" style={{marginRight: 10}} />
            <Text style={styles.text}>Support</Text>
          </View>
          <Ionicons name="ios-chevron-forward-sharp" size={24} color="white" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => {}}>
          <View style={styles.buttonContentLeft}>
            <MaterialIcons name="exit-to-app" size={24} color="red" style={{marginRight: 10}} />
            <Text style={[styles.text, {color: 'red'}]}>Log out</Text>
          </View>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#20232a',
  },

  pageTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
  },

  button: {
    padding: 15,
    marginVertical: 10,
    backgroundColor: '#7689B6',
    borderRadius: 12,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  text: {
    fontSize: 18,
    color: '#eee',
    fontFamily: 'Oxygen-Bold',
  },

  buttonContentLeft: {
    flexDirection: 'row',
  },

  modalView: {
    width: '80%',
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },

  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },

  yesButton: {
    backgroundColor: 'red',
  },

  noButton: {
    backgroundColor: 'blue',
  },

  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },

  modalButtonContainer: {
    width: '80%',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
    backgroundColor: 'grey',
  },

  buttonOpen: {
    backgroundColor: '#F194FF',
  },

  buttonModal: {
    borderRadius: 10,
    paddingHorizontal: 30,
    paddingVertical: 10,
    elevation: 2,
  },
});

export default SettingList;
