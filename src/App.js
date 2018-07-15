import React, { Component } from 'react'
import { Route } from 'react-router-dom'

import Header from './Header'

import BookDetails from './BookDetails'
import Library from './Library'
import OpenSearch from './OpenSearch'
import SearchBook from './SearchBook'

import Footer from './Footer'

import * as BooksAPI from './utils/BooksAPI'
import './App.css'



class App extends Component {
  state = {
    stack: [],
    searchQuery: [],
    searchString: '',
    bookDetails: []
  }

  updateStack () {
    BooksAPI.getAll()
      .then((books) => {
        this.setState({ stack: books })
        console.log(this.state.stack)
      })
      .catch(error => console.log(error));

    //BooksAPI.getAll().then(books => console.log(books))
  }

  searchResult = (query) => {
    if (query) {
      BooksAPI.search(query).then(books => {
        if (books.error) {
          this.setState({ searchQuery: [] })
          this.setState({ searchString: books.error })
        } else {
          this.setState({ searchQuery: books })
        }
      })
      this.setState({ searchString: query })

    } else {
       this.setState({ searchQuery: [] })
       this.setState({ searchString: '' })
    }
    //BooksAPI.search(query).then(books => console.log(books))
  }



  updateShelf = (book, shelf) => {
    BooksAPI.update(book, shelf).then(() => {
      console.log(`Moved "${book.title}" to "${shelf}" ID shelf`)
      this.updateStack()
    })
  }

  componentDidMount() {
    this.updateStack()
  }

  showDetails = (book) => {
    this.setState({ bookDetails: book })
    this.setState({ showingPopup: true })
    console.log(`showing details of ${book.title}`)
  }
  closeDetails = () => {
    this.setState({ bookDetails: [] })
    console.log(`closing details`)
  }

  render() {
    const { stack , searchQuery, searchString, bookDetails } = this.state
    return (
      <div className="app">
        <Header />
        {console.log(process.env.PUBLIC_URL)}

        {bookDetails.length !== 0 && (
          <BookDetails
            book={bookDetails}
            closeDetails={this.closeDetails}
          />
        )}

        <Route path={process.env.PUBLIC_URL + "/"} exact render={() => (
          <main className="list-books">
            <Library
              books={stack}
              updateShelf={this.updateShelf}
              showDetails={this.showDetails}
            />
            <OpenSearch />
          </main>

        )}/>

        <Route path={process.env.PUBLIC_URL + "/search"} render={() => (
          <main>
          <SearchBook
            books={searchQuery}
            query={searchString}
            updateQuery={this.searchResult}
            updateShelf={this.updateShelf}
            showDetails={this.showDetails}
          />
        </main>
        )}/>
        <Footer />
      </div>
    )
  }
}

export default App
