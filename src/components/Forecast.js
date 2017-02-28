import React from 'react';

import ForecastSingle from './ForecastSingle';

const Forecast = (props) => {

  if (!props.forecast) {
    return <div></div>
  }

  return(
    <div className="row">
      { 
        props.forecast.map((day) => {
          return <ForecastSingle temp={day.main.temp}
                                  time={day.dt}
                                  windDir={Math.round(day.wind.deg)}
                                  wind={day.wind.speed}
                                  icon={day.weather[0].id}
                                  key={day.dt}
                                   />
        }) 
      }
    </div>
  )
}

export default Forecast