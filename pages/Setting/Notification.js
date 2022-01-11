import React from 'react';
import { StackActions } from '@react-navigation/native';
import {View, Text, ScrollView, StyleSheet, TouchableOpacity, Switch, Dimensions} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const { width, height } = Dimensions.get('window');
const SPACING = 10;
const popAction = StackActions.pop(1);

const Notifications = ({navigation}) => {
  const [enablePush, setEnablePush] = React.useState(false);
  const [enableSms, setEnableSms] = React.useState(true);
  const [enableEmail, setEnableEmail] = React.useState(false);
  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <TouchableOpacity
          onPress={() => navigation.dispatch(popAction)}
        >
          <Text style={styles.headerButtonText}>Done</Text>
        </TouchableOpacity>
      ),
    });
  });
  return (
    <ScrollView contentContainerStyle={styles.contentContainer}>
      <TouchableOpacity style={styles.button} onPress={() => {}}>
        <View style={styles.buttonContentLeft}>
          <Ionicons name="ios-push-outline" size={24} color="white" style={{marginRight: SPACING}} />
          <Text style={styles.buttonText}>Push Notifications</Text>
        </View>
        <Switch
          value={enablePush}
          onValueChange={() => {}}
          thumbColor={enablePush ? "#fff" : "#20232a"}
          trackColor={enablePush ? "#6F91E1" : "#20232a"}
        />
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => {}}>
        <View style={styles.buttonContentLeft}>
          <MaterialCommunityIcons name="toggle-switch-outline" size={24} color="white" style={{marginRight: SPACING}} />
          <Text style={styles.buttonText}>Manage Notifications</Text>
        </View>
        <Ionicons name="ios-chevron-forward-sharp" size={24} color="white" />
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => navigation.push('Notifications')}>
        <View style={styles.buttonContentLeft}>
          <MaterialCommunityIcons name="message-processing-outline" size={24} color="white" style={{marginRight: SPACING}} />
          <Text style={styles.buttonText}>SMS Notifications</Text>
        </View>
        <Switch
          value={enableSms}
          onValueChange={() => {}}
          thumbColor={enableSms ? "#fff" : "#20232a"}
          trackColor={enableSms ? "#6F91E1" : "#20232a"}
        />
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => {}}>
        <View style={styles.buttonContentLeft}>
          <SimpleLineIcons name="envelope" size={24} color="white" style={{marginRight: SPACING}} />
          <Text style={styles.buttonText}>Email Notifications</Text>
        </View>
        <Switch
          value={enableEmail}
          onValueChange={() => {}}
          thumbColor={enableEmail ? "#fff" : "#20232a"}
          trackColor={enableEmail ? "#6F91E1" : "#20232a"}
        />
      </TouchableOpacity>
    </ScrollView>
  );
};

export default Notifications;

const styles = StyleSheet.create({
  contentContainer: {
    height: height,
    width: width,
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
  
  buttonText: {
    fontSize: 18,
    color: '#eee',
    fontFamily: 'Oxygen-Bold',
  },
  
  buttonContentLeft: {
    flexDirection: 'row',
  },

  headerButtonText: {
    color: '#fff',
    marginRight: SPACING,
    fontWeight:'bold',
    fontFamily: 'Oxygen-Bold',
  },
});
