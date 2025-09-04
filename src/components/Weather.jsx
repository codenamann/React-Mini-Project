import React from 'react'
import './Weather.css'
import Searchbox from './Searchbox'
import { useContext, useEffect, useState } from 'react';
import { WeatherContext } from '../context/WeatherContext';
import WeatherCard from './WeatherCard';

const Weather = () => {
    let {getWeatherInfo, weatherData} = useContext(WeatherContext);

    let [city, setCity] = useState("");

    function handleChange(event) {
        setCity(event.target.value);
    }
    function handleSubmit(event) {
        event.preventDefault();
        if(city === "") {
            alert("Please enter a city name");
            return;
        }else{
            getWeatherInfo(city);
        }
    }
    useEffect(() => {
        console.log(weatherData);
    }, [weatherData]);
  return (
    <div className='weather'>
        <Searchbox value={city} onChange={handleChange} onSubmit={handleSubmit}/>
        <WeatherCard />
    </div>
  )
}

export default Weather