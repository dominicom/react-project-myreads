import React, { Component } from 'react'



class Book extends Component {

  updateShelf = (book, shelf) => {
    this.props.update(book, shelf)
  }


  render () {
    const placeHolder =  './icons/book-placeholder.svg'  // 'http://via.placeholder.com/350x150'
    const { book, updateShelf } = this.props
    return (
      <div className="book">
        <div className="book-top">
          <div className="book-cover"
              style={{
                /* Condition due to prevent error because some books has no cover image
                /* Replace to placeholder icon */
                backgroundImage: `url(${book.imageLinks ? book.imageLinks.thumbnail : placeHolder})`
              }}>
          </div>


        </div>
        <div className="book-bottom">
          {/* <div> */}
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
          {/* </div> */}

          </div>

          <div className="book-authors">
            {/* Condition due to prevent error and separate authors with comma and space  */}
            {book.authors ? book.authors.join(', ') : ''}

            {/* {book.authors.map( (author) => (
              <span className="book-author-name" key={author}>{author}</span>
            ))} */}

          </div>


      </div>
    )
  }
}

export default Book
