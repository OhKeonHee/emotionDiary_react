import React from 'react'
import { useState } from 'react';
import WeatherBtn from './WeatherBtn';

const Header = ({ state, handleChangeWeather }) => {
  const Year = new Date().getFullYear();
  const Month = new Date().getMonth() + 1;
  const Day = new Date().getDate();

  const weatherList = [
    {
      id: 1,
      name: '🌞',
    },
    {
      id: 2,
      name: '⛅',
    },
    {
      id: 3,
      name: '☔',
    },
    {
      id: 4,
      name: '⛄',
    },
  ]
  
  return (
    <div className='Header'>
      <div className='Header_Date'>
        <h4>{Year} 년</h4>
        <h4>{Month} 월</h4>
        <h4>{Day} 일</h4>
      </div>
      <div className='Header_Weather'>
        <h4>날씨</h4>
        <div className='Weather'>
          {weatherList.map((it) => (
            <WeatherBtn key={it.id} {...it} onClick={handleChangeWeather} isSelected={state.id === it.id} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Header
