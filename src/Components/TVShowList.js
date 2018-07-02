import React, { Component } from 'react';
import TVShow from './TVShow'

class TVShowList extends Component {

  render() {
    let allTVShows = this.props.shows.map(show => <TVShow
      name={show.name}
      image={show.image.medium}
      id={show.id}
      handleClick={this.props.handleClick}
      />)

    return (
      <div>
        {allTVShows}
      </div>
    )
  }

}

export default TVShowList;
