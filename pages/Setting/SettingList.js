import React from 'react';
import { Pressable, View, FlatList, StyleSheet, Text, } from 'react-native';

const SettingList = () => {
  const data = [{ key: 'Change username' }, { key: 'Change password' }, { key: 'Change email' }];
  return  (
    <View style={styles.container}>
      <FlatList
        data={data}
        renderItem={
          ({ item }) => <Pressable style={styles.button} onPress={() => console.log('pressed') }>
                <Text style={styles.text}>{item.key}</Text>
              </Pressable>
          }
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
});

export default SettingList;
