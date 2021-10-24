import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../stack';
import Settings from '../../screens/Settings';
import { NavigationContainer } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import {colors} from '../../utils/colors';

const Tab = () => {
	const Tab = createBottomTabNavigator();
	return (
		<NavigationContainer>
			<Tab.Navigator
				screenOptions={({ route }) => ({
					tabBarIcon: ({ focused, color, size }) => {
						let iconName;

						if (route.name === 'Homes') {
							iconName = focused
								? 'ios-home'
								: 'ios-home';
						} else if (route.name === 'Settings') {
							iconName = focused ? 'ios-settings' : 'ios-settings';
						}

						return <Ionicons name={iconName} size={size} color={color} />;
					},
					tabBarActiveTintColor: `${colors.primary}`,
					tabBarInactiveTintColor: 'gray'
				})}>
				<Tab.Screen
					name='Homes'
					component={Home}
					options={{
						headerShown: false
					}}
				/>
				<Tab.Screen
					name='Settings'
					component={Settings}
					options={{
						headerStyle: {
							backgroundColor: `${colors.primary}`
						},
						headerTintColor: `${colors.white}`,
						headerTitleStyle: {
							fontWeight: 'bold'
						}
					}}
				/>
			</Tab.Navigator>
		</NavigationContainer>
	);
};

export default Tab;

const styles = StyleSheet.create({});
