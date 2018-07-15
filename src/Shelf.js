import React, { Component } from 'react'
import Book from './Book'

class Shelf extends Component {
  render () {
    const { name, books, shelf, updateShelf, showDetails } = this.props
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
                    // defaultValue to selected option as actual shelf value in 'main' view
                    defaultValue={book.shelf}
                    book={book}
                    showDetails={showDetails}
                  />
                </li>
                ))
              }


            </ol>
            {(books.length === 0) && (
              <div className="shelf-status">
                <p>{`Loading...`}</p>
              </div>
            )}
            {(books.length !== 0) && (books.filter(book => book.shelf === shelf).length === 0) && (
              <div className="shelf-status">
                <p>{`No books selected`}</p>
              </div>
            )}
          </div>
        </div>
      </div>
    )
  }
}

export default Shelf
