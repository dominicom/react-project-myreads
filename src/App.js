import React, { Component } from 'react'
import { Route } from 'react-router-dom'

import Header from './Header'
import OpenSearch from './OpenSearch'
import SearchBook from './SearchBook'
import Library from './Library'

import * as BooksAPI from './utils/BooksAPI'
import './App.css'



class App extends Component {
  state = {
    stack: [],
    searchQuery: [],
    searchString: ''
  }

  updateStack () {
    BooksAPI.getAll()
      .then((books) => {
        this.setState({ stack: books })
        console.log(this.state.stack)
      })
      .catch(error => console.log(error));

    // LISTA KSIĄŻEK
    //BooksAPI.getAll().then(books => console.log(books))
    //BooksAPI.update(book, shelf).then(() => {/* Update the book shelf and application state */})))
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
      console.log(shelf)
      this.updateStack()
    })
  }

  componentDidMount() {
    this.updateStack()
  }

  render() {
    const { stack , searchQuery, searchString } = this.state
    return (
      <div className="app">
        <Header />
        <Route path={process.env.PUBLIC_URL + "/"} exact render={() => (
          <div className="list-books">

            <Library
              books={stack}
              updateShelf={this.updateShelf}
            />
            <OpenSearch />
          </div>
        )}/>

        <Route path={process.env.PUBLIC_URL + "/search"} render={() => (
          <SearchBook
            books={searchQuery}
            query={searchString}
            updateQuery={this.searchResult}
            updateShelf={this.updateShelf}
          />
        )}/>
      </div>
    )
  }
}

export default App
