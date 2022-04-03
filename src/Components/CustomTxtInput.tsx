import React from 'react';
import { TextInput } from 'react-native-paper';
import { styles } from './styles';
import { inputTypes } from './types'

export default function CustomInput({testID,value, onChangeText, label, placeholder} : inputTypes){

	return(
		<TextInput 
		   value={value}
		   onChangeText={onChangeText}
		   mode="flat"
		   style={styles.input}
		   label={label}
		   placeholder={placeholder}
		   testID={testID}
		   autoFocus={false}
		/>
		)
}