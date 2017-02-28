import React, { Component } from 'react';
import axios from 'axios';

import '../styles/App.css';
import '../styles/weather-icons.min.css';
import '../styles/weather-icons-wind.min.css';

import CurrentWeather from './CurrentWeather';
import Forecast from './Forecast';
import Search from './Search';

const MASHAPE_KEY = 'CEyPIWnvp2mshzF7Qr39tgt2nvskp1q4dTOjsnDQC94hfK7oYf';
const API_KEY = '528998fd4f7072b2ad9ad59ad4502191';
const UNIT = 'metric';

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      city: '',
      currentTemp: '',
      currentWind: '',
      currentWindDir:'',
      currentIcon: '',
      forecast: ''
    }

    this.handleSubmit = this.handleSubmit.bind(this);
    this.fetchCurrent = this.fetchCurrent.bind(this);
    this.fetchForecast = this.fetchForecast.bind(this);
  }

  // Gets current weather conditions from API
  // Sets application state based on response
  // Passes various state params as props to CurrentWeather component
  fetchCurrent(city) {
    axios.get('https://community-open-weather-map.p.mashape.com/weather', 
      {
        params: {
          'q': city.toLowerCase(),
          'units': UNIT,
          'lang': 'en',
          'APPID': API_KEY
        },
        headers: {
          'X-Mashape-Key': MASHAPE_KEY
        }
      }).then((response) => {
          const data = response.data;
          this.setState({
                    city: `${data.name}, ${data.sys.country}`,
                    currentTemp: data.main.temp,
                    currentWind: data.wind.speed,
                    currentWindDir: data.wind.deg,
                    currentIcon: data.weather[0].id
                  })
      })
  }

  // Gets 5 day hourly forecast from API
  // Sets application state for forecast from response
  // Passes this.state.forecast as props to Forecast component
  fetchForecast(city) {
    axios.get('https://community-open-weather-map.p.mashape.com/forecast', 
      {
        params: {
          'q': city.toLowerCase(),
          'units': UNIT,
          'APPID': API_KEY
        },
        headers: {
          'X-Mashape-Key': MASHAPE_KEY
        }
      })
      .then((response) => {
            this.setState({ forecast: response.data.list })
          })
  }
  
  // Is passed as props to Search component
  // Calls fetchCurrent and fetchForecast when called by Search component
  handleSubmit(city) {
    this.setState({
      city: city
    })
    this.fetchCurrent(city);
    this.fetchForecast(city);
  }

  render() {
    return (
      <div className="container">
        <Search onSubmit={this.handleSubmit} />
        <CurrentWeather city={this.state.city}
                        temp={this.state.currentTemp}
                        windDir={this.state.currentWindDir}
                        wind={this.state.currentWind}
                        icon={this.state.currentIcon} 
                      />
        <Forecast forecast={this.state.forecast} />
      </div>
    );
  }
}

export default App;
