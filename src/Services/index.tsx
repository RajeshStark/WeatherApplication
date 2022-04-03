import axios from 'axios';
import React from 'react';
import { API_KEY, COUNTRYAPI, WEATHERAPI } from '../Utils/Config';


export const getCountryData = async (country: string) : Promise<any> => {
    try{
        const url = `${COUNTRYAPI}${country}`
        const resp = await axios.get(url)
        if(resp.status !== 200){
            throw new Error("Something went wrong")
        }
        const data = await resp.data;
        return data;
    }
    catch(err){
        throw err
    }
}


export const getWetherData =  async (cityName:any) : Promise<any> => {
    try{
        const url = `${WEATHERAPI}${API_KEY}&query=${cityName}`
        const resp = await axios.get(url)
        if(resp.status !== 200){
            throw new Error("Something went wrong")
        }
        const data = await resp.data;
        return [data]
    }
    catch(err){
        throw err
    }
}
