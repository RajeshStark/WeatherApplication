import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RouteProp } from '@react-navigation/native' ;

export type StackNavigationDetails = {
    Home: undefined;
    CountryDetails: {item: Array<JSON>};
	CapitalWeather: {city: string}
}


type HomeNavigationProp = NativeStackNavigationProp<StackNavigationDetails, 'Home'>
export  interface homeProps {
    navigation: HomeNavigationProp;
}

type CountryDetailsRouteProp = RouteProp<StackNavigationDetails,'CountryDetails'>
type CountryNavigationProp = NativeStackNavigationProp<StackNavigationDetails, 'CountryDetails'>

export interface CountryScreenProps {
    navigation: CountryNavigationProp;
    route: CountryDetailsRouteProp;
}

type CapiatalWetherProps = RouteProp<StackNavigationDetails, 'CapitalWeather'>

export interface CapitalWeatherScrenProp {
    route: CapiatalWetherProps;
}