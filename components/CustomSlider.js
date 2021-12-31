import React from 'react';
import  { Slider } from '@miblanchard/react-native-slider';
import { View, StyleSheet } from 'react-native';

const CustomSlider = ({radius, valueChange}) => {
  return (
    <View style={styles.radiusSlider}>
      <Slider
        value={radius}
        maximumValue={5000}
        minimumValue={500}
        step={radius}
        onValueChange={valueChange}
        trackClickable={true}
      />
    </View>
  );
};

export default CustomSlider;

const styles = StyleSheet.create({
  radiusSlider: {
    width: 'auto',
    flexGrow: 1,
  },
});
