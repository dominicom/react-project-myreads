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
    /**
     * TODO: Instead of using this state variable to keep track of which page
     * we're on, use the URL in the browser's address bar. This will ensure that
     * users can use the browser's back and forward buttons to navigate between
     * pages, as well as provide a good URL they can bookmark and share.
     */
    screen: 'main', // main, search
    stack: [],
    searchQuery: [],
    searchString: ''
  }
  componentDidMount() {
    BooksAPI.getAll().then((books) => {
      this.setState({ stack: books })
    })
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


    BooksAPI.search(query).then(books => console.log(books))
  }



  // changeCategory = (book, shelf) => {
  //     if (this.state.books) {
  //         BooksAPI.update(book, shelf).then(() => {
  //             book.shelf = shelf;
  //             this.setState(state => ({
  //                 books: state.books.filter(b => b.id !== book.id).concat([book])
  //             }))
  //         })
  //     }
  // }



  render() {
    const { stack , searchQuery, searchString } = this.state
    return (
      <div className="app">

        <Route exact path="/" render={() => (
          <div className="list-books">

            <Header />

            <Library
              books={stack}
            />

            <OpenSearch
              onNavigate={() => this.setState({ screen: 'search' })}
            />

          </div>
        )}/>

        <Route path='/search' render={() => (

          <SearchBook
            books={searchQuery}
            query={searchString}
            updateQuery={this.searchResult}
            onNavigate={() => this.setState({ screen: 'main' })}
          />
          
        )}/>

      </div>
    )
  }
}

export default App
