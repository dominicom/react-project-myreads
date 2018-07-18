import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import Header from './Header';

import BookDetails from './BookDetails';
import Library from './Library';
import OpenSearch from './OpenSearch';
import SearchBook from './SearchBook';

import Footer from './Footer';

import * as BooksAPI from './utils/BooksAPI';
import './App.css';
import './Responsive.css';
import './Animations.css';



class App extends Component {
  state = {
    stack: [],
    searchQuery: [],
    searchString: '',
    bookDetails: [],
    searchResults: []
  };

  updateStack = () => {
    BooksAPI.getAll()
      .then((books) => {
        this.setState({ stack: books });
      })
      .catch(error => console.log(error));

  };

  searchResult = (query) => {

    if (query) {
      BooksAPI.search(query).then(books => {
        if (books.error) {
          this.setState({ searchQuery: [], searchString: books.error });
        } else {
          //sync function of shelf status in 'search' view
          this.syncShelf(books);

          this.setState({ searchQuery: books })
        }


      }).catch(error => console.log(error));

      this.setState({ searchString: query });


    } else {
       //empty query
       this.setState({ searchQuery: [] });
       this.setState({ searchString: '' });
    }
    //BooksAPI.search(query).then(books => console.log(books));
  };



  updateShelf = (book, shelf) => {
    BooksAPI.update(book, shelf).then(() => {
      console.log(`Moved "${book.title}" to "${shelf}" ID shelf`);
      this.updateStack();
    }).catch(error => console.log(error));
  };



  syncShelf = (books) => {
    books.map(book => (this.state.stack.filter((b) => b.id === book.id).map(b => book.shelf = b.shelf)))
  }



  componentDidMount() {
    this.updateStack();
  };


  // Open book details popup function when "Details" button is clicked
  showDetails = (book) => {
    this.setState({ bookDetails: book });
  };



  // Closing book details popup
  closeDetails = () => {
    this.setState({ bookDetails: [] });
  };




  render() {
    const { stack , searchQuery, searchString, bookDetails } = this.state
    return (
      <div className="app">
        <Header />

        {/* {console.log(process.env.PUBLIC_URL)} */}

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
            selectedBooks={stack}
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
