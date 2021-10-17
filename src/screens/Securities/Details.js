import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center'
	}
});

const Details = (props) => {
	return (
		<View style={styles.container}>
			<Text>This is Details screen</Text>
		</View>
	);
};

export default Details;
