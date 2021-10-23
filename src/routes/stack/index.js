import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Securities from '../../screens/Securities';
import Home from '../../screens/Home';
import Settings from '../../screens/Settings';

const Navigation = () => {
	const Stack = createNativeStackNavigator();
	return (
		<Stack.Navigator
			screenOptions={{
				headerStyle: {
					backgroundColor: '#f4511e'
				},
				headerTintColor: '#fff',
				headerTitleStyle: {
					fontWeight: 'bold'
				}
			}}>
			<Stack.Screen
				name='Home'
				component={Home}
				options={{
					title: 'Stock Securities'
				}}
			/>
			<Stack.Screen
				name='Securities'
				component={Securities}
				options={{
					title: 'Securities details'
				}}
			/>
			<Stack.Screen
				name='Settings'
				component={Settings}
				options={{
					title: 'Setting details'
				}}
			/>
		</Stack.Navigator>
	);
};

export default Navigation;
