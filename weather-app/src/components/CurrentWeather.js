import React from 'react';

const CurrentWeather = (props) => {

  return(
    <div className="text-center">
      <div>
        <i className={`wi wi-current wi-owm-${props.icon}`}></i>
      </div>
      <div>
        Location: {props.city}
      </div>
      <div>
        Temp: {Math.round(props.temp)} C
      </div>
      <div>
        Wind Speed: {props.wind}
      </div>
    </div>
  )
}

export default CurrentWeather