import React from 'react';

import ForecastSingle from './ForecastSingle';

const Forecast = (props) => {

  if (!props.forecast) {
    return <div> Loading.. </div>
  }

  return(
    <div className="row">
      { 
        props.forecast.map((day) => {
          return <ForecastSingle temp={day.main.temp}
                                  time={day.dt}
                                  wind={day.wind.speed}
                                  icon={day.weather[0].icon}
                                   />
        }) 
      }
    </div>
  )
}

export default Forecast