import React, { Component } from 'react';
import PlaceHolder from './icons/book-placeholder.svg';


class Book extends Component {
  state = {
    status: this.props.status,
    pending: false
  }

  updateShelf = (book, shelf) => {
    this.setState({ pending: true })
    this.props.updateShelf(book, shelf);
  };


  showDetails = (book) => {
    this.props.showDetails(book);
    console.log(`clicked ${book.title}`);
  };

  render () {

    const { book, showDetails} = this.props;

    let selected = book.shelf ? 'picked' : 'none'

    return (
      <div className="book">
        <div className="book-top">
          <div className="book-cover"
              style={{
                backgroundImage: `url(${book.imageLinks ? book.imageLinks.thumbnail : PlaceHolder})`
              }}>
          </div>

          {/* if book is selected book compnent is marked with 'ribbon' */}
          {selected === 'picked' && this.state.status === 'selected' && (
            <div className="book-selected">
              <p className="message"><mark>picked</mark></p>
            </div>
          )}

        </div>
        <div className="book-bottom">
            <div className="book-title">{book.title}</div>
            <div className="book-shelf-changer">
              <select
                onChange={(event) => this.updateShelf(book, event.target.value)}
                defaultValue={book.shelf || 'none'}
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


          {/* During updating shelf showing update status on book component */}
          {this.state.pending && this.state.status === 'update' && (
            <div className="book-update">
              <p className="message animation"><mark className="loading">updating</mark></p>

            </div>
          )}
      </div>

    )
  }
}

export default Book
