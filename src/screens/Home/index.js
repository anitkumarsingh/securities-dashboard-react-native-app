import React from 'react';
import { View, Text, StyleSheet,Button } from 'react-native';

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center'
	}
});

const Home = ({navigation}) => {
	return (
		<View style={styles.container}>
			<Text>This is home screen</Text>
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate('Securities')}
      />
		</View>
	);
};

export default Home;
