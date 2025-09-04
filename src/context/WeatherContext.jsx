import { useState, createContext } from "react";

export const WeatherContext = createContext();

export default function WeatherProvider({children}){
    const API_URL ="https://api.openweathermap.org/data/2.5/weather?";
    const API_KEY = "463382f767e1d6cd593d84f04aec1dcf";
    let [units, setUnits] = useState("metric");
    let [weatherData, setWeatherData] = useState({});

    async function getWeatherInfo(city) {
        try{
            let res = await fetch(`${API_URL}q=${city}&units=${units}&appid=${API_KEY}`)
            let data = await res.json();
            if(data.cod !== 200) throw new Error(data.message);
            let result = {
                location: {
                    city: data.name,
                    country: data.sys.country
                },
                
                temp: data.main.temp,
                tempMin: data.main.temp_min,
                tempMax: data.main.temp_max,
                humidity: data.main.humidity,
                weather:{
                    main : data.weather[0].main,
                    description : data.weather[0].description,
                    icon : data.weather[0].icon
                },
                wind : {
                    speed: data.wind.speed,

                }
            }
            setWeatherData(result);
        }catch(err){
            alert(err.message);
        }
    }
    return(
        <WeatherContext.Provider value={{getWeatherInfo, weatherData}}>
            {children}
        </WeatherContext.Provider>
    );
}