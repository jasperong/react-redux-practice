import React, { Component } from 'react';
import axios from 'axios';
import { Typeahead } from 'react-bootstrap-typeahead';

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
  
  // Sets state according to current input value
  handleChange(text) {
    this.setState({
      value: text
    })
  }

  // Calls App components's submit handler which fetches the weather APIs
  handleSubmit(e) {
    e.preventDefault()
    this.props.onSubmit(this.state.value)
  }

  // Gets list of cities from API for autocomplete / typeahead functionality
  componentDidMount() {
    axios.get('https://raw.githubusercontent.com/lutangar/cities.json/master/cities.json')
          .then((response) => {
            const citiesList = response.data.map((city) => {
                return `${city.name}, ${city.country}`
              });
              
            this.setState({
              citiesList
            });
          })
    }

  render() {

    return(
      <div className="row search-bar">
        <form onSubmit={this.handleSubmit}>
          <div className="col-sm-5 col-sm-offset-3">
            {/* Vendor component for autocomplete */}
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