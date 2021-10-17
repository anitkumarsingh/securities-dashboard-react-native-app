import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Securities from '../screens/Securities';
import Home from '../screens/Home';

const Navigation = () =>{
  const Stack = createNativeStackNavigator();
  return(
    <NavigationContainer>
		<Stack.Navigator>
			<Stack.Screen name='Securities' component={Securities} />
			<Stack.Screen name='Home' component={Home} />
		</Stack.Navigator>
	</NavigationContainer>
  )
}

export default Navigation;