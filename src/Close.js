import React, { Component } from 'react';
import Image from './icons/close.svg';

class Close extends Component {
  render () {
    const { onClick } = this.props;
    return (
      <button
        className="close"
        onClick={onClick}
        style={{
          backgroundImage: `url(${Image})`,
          width: 32,
          height: 32
        }}>Close</button>
    )
  }
}

export default Close
