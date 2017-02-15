import React from 'react'

const Search = (props) => {
  return(
    <div className="row">
      <div className="col-sm-6 col-sm-offset-2">
        <input className="form-control" />
      </div>
      <div className="col-sm-2">
        <button type="submit" className="btn btn-default">
          Search
        </button>
      </div>
    </div>
  )
}

export default Search