import React, { useState } from 'react';
import {SafeAreaView, Text} from 'react-native';
import { styles } from './styles'; 
import CustomInput from '../../Components/CustomTxtInput'
import CustomBtn from '../../Components/CustomBtn'
import { homeProps } from '../../Navigation/types';
import { getCountryData } from '../../Services';

export default function Home({navigation} : homeProps) {
	const [value, setValue] = useState<string>('');

	const getData = () => {
		
		getCountryData(value)
		.then((res) => {
			console.log(res)
			navigation.navigate('CountryDetails', {
				item: res
			})
		})
		.catch((err) => {
			console.log(err)
		})
		
	}

	return (
		<SafeAreaView style={styles.main}>
	
		     <CustomInput 
		        value={value}
		        onChangeText={(txt) => setValue(txt)}
		        label="Enter Country"
		        placeholder="Enter Country"
		     />

		     <CustomBtn 
		       title="Submit"
		       onPress={() => getData()}
		       disabled={value === '' ? true : false}
		     />

		</SafeAreaView>
		)
}