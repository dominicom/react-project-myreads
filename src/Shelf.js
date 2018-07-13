import React, { Component } from 'react'
import Book from './Book'

class Shelf extends Component {
  render () {
    const { name, books, shelf } = this.props
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
                    onChangeCategory={this.props.onChangeCategory}
                    book={book}
                  />
                  </li>
                ))
              }
            </ol>
          </div>
        </div>
      </div>
    )
  }
}

export default Shelf
