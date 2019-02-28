import React, { Component } from "react";
import Search from "./Search";
import request from "superagent";
import Results from "./results";
// import MyCards from "./mycards";

class BookSearch extends Component {
  state = {
    books: [],
    searchField: ""
  };

  bookApi = event => {
    event.preventDefault();
    request
      .get("https://api.pokemontcg.io/v1/cards?")
      .query({ name: this.state.searchField })
      .then(data => {
        this.setState({ books: [...data.body.cards] });
        console.log(data);
        console.log(this.state.books);
      });
  };

  handleSearch = event => {
    console.log(event.target.value);
    this.setState({ searchField: event.target.value });
  };

  render() {
    return (
      <div>
        <Search
          bookApiProp={this.bookApi}
          handleSearchProp={this.handleSearch}
        />
        <div>
          <Results booksProp={this.state.books} />
          {/* <MyCards bookApiProp={this.bookApi} /> */}
        </div>
      </div>
    );
  }
}

export default BookSearch;
