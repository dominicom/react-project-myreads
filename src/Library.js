import React, { Component } from 'react'

import Shelf from './Shelf'



class Library extends Component {

  render () {
    const { books, updateShelf, showDetails } = this.props
    return (
      <div className="book-shelf-container">
        <Shelf
          name="Currently Reading"
          books={books}
          updateShelf={updateShelf}
          showDetails={showDetails}
          shelf="currentlyReading"
        />
        <Shelf
          name="Want to Read"
          books={books}
          updateShelf={updateShelf}
          shelf="wantToRead"
          showDetails={showDetails}
        />
        <Shelf
          name="Read"
          books={books}
          updateShelf={updateShelf}
          shelf="read"
          showDetails={showDetails}
        />
      </div>
    )
  }
}

export default Library
