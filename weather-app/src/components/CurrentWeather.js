import React from 'react';

const CurrentWeather = (props) => {

  return(
    <div className="text-center">
      <div>
        Icon: <img src={`http://openweathermap.org/img/w/${props.icon}.png`} />
      </div>
      <div>
        Location: {props.city}
      </div>
      <div>
        Temp: {props.temp}
      </div>
      <div>
        Wind Speed: {props.wind}
      </div>
    </div>
  )
}

export default CurrentWeather