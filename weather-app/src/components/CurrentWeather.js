import React from 'react';

const CurrentWeather = (props) => {
  if (!props.city) {
    return <div className="text-center">Please enter your location.</div>
  }

  return(
    <div className="text-center current-weather">
      <div>
        <i className={`wi wi-current wi-owm-${props.icon}`}></i>
      </div>
      <div className="details">
        <div>
          {props.city}
        </div>
        <div>
          {Math.round(props.temp)} <i className="wi wi-temp-current wi-celsius"></i>
        </div>
        <div>
          {props.wind} m/s <i className={`wi wi-wind-current wi-wind from-${props.windDir}-deg`}></i>
        </div>
      </div>
    </div>
  )
}

export default CurrentWeather