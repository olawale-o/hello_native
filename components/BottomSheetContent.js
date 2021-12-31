import React from 'react';
import {View, Text, Switch, StyleSheet, Dimensions} from 'react-native';
import CustomSlider from './CustomSlider';

const BottomSheetContent = (props) => {
  const {radius, enableLocation, enableTraffic, radiusChange, locationChange, trafficChange} = props;
  return (
    <View style={styles.sheetContent}>
      <View style={styles.fieldContainer}>
        <Text style={styles.label}>Radius:</Text>
        <CustomSlider radius={radius} valueChange={radiusChange}/>
      </View>
      <View style={styles.fieldContainer}>
        <Text style={styles.label}>Show Location:</Text>
        <Switch value={enableLocation} onValueChange={locationChange} />
      </View>
      <View style={styles.fieldContainer}>
        <Text style={styles.label}>Show Traffic:</Text>
        <Switch value={enableTraffic} onValueChange={trafficChange} />
      </View>
  </View>
  );
};

export default BottomSheetContent;

const styles = StyleSheet.create({
  sheetContent: {
    flex: 1,
    width: Dimensions.get('window').width,
    paddingHorizontal: 20,
  },
  label: {
    fontSize: 16,
    marginRight: 10,
    fontWeight: 'bold',
  },
  fieldContainer: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 5,
  },
});
