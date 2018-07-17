import React, { Component } from 'react';

import Close from './Close';
import PlaceHolder from './icons/book-placeholder.svg';




class BookDetails extends Component {
  render () {
    const { book, closeDetails } = this.props;
    return (
      <div className="book-details-screen">
        <Close
          onClick={(event) => closeDetails()}
        />
        <div className="book-details-container">
          <div className="book-cover"
              style={{
                backgroundImage: `url(${book.imageLinks ? book.imageLinks.thumbnail : PlaceHolder})`
              }}>
          </div>
          <div className="book-details">
            <h2>{book.title}</h2>
            {book.subtitle ? (book.subtitle.length !==0 && (
              <h4>{book.subtitle}</h4>
            )) : undefined}

            {book.averageRating ? (book.averageRating.length !==0 && (
              <div className="rating">{`rating: ${book.averageRating}`}</div>
            )) : (
              <div className="rating">NOT RATED</div>
            )}

            {book.authors ? (book.authors.length !==0 && (
              <div className="detailed-info authors">
              <span className="label">Author / Authors:</span>
              <span>{book.authors.join(', ')}</span>
              </div>
            )) : undefined}

            {book.publisher ? (book.publisher.length !==0 && (
              <div className="detailed-info published">
              <span className="label">Publisher:</span>
              <span>{book.publisher}</span>
              </div>
            )) : undefined}

            {book.publishedDate ? (book.publishedDate.length !==0 && (
              <div className="detailed-info published">
              <span className="label">Published:</span>
              <span>{book.publishedDate}</span>
              </div>
            )) : undefined}

            {book.pageCount ? (book.pageCount.length !==0 && (
              <div className="detailed-info pages">
              <span className="label">Page Count:</span>
              <span>{book.pageCount}</span>
              </div>
            )) : undefined}

            {book.language ? (book.language.length !==0 && (
              <div className="detailed-info language">
              <span className="label">Language:</span>
              <span>{book.language.toUpperCase()}</span>
              </div>
            )) : undefined}



            {/* <p>{book.description}</p> */}

            {book.categories ? (book.categories.length !==0 && (
            <ol className="category-tags">
              {book.categories.map( keyword => (
                <li key={keyword}>{keyword}</li>
              ))}
            </ol>)
            ) : undefined}
            <div className="book-details-buttons">
              {book.canonicalVolumeLink ? book.canonicalVolumeLink.length !==0 && (
                <a className="button" target="_blank"
                   href={book.canonicalVolumeLink}>Buy</a>
              ) : undefined}
              {book.infoLink ? book.infoLink.length !==0 && (
                <a className="button" target="_blank"
                   href={book.infoLink}>More...</a>
              ) : undefined}
              {book.previewLink ? book.previewLink.length !==0 && (
                <a className="button" target="_blank"
                   href={book.previewLink}>Preview</a>
              ) : undefined}
            </div>


          </div>
        </div>

      </div>
    )
  }
}

export default BookDetails
