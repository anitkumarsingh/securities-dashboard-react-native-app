import React from 'react';
import { StyleSheet, View } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

const Pagination = ({handleNext,handlePrev}) => {
	return (
		<View style={styles.paginationContainer}>
      <MaterialIcons name="navigate-before" size={24} color="black" onPress={handlePrev} title='Prev' />
      <MaterialIcons name="navigate-next" size={24} color="black" onPress={handleNext} title='Next' />
		</View>
	);
};

export default Pagination;

const styles = StyleSheet.create({
	paginationContainer: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		paddingHorizontal:20,
    paddingVertical:20,
    alignItems:'center'
    // backgroundColor:'rgba(255, 255, 255, 0.8)',
	}
});
