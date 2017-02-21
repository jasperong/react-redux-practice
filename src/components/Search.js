import React, { Component } from 'react';
import { Typeahead } from 'react-bootstrap-typeahead';

const GOOGLE_KEY = 'AIzaSyDcFQmOtiza7NcZ_V7R9safFEwCk4PcS2M';

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
  

  handleChange(text) {
    console.log(text)
    this.setState({
      value: text
    })
  }

  handleSubmit(e) {
    e.preventDefault()
    fetch(`https://maps.googleapis.com/maps/api/geocode/json?address=${this.state.value}&key=${GOOGLE_KEY}`)
          .then((response) => response.json())
          .then((data) => {
            const lat = data.results[0].geometry.location.lat;
            const long = data.results[0].geometry.location.long;
          })
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
          })
    }

  render() {

    return(
      <div className="row search-bar">
        <form onSubmit={this.handleSubmit}>
          <div className="col-sm-5 col-sm-offset-3">
            <Typeahead options={this.state.citiesList}
                        onSearch={this.handleSubmit}
                        onInputChange={this.handleChange}
                        minLength={2}
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