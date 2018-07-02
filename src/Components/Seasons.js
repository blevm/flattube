import React, { Component } from 'react';

const Seasons = (props) => {
  return (
    <div>
      <ol>
        {props.episodes.map(ep=>{ return (<li>{ep.name}</li>) } ) }
      </ol>
    </div>
  )
}

export default Seasons;
