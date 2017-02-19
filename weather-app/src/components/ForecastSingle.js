import React from 'react'

const ForecastSingle = (props) => {
  const date = new Date(props.time * 1000),
        hours = date.getHours()

  return(
     <div className="col-sm-3 text-center">
       <div className="forecast-single">
        <div>
          <i className={`wi wi-time wi-time-${hours < 12 ? hours : hours - 12}`} ></i>
          {hours < 12 ? `${hours} AM` : `${hours - 12} PM`}
        </div>
        <div>
          <i className={`wi wi-owm-${props.icon}`} ></i>
        </div>
        <div>
          {Math.round(props.temp)} <i className="wi wi-temp wi-celsius"></i>
        </div>
        <div>
          {props.wind} m/s <i className={`wi wi-wind from-${props.windDir}-deg`}></i>
        </div>
      </div>
    </div>
  )
}

export default ForecastSingle