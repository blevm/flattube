import React, { Component } from 'react';

class TVShow extends Component {

  constructor(props) {
    super(props)

    this.state = {}
  }

  render() {
    return (
      <div onClick={() => {this.props.handleClick(this.props.id)}}>
        <h4>{this.props.name}</h4>
        <img src={this.props.image} />
      </div>
    )
  }
}

export default TVShow;
