import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ListTile = ({title, value}) => {
  return (
    <View style={styles.listTile}>
      <Text style={styles.listTileTile}>{title}:</Text>
      <Text style={styles.trailing}>{value}</Text>
    </View>
  );
};

export default ListTile;

const styles = StyleSheet.create({
  listTile: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 20,
    paddingHorizontal: 10,
    borderRadius: 5,
    shadowColor: "#386FEA",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,
    elevation: 6,
    marginVertical: 5,
  },  
  listTileTile: {
    color: '#99A5C3',
    fontWeight: 'bold',
    fontFamily: 'Quicksand-regular',
  },
  
  trailing: {
    color: '#fff',
    fontWeight: 'bold',
    fontFamily: 'Quicksand-bold',
  },
});
