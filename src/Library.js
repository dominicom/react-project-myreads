import React, { Component } from 'react'

import Shelf from './Shelf'



class Library extends Component {

  render () {
    const { books, updateShelf } = this.props
    return (
      <main className="book-shelf-container">
        <Shelf
          name="Currently Reading"
          books={books}
          updateShelf={updateShelf}
          shelf="currentlyReading"
        />
        <Shelf
          name="Want to Read"
          books={books}
          updateShelf={updateShelf}
          shelf="wantToRead"
        />
        <Shelf
          name="Read"
          books={books}
          updateShelf={updateShelf}
          shelf="read"
        />
      </main>
    )
  }
}

export default Library
