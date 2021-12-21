import React, {useState} from 'react';
import {useDispatch} from 'react-redux';
import {
  Pressable,
  View,
  FlatList,
  StyleSheet,
  Text,
  Modal,
  Alert,
} from 'react-native';
import { auth } from '../../firebase';
import {authLogout, authLoading} from '../../redux/auth/action_creators';

const SettingList = () => {
  const dispatch = useDispatch();
  const [modalVisible, setModalVisible] = useState(false);
  const data = [
    {name: 'Change username', action: () => {}},
    {name: 'Log out', action: () => setModalVisible(true)},
  ];
  const logOut = () => {
    dispatch(authLoading());
    auth.signOut();
    dispatch(authLogout());
    setModalVisible(!modalVisible);
  };
  return (
    <View style={styles.container}>
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
      <FlatList
        data={data}
        renderItem={({item}) => (
          <Pressable style={styles.button} onPress={item.action}>
            <Text style={styles.text}>{item.name}</Text>
          </Pressable>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 10,
    paddingBottom: 10,
  },

  button: {
    backgroundColor: 'white',
    padding: 10,
    borderBottomWidth: 1,
  },

  text: {
    fontSize: 20,
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
