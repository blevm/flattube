import React, { Component } from 'react';
import Adapter from './Adapter';
import TVShowList from './Components/TVShowList';
import './App.css';
import SearchBar from './Components/SearchBar';
import ShowDetails from './Components/ShowDetails';
import Seasons from './Components/Seasons';

class App extends Component {

  constructor() {
    super()

    this.state = {
      shows: [],
      selectedShow: null,
      searchTerm: '',
      filteredShows: [],
      episodes: []
    }
  }

  filterTheShows = () => {
    let filteredShowArray = this.state.shows.filter(show=>show.name.toLowerCase().includes(this.state.searchTerm.toLowerCase()))

    this.setState({filteredShows: filteredShowArray})
  }

  displayTheShows = () => {
    if (this.state.searchTerm !== ""){
      return this.state.filteredShows
    } else {
      return this.state.shows
    }
  }

  handleChange = (event) => {
    this.setState({searchTerm: event.target.value}, ()=>{this.filterTheShows()})
  }

  handleClick = (id) => {
    let singleShow = this.state.shows.find(show => show.id === id)

    Adapter.getShowEpisodes(id).then(episodes=>this.setState({selectedShow: singleShow, episodes }))
  }

  componentDidMount() {
    Adapter.getShows().then(shows =>
      this.setState({shows})
    )
  }

  render = () => {
    console.log(`in render`, this.state.episodes)
    return (
      <div>
        <SearchBar
          handleChange={this.handleChange}
          searchTerm={this.state.searchTerm}
          />
        {this.state.selectedShow ? <ShowDetails episodes={this.state.episodes} show={this.state.selectedShow}/> : null}
        <TVShowList shows={this.displayTheShows()} handleClick={this.handleClick}/>
      </div>
    );
  }

}

export default App;
