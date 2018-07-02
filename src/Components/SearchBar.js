import React, { Component } from 'react';

const SearchBar = (props) => {

  return (
    <form>
      <input type="text" placeholder="Search TV Shows" onChange={props.handleChange} value={props.searchTerm}/>
    </form>
  )
}

export default SearchBar;
