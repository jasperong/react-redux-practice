import React, { Component } from 'react';
import logo from '../logo.svg';
import '../styles/App.css';

import CurrentWeather from './CurrentWeather';
import Forecast from './Forecast';
import Search from './Search';

class App extends Component {
  render() {
    return (
      <div className="container">
        <Search />
        <CurrentWeather />
        <Forecast />
      </div>
    );
  }
}

export default App;
