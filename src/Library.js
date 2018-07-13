import React, { Component } from 'react'
import Shelf from './Shelf'

class Library extends Component {
  render () {
    const { books } = this.props
    return (
      <div>
        <Shelf
          name="Currently Reading"
          books={books}
          shelf="currentlyReading"
        />
        <Shelf
          name="Want to Read"
          books={books}
          shelf="wantToRead"
        />
        <Shelf
          name="Read"
          books={books}
          shelf="read"
        />
      </div>
    )
  }
}

export default Library
