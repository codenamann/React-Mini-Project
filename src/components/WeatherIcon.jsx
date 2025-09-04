import React from 'react'
import SunnyIcon from '../assets/sun.png'
import MistIcon from '../assets/mist.png'
import SnowIcon from '../assets/snow.png'
import CloudyIcon from '../assets/cloudy.png'
import ThunderIcon from '../assets/storm.png'
import RainyIcon from '../assets/heavy-rain.png'
import FogIcon from '../assets/fog.png'
import HazeIcon from '../assets/haze.png'



const WeatherIcon = ({weather}) => {
    const weatherIcons = {
        Clear: SunnyIcon,
        Rain: RainyIcon,
        Snow: SnowIcon,
        Clouds: CloudyIcon,
        Thunderstorm: ThunderIcon,
        Drizzle: RainyIcon,
        Mist: MistIcon,
        Haze: HazeIcon,
        Fog: FogIcon,
        Smoke: MistIcon,
        Dust: MistIcon,
        Tornado: ThunderIcon,
      };
    const WeatherIcon = weatherIcons[weather] || SunnyIcon; 
  return (
    <div className='cursor-pointer'>
        <img src={WeatherIcon} className='w-[140px] mt-8'/>
    </div>
  )
}

export default WeatherIcon