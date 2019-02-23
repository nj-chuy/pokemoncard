import React, { Component } from 'react';
import Search from './Search';
// import bookCard from './bookCard';
import request from 'superagent';
import Results from './results';
// import API from '../utils/API';


class BookSearch extends Component {

    // constructor(props){
    //     super(props);
    //     this.
    // }

    state = {
        books: [],
        searchField: ''
    }

    bookApi = (event) => {
        event.preventDefault();
        request
            .get("https://api.pokemontcg.io/v1/cards?")
            .query({ name: this.state.searchField})
            .then((data) => {
                this.setState({ books: [...data.body.cards]})
                console.log(data);
                console.log(this.state.books);
            })
    }

    handleSearch = (event) => {
        console.log(event.target.value);
        this.setState({ searchField: event.target.value })
    }

    // handleIchooseYou = event => {
    //     event.preventDefault();
    //     if (this.state.title && this.state.author) {
    //       API.saveBook({
    //         title: this.state.title,
    //         author: this.state.author,
    //         synopsis: this.state.synopsis
    //       })
    //         .then(res => this.loadBooks())
    //         .catch(err => console.log(err));
    //     }
    //   };

    render() { 
        return (
            <div>
                <Search bookApiProp={this.bookApi} handleSearchProp={this.handleSearch}/>
                <Results booksProp={this.state.books}/>
            </div>
        );
    }
}
 
export default BookSearch;