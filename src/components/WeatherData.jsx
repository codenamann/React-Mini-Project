import { Waves, Wind } from 'lucide-react'
import React from 'react'

const WeatherData = ({windSpeed, humidity}) => {
  return (
    <div className='w-full text-white flex justify-between'>
        <div className='flex items-start gap-[12px] text-[22px]'>
            <Waves className='mt-2.5' />
            <div className='text-[16px]'>
                <p>{humidity} %</p>
                <p>Humidity</p>
            </div>
        </div>
        <div className='flex items-start gap-[12px] text-[22px]'>
            <Wind className='mt-2.5'/>
            <div className='text-[16px]'>
                <p>{windSpeed} Km/h</p>
                <p>Wind Speed</p>
            </div>
        </div>
    </div>
  )
}

export default WeatherData