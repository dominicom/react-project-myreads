import React, { Component } from 'react'
import PropTypes from 'prop-types'



import { Link } from 'react-router-dom'
import Book from './Book'
import SearchInput from './SearchInput'

class SearchBook extends Component {
  static propTypes = {
    books: PropTypes.array.isRequired,
    updateQuery: PropTypes.func.isRequired
  }



  render () {
    const { books, updateQuery } = this.props
    //const { query } = this.state.query

    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link className="close-search"
            to='' // TODO
            // onClick={this.props.onNavigate}
          >Close</Link>
          <SearchInput
            updateQuery={updateQuery}
          />
        </div>


        {books.length !== 0 && (
        <div className="search-books-results">
          <ol className="books-grid">
            {books.map((book) => (
              <li key={book.id}>
                <Book
                  books={books}
                  // onChangeCategory={this.props.onChangeCategory}
                  book={book}
                />
                </li>
              ))
            }
          </ol>
        </div>)}

        {(books.length === 0
          // && query.length !== 0
        ) && (
          <div className="search-books-results">
            {`No book found`}
          </div>
        )}



      </div>
    )
  }
}

// SearchInput.propTypes = {
//   books: PropTypes.array.isRequired,
//   updateQuery: PropTypes.func.isRequired
// }

export default SearchBook
