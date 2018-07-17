import React, { Component } from 'react';
import PlaceHolder from './icons/book-placeholder.svg';


class Book extends Component {
  updateShelf = (book, shelf) => {
    this.props.update(book, shelf);
  };
  showDetails = (book) => {
    this.props.showDetails(book);
    console.log(`clicked ${book.title}`);
  };

  render () {

    const { book, updateShelf, showDetails } = this.props;

    return (
      <div className="book">
        <div className="book-top">
          <div className="book-cover"
              style={{
                backgroundImage: `url(${book.imageLinks ? book.imageLinks.thumbnail : PlaceHolder})`
              }}>
          </div>
        </div>
        <div className="book-bottom">

            <div className="book-title">{book.title}</div>

            <div className="book-shelf-changer">
              <select
                onChange={(event) => updateShelf(book, event.target.value)}
                // manipulating defaultValue to have diffrent selected option in 'main' and 'search' view
                defaultValue={this.props.defaultValue}
              >
                <option value="move" disabled>Move to...</option>
                <option value="currentlyReading">Currently Reading</option>
                <option value="wantToRead">Want to Read</option>
                <option value="read">Read</option>
                <option value="none">None</option>
              </select>
            </div>
          </div>

          <div className="book-authors">
            {/* Condition due to prevent error and separate authors with comma and space  */}
            {book.authors ? book.authors.join(', ') : ''}
          </div>
          <button
            onClick={ (event) => showDetails(book)}
            className="button show-details"
          >Details...
          </button>

      </div>
    )
  }
}

export default Book
