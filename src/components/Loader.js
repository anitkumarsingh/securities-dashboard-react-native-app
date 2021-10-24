import React from 'react';
import { StyleSheet, View, ActivityIndicator } from 'react-native';
import { colors } from '../utils/colors';

const Loader = () => {
	return (
		<View style={styles.loader}>
			<ActivityIndicator color={`${colors.primary}`} size="large"/>
		</View>
	);
};

const styles = StyleSheet.create({
	loader: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center'
	}
});

export default Loader;