import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

const Settings = ({ navigation }) => {
	return (
		<View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
			<Text>Settings!</Text>
			<Button title='Go to Details' onPress={() => navigation.navigate('Securities')} />
		</View>
	);
};

export default Settings;

const styles = StyleSheet.create({});
