import React, { Component } from 'react';

const TVShow = (props) => {

  return (
    <div onClick={() => {props.handleClick(props.id)}}>
      <h4>{props.name}</h4>
      <img src={props.image} />
    </div>
  )
}

export default TVShow;
