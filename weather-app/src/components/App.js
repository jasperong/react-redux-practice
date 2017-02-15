import React, { Component } from 'react';
import logo from '../logo.svg';
import '../styles/App.css';

import CurrentWeather from './CurrentWeather.js';
import Forecast from './Forecast.js';

class App extends Component {
  render() {
    return (
      <div>
        <CurrentWeather />
        <Forecast />
      </div>
    );
  }
}

export default App;
