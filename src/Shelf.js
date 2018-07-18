import React, { Component } from 'react'
import Book from './Book'

class Shelf extends Component {
  state = {
      status: 'update'
  }


  render () {
    const { name, books, shelf, updateShelf, showDetails } = this.props
    const { status } = this.state
    return (
      <div>
        <div className="bookshelf">
          <h2 className="bookshelf-title">{name}</h2>
          <div className="bookshelf-books">
            <ol className="books-grid">
              {books.filter(book => book.shelf === shelf).map((book) => (
                <li key={book.id}>
                  <Book
                    books={books}
                    updateShelf={updateShelf}
                    book={book}
                    showDetails={showDetails}
                    status={status}
                  />
                </li>
                ))
              }
            </ol>
            {(books.length === 0) && (
              <div className="shelf-status">
                <p className="message animation"><mark className="loading">loading</mark></p>
              </div>
            )}
            {(books.length !== 0) && (books.filter(book => book.shelf === shelf).length === 0) && (
              <div className="shelf-status">
                <p className="message"><mark>no books selected</mark></p>
              </div>
            )}
          </div>
        </div>
      </div>
    )
  }
}

export default Shelf
