import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
	container: {
		flex:1,
		alignItems:'center',
		justifyContent:'center'
	}
});

const Securities = (props) => {
	return (
		<View style={styles.container}>
			<Text>This is Securities screen</Text>
		</View>
	);
};

export default Securities;
