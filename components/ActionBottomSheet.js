import React from 'react';
import {StyleSheet,View} from 'react-native';
import BottomSheet from '@gorhom/bottom-sheet';;


const ActionBottomSheet = ({children, bottomSheetRef, snapPoints, handleSheetChanges, close }) => {
  return (
    <BottomSheet
      ref={bottomSheetRef}
      index={0}
      snapPoints={snapPoints}
      onChange={handleSheetChanges}
      enablePanDownToClose={true}
      onClose={close}
    >
      <View style={styles.contentContainer}>
        {children}
      </View>
    </BottomSheet>
  );
};

export default ActionBottomSheet;

const styles = StyleSheet.create({
  contentContainer: {
    flex: 1,
    alignItems: 'center',
  },
});
