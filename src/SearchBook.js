import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { Link } from 'react-router-dom';
import Book from './Book';
import SearchInput from './SearchInput';



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
    const { books, query, updateQuery, updateShelf, showDetails, selectedBooks } = this.props

    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link
            className="close-search"
            to={process.env.PUBLIC_URL + "/"}
          >Close</Link>
          <SearchInput
            updateQuery={updateQuery}
          />
        </div>
        <div className="search-books-results">

          {books.length !== 0 && query.lentgh !== 0 && (
            <div className="results">
            <p><mark>RESULTS:</mark>{books.length} book(s) found</p>
            <ol className="books-grid">
              {books.map((book) => (
                <li key={book.id}>
                  <Book
                    books={books}
                    updateShelf={updateShelf}
                    book={book}
                    showDetails={showDetails}
                    selectedBooks={selectedBooks}

                    // defaultValue to selected option as first value
                    // in 'search' view value of shelf is displayed if book is allready selected
                    // in other case "none" is as default
                    defaultValue={book.shelf}


                  />
                  </li>
                ))
              }
            </ol>
          </div>
          )}

          {/* query string is needed to check status of of error, inherit searchString state from parent <App> */}
          {(books.length === 0 && query === 'empty query') && (
            <div className="no-results">
              <p className="message"><mark>no results</mark></p>
            </div>
          )}


          {!query && (
            // showing message about backend API information from (SEARCH_TERMS.MD)
            <div className="empty-query">
              <p className="message"><mark>NOTE:</mark>
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

          {query ? books.length === 0 && query !== 'empty query' && (
            <div className="results">
            <p className="message animation"><mark className="loading">searching</mark></p>
            </div>
          ) : undefined}


        </div>
      </div>
    )
  }
}

export default SearchBook
