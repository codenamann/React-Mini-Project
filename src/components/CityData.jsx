import React from 'react'

const CityData = ({temperature, location}) => {
  return (
    <div className='text-center'>
        <p className='text-white text-[78px] leading-none'>{temperature}°c</p>
        <p className='text-white text-[40px]'>{location}</p>
    </div>
  )
}

export default CityData