import React from 'react';
import {StyleSheet,View, TouchableOpacity,} from 'react-native';
import BottomSheet from '@gorhom/bottom-sheet';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FloatingButton from './FloatingButton';


const ActionBottomSheet = ({children}) => {
  const bottomSheetRef = React.useRef(null);
  const [isVisible, setIsVisible] = React.useState(false);

  // variables
  const snapPoints = React.useMemo(() => [1, '25%'], []);

  // callbacks
  const handleSheetChanges = React.useCallback((index) => {
    console.log('handleSheetChanges', index);
  }, []);

  const handleSnapOpen = React.useCallback((index) => {
    setIsVisible(true);
    bottomSheetRef.current.snapToIndex(index);
  });

  const handleSnapClose = React.useCallback(() => {
    bottomSheetRef.current?.close();
    setIsVisible(false);
  } , []);

  return (
    <>
      <TouchableOpacity
        onPress={() => handleSnapClose()}
        style={[isVisible ? styles.container : null]}
      />
      <FloatingButton
        openSheet={() => handleSnapOpen(1)}
        style={styles.button}
      >
        <AntDesign name="setting" size={24} color="#fff" />
      </FloatingButton>
      <BottomSheet
        ref={bottomSheetRef}
        index={0}
        snapPoints={snapPoints}
        onChange={handleSheetChanges}
        enablePanDownToClose={true}
        style={styles.bottomSheet}
        onClose={() => setIsVisible(false)}
      >
        <View style={styles.contentContainer}>
          {children}
        </View>
      </BottomSheet>
    </>
  );
};

export default ActionBottomSheet;

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    flex: 1,
    padding: 24,
    width: '100%',
    position: 'absolute',
    backgroundColor: 'rgba(0,0,0,0.5)',
    top: 0,
    left: 0,
  },
  contentContainer: {
    flex: 1,
    alignItems: 'center',
  },
  button: {
    position: 'absolute',
    bottom: 30,
    right: 20,
    backgroundColor: '#0C0C34',
    width: 50,
    height: 50,
    borderRadius: 25,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  }
});
