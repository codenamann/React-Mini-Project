import { useContext } from "react";
import { WeatherContext } from "../context/WeatherContext";
import WeatherIcon from "./WeatherIcon";
import CityData from "./CityData";
import WeatherData from "./WeatherData";

export default function WeatherCard(){
    let {weatherData} = useContext(WeatherContext);
    
    if (!weatherData.weather) {
        return <p className="text-gray-500">Search for a city to see weather</p>;
    }
    return(
        <>
            <WeatherIcon weather={weatherData.weather.main} />
            <CityData temperature={Math.ceil(weatherData.temp)} location={weatherData.location.city} />
            <WeatherData windSpeed={weatherData.wind.speed} humidity={weatherData.humidity} />
        </>
    );
}