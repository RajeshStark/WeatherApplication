import { View, Text, SafeAreaView, FlatList, Image } from 'react-native'
import React from 'react'
import { Card } from 'react-native-paper';
import { styles } from './styles';
import CustomBtn from '../../Components/CustomBtn';
import { CountryScreenProps } from '../../Navigation/types';


export default function CountryDetails({ navigation, route } : CountryScreenProps) {

  const { item } = route.params;

  return (
    <SafeAreaView>
      <FlatList
        data={item}
        renderItem={({ item }: any) =>
          <Card style={styles.card}>
            <Text style={styles.txt}>Capital: {item.capital[0]}</Text>
            <Text style={styles.txt}>Population: {item.population}</Text>
            <Text style={styles.txt}>Latlng: {item.latlng.map((i: any) => <Text>{i}, </Text>)}</Text>
            <Text style={styles.txt}>Country Flag: {item.flag}</Text>
            <CustomBtn
              title={'Capital Weather'}
              onPress={() => navigation.navigate('CapitalWeather', {
                city: item.capital[0]
              })}
              disabled={false}
            />
          </Card>
        }
        keyExtractor={(item, index) : any => index}
      />

    </SafeAreaView>
  )
}