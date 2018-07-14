import React, { Component } from 'react'
import PropTypes from 'prop-types'



class SearchInput extends Component {
  static propTypes = {
    updateQuery: PropTypes.func.isRequired
  }

  state = {
    query: ''
  }

  updateQuery = (query) => {
    this.setState({ query: query });
    this.props.updateQuery(query)
  }


  render () {
    //const { books } = this.props
    const { query } = this.state.query
    return (
      <div className="search-books-input-wrapper">
        {/*
          NOTES: The search from BooksAPI is limited to a particular set of search terms.
          You can find these search terms here:
          https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

          However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
          you don't find a specific author or title. Every search is limited by search terms.
        */}
        <form onSubmit={(event) => event.preventDefault()}>
        <input
          type="text"
          placeholder="Search by title or author"
          onChange={(event) => this.updateQuery(event.target.value)}
          value={query}
        />
      </form>
      </div>
    )
  }
}


export default SearchInput
