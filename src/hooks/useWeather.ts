import React , { useEffect, useState } from 'react'
import axios from 'axios'
import { WeatherData } from '../types/type';

const useWeather = () => {
    const [weather, setWeather] = useState<WeatherData | null>(null);
    const apiKey: string | undefined = process.env.REACT_APP_API_KEY;

    useEffect(()=>{
        if(apiKey){
            const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=seoul&appid=${apiKey}&units=metric`;
    
            axios.get(apiUrl)
            .then(response => {
              setWeather(response.data);
            })
            .catch(error => {
             console.error('Error fetching weather data:', error);
            });
         }
    },[])
    return {weather}

  
}

export default useWeather