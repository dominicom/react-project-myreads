import React, { Component } from 'react'


class Book extends Component {
  displayAuthors = (author) => {
    return `<span className="book-author-name" key={${author}}>{${author}}</span>`
  }


  render () {
    const { book } = this.props
    return (
      <div className="book">
        <div className="book-top">
          <div className="book-cover"
              style={{
                backgroundImage: `url(${book.imageLinks ? book.imageLinks.thumbnail : ''})`
              }}>
          </div>

          <div className="book-shelf-changer">
            <select>
              <option value="move" disabled>Move to...</option>
              <option value="currentlyReading">Currently Reading</option>
              <option value="wantToRead">Want to Read</option>
              <option value="read">Read</option>
              <option value="none">None</option>
            </select>
          </div>
        </div>
        {/* TODO this.props.values */}
        <div className="book-title">{book.title}</div>
        <div className="book-authors">
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
