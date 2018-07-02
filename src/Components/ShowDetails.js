import React from 'react';

export default class ShowDetails extends React.Component {
  componentDidMount() {
    window.scrollTo(0,0)
  }

  componentDidUpdate() {
    window.scrollTo(0,0)
  }

  render() {
    let { name, id, image, summary, premiered, status, rating } = this.props.show
    return (
      <div>
        <hr />
        <h1>{name}</h1>
        <img src={image.medium} />
        <p><span style={{ fontWeight: 'bold' }}>Premiered:</span> {premiered}</p>
        <p><span style={{ fontWeight: 'bold' }}>Status: {status}</span></p>
        <p><span style={{ fontWeight: 'bold' }}>Rating: {rating.average}</span></p>
        <p>{summary}</p>
        <hr />
      </div>
    )
  }
}
