import React, { Component } from 'react';

class SearchBar extends Component {

  constructor(props) {
    super(props)

    this.state = {}
  }

  render() {
    return (
      <form>
        <input type="text" placeholder="Search TV Shows" onChange={this.props.handleChange} value={this.props.searchTerm}/>
        <button type="submit">Search</button>
      </form>
    )
  }
}

export default SearchBar;
