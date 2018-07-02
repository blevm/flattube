import React, { Component } from 'react';
import Adapter from './Adapter';
import TVShowList from './Components/TVShowList';
import './App.css';
import SearchBar from './Components/SearchBar';
import ShowDetails from './Components/ShowDetails';

class App extends Component {

  constructor() {
    super()

    this.state = {
      shows: [],
      selectedShow: null,
      searchTerm: '',
      filteredShows: []
    }
  }

  filterTheShows = () => {
    let filteredShowArray = this.state.shows.filter(show=>show.name.toLowerCase().includes(this.state.searchTerm.toLowerCase()))

    this.setState({filteredShows: filteredShowArray})
  }

  handleChange = (event) => {
    this.setState({searchTerm: event.target.value}, ()=>{this.filterTheShows()})
  }

  handleClick = (id) => {
    let singleShow = this.state.shows.find(show => show.id === id)

    this.setState({selectedShow: singleShow})
  }

  componentDidMount() {
    Adapter.getShows().then(shows =>
      this.setState({shows})
    )
  }

  render = () => {
    console.log(`in render`, this.state.filteredShows)
    return (
      <div>
        <SearchBar handleChange={this.handleChange} searchTerm={this.state.searchTerm}/>
        {this.state.selectedShow ? <ShowDetails show={this.state.selectedShow}/> : null}
        <TVShowList shows={this.state.shows} handleClick={this.handleClick} filteredShows={this.state.filteredShows}/>
      </div>
    );
  }

}

export default App;
