import React, { Component } from 'react';
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
      currentIcon: '',
      forecast: ''
    }
  }

  componentDidMount() {
    const API_KEY = '528998fd4f7072b2ad9ad59ad4502191';
    const CITY = 'toronto';
    const UNIT = 'metric';

    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${CITY}&units=${UNIT}&APPID=${API_KEY}`)
          .then(response => response.json())
          .then((data) => {
            this.setState({
              city: `${data.name}, ${data.sys.country}`,
              currentTemp: data.main.temp,
              currentWind: data.wind.speed,
              currentIcon: data.weather[0].icon
            })
          })

    fetch(`http://api.openweathermap.org/data/2.5/forecast/city?q=${CITY}&units=${UNIT}&APPID=${API_KEY}`)
        .then(response => response.json())
        .then((data) => {
          this.setState({ forecast: data.list })
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
        <Forecast forecast={this.state.forecast} />
      </div>
    );
  }
}

export default App;
