import React, { Component } from 'react';
import Awesomplete from '../vendor/awesomplete.js';

class Search extends Component {
  constructor(props) {
    super(props)
    this.state = {
      value: '',
      citiesList: []
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  

  handleChange(e) {
    this.setState({
      value: e.target.value
    })
  }

  handleSubmit(e) {
    e.preventDefault()
    this.props.onSubmit(this.state.value)
  }

  componentDidMount() {
    fetch('http://data.okfn.org/data/core/world-cities/r/world-cities.json')
          .then(response => response.json())
          .then((data) => {
            this.setState({
              citiesList: data.map((city) => {
                return `${city.name}, ${city.country}`
              })
            });
            new Awesomplete(this.searchInput, {
              list: this.state.citiesList
            })
          })
    }

  render() {

    return(
      <div className="row search-bar">
        <form onSubmit={this.handleSubmit}>
          <div className="col-sm-5 col-sm-offset-3">
            <input className="form-control awesomplete"
                  id="search-input"
                  ref={(input) => {this.searchInput = input}}
                  value={this.state.value} 
                  onChange={this.handleChange}
                  placeholder="Please enter your location" />
          </div>
          <div className="col-sm-2">
            <button type="submit" className="btn btn-default">
              Search
            </button>
          </div>
        </form>
      </div>
    )
  }
}

export default Search