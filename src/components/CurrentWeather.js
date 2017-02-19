import React from 'react';

const CurrentWeather = (props) => {
  if (!props.city) {
    return <div className="text-center">Please enter your location.</div>
  }

  return(
    <div className="text-center">
      <div className="current-weather">
        <h1 id="city-h1">
          {props.city}
        </h1>
        <div>
          <i className={`wi wi-current wi-owm-${props.icon}`}></i>
        </div>
        <div className="details">
          <div>
            {Math.round(props.temp)} <i className="wi wi-temp-current wi-celsius"></i>
          </div>
          <div>
            {props.wind} m/s <i className={`wi wi-wind-current wi-wind from-${props.windDir}-deg`}></i>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CurrentWeather