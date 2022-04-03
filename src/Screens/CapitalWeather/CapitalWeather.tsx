import React, { useState, useEffect } from 'react';
import { FlatList, SafeAreaView, Text, Image } from 'react-native';
import { styles } from './styles';
import { API_KEY, WEATHERAPI } from '../../Utils/Config'
import { Card } from 'react-native-paper';
import { CapitalWeatherScrenProp } from '../../Navigation/types';
import { getWetherData } from '../../Services';

export default function CapitalWeather({ route }: CapitalWeatherScrenProp) {
    const [data, setData] = useState([]);
    const { city } = route.params;


    useEffect(() => {
        getData()
    }, [])

    const getData = () => {
        getWetherData(city)
            .then((res) => {
                // console.log(res)
                setData(res)
            })
            .catch((err) => {
                console.log(err)
            })
    }

    return (
        <SafeAreaView >
            <FlatList
                data={data}
                renderItem={({ item }: any) =>
                    <Card style={styles.card}>
                        <Text style={styles.txt}>Temparature: {item.current.temperature}</Text>
                        <Text style={styles.txt}>Wind Speed: {item.current.wind_speed}</Text>
                        <Text style={styles.txt}>Precip: {item.current.precip}</Text>
                        <Image
                            source={{ uri: item.current.weather_icons[0] }}
                            style={{ width: 50, height: 50, margin: 10 }}
                        />
                    </Card>
                }
                keyExtractor={(item, index) : any => index}
            />

        </SafeAreaView>
    )
}