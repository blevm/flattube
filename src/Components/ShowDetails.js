import React from 'react';
import Adapter from '../Adapter';
import Seasons from './Seasons';

export default class ShowDetails extends React.Component {

  state = {selectedSeasonsEpisodes: []}

  componentDidMount() {
    window.scrollTo(0,0)
  }

  componentDidUpdate() {
    window.scrollTo(0,0)
  }

  getUsThemSeezys = () => {
    let episodeSeasons = []
    this.props.episodes.map(episode=>{
      if (!episodeSeasons.includes(episode.season)){
        episodeSeasons.push(episode.season)
      }
    })
    return episodeSeasons
  }

  handleChangeOfSeason = (event) => {
    let theSeasonTheyChose = this.props.episodes.filter(ep => ep.season == event.target.value)
    this.setState({selectedSeasonsEpisodes: theSeasonTheyChose})
  }

  render() {
    let { name, id, image, summary, premiered, status, rating } = this.props.show
    console.log(this.getUsThemSeezys())
    return (
      <div>
        <hr />
        <h1>{name}</h1>
        <img src={image.medium} />
        <p><span style={{ fontWeight: 'bold' }}>Premiered:</span> {premiered}</p>
        <p><span style={{ fontWeight: 'bold' }}>Status:</span> {status}</p>
        <p><span style={{ fontWeight: 'bold' }}>Rating:</span> {rating.average}</p>

        <select onChange={this.handleChangeOfSeason} style={{display: "block"}} >
          {this.getUsThemSeezys().map(season=>{
            return <option value={season}>Season: {season}</option>
          })}
        </select>

        {this.state.selectedSeasonsEpisodes ? <Seasons episodes={this.state.selectedSeasonsEpisodes}/> : null}

        <p>{summary}</p>
        <hr />
      </div>
    )
  }
}
