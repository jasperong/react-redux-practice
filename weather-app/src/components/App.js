import React, { Component } from 'react';
import logo from '../logo.svg';
import '../styles/App.css';

import CurrentWeather from './CurrentWeather';
import Forecast from './Forecast';
import Search from './Search';

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      city: 'Toronto',
      currentTemp: '',
      currentWind: '',
      currentIcon: ''
    }
  }

  componentDidMount() {
    const API_KEY = '528998fd4f7072b2ad9ad59ad4502191';
    const CITY = 'toronto';
    const UNIT = 'metric';

    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${CITY}&units=${UNIT}&APPID=${API_KEY}`)
          .then(response => response.json())
          .then((data) => {
            console.log(data);
            console.log(data.main.temp_max)
            this.setState({
              city: `${data.name}, ${data.sys.country}`,
              currentTemp: data.main.temp,
              currentWind: data.wind.speed,
              currentIcon: data.weather[0].icon
            })
          })
  }

  render() {
    return (
      <div className="container">
        <Search />
        <CurrentWeather city={this.state.city}
                        temp={this.state.currentTemp}
                        wind={this.state.currentWind}
                        icon={this.state.currentIcon} 
                      />
        <Forecast />
      </div>
    );
  }
}

export default App;
