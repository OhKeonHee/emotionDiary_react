import React from 'react'

const WeatherBtn = ({ id, name, onClick, isSelected }) => {
  const handleOnClick = () => {
    onClick(id, name)
  }
  return (
    <div className={['WeatherBtn', isSelected ? `WeatherBtn_on_${id}` : `WeatherBtn_off`].join(" ")} onClick={handleOnClick}>
      <button>{name}</button>
    </div>
  )
}

export default WeatherBtn
