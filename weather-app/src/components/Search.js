import React, { Component } from 'react'

class Search extends Component {
  constructor(props) {
    super(props)
    this.state = {
      value: ''
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
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

  render() {
    return(
      <div className="row">
        <form onSubmit={this.handleSubmit}>
          <div className="col-sm-6 col-sm-offset-2">
            <input className="form-control" value={this.state.value} onChange={this.handleChange} />
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