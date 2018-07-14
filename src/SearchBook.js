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
  state = {
    searchTerms: [
      'Android',
      'Art',
      'Artificial Intelligence',
      'Astronomy', 'Austen',
      'Baseball', 'Basketball',
      'Bhagat', 'Biography', 'Brief',
      'Business', 'Camus', 'Cervantes',
      'Christie', 'Classics', 'Comics', 'Cook',
      'Cricket', 'Cycling', 'Desai', 'Design',
      'Development', 'Digital Marketing',
      'Drama', 'Drawing', 'Dumas', 'Education',
      'Everything', 'Fantasy', 'Film', 'Finance',
      'First', 'Fitness', 'Football', 'Future', 'Games', 'Gandhi', 'Homer', 'Horror', 'Hugo', 'Ibsen',
      'Journey', 'Kafka', 'King', 'Lahiri', 'Larsson', 'Learn', 'Literary Fiction', 'Make', 'Manage', 'Marquez',
      'Money', 'Mystery', 'Negotiate', 'Painting', 'Philosophy', 'Photography', 'Poetry', 'Production', 'Programming',
      'React', 'Redux', 'River', 'Robotics', 'Rowling', 'Satire', 'Science Fiction', 'Shakespeare', 'Singh', 'Swimming',
      'Tale', 'Thrun', 'Time', 'Tolstoy', 'Travel', 'Ultimate', 'Virtual Reality', 'Web Development', 'iOS'
    ]
  }


  render () {
    const { books, query, updateQuery, updateShelf } = this.props

    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link
            className="close-search"
            to="/"
          >Close</Link>
          <SearchInput
            updateQuery={updateQuery}
          />
        </div>
        <div className="search-books-results">
          {books.length !== 0 && (
            <ol className="books-grid">
              {books.map((book) => (
                <li key={book.id}>
                  <Book
                    books={books}
                    updateShelf={updateShelf}
                    book={book}
                    // defaultValue to selected option as first and disabled value in 'search' view
                    defaultValue="move"
                  />
                  </li>
                ))
              }
            </ol>
          )}
          {/* query string is needed to check status of of error, inherit searchString state from parent <App> */}
          {(books.length === 0 && query === 'empty query') && (
            <div className="no-results">
              <p>No results</p>
            </div>
          )}
          {query === '' && (
            // showing message about backend API information from (SEARCH_TERMS.MD)
            <div className="empty-query">
              <p>NOTE:
                 The backend API uses a fixed set of cached search results and is limited to a particular set of search terms.
                 That list of terms are the <em><u>only</u></em> terms that will work with the backend:
              </p>
              <ol className="searching-info">
                {this.state.searchTerms.map( keyword => (
                  <li key={keyword} className="keyword">{keyword}</li>
                ))}
              </ol>
            </div>
          )}
        </div>
      </div>
    )
  }
}

export default SearchBook
