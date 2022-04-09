import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../Screens/Home/Home'
import CountryDetails from '../Screens/CountryDetails/CountryDetails';
import CapitalWeather from '../Screens/CapitalWeather/CapitalWeather';
import { StackNavigationDetails } from './types';

const Stack = createNativeStackNavigator<StackNavigationDetails>();

export default function NavStack() {

	return (
		<NavigationContainer>
			<Stack.Navigator>
				<Stack.Screen name="Home" component={Home} />
				<Stack.Screen name="CountryDetails" component={CountryDetails} />
				<Stack.Screen name="CapitalWeather" component={CapitalWeather} />
			</Stack.Navigator>
		</NavigationContainer>
	)
}