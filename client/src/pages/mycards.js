import React, { Component } from "react";
import Results from "../components/results";
import API from "../utils/API"

class Mycards extends Component {
    state = { 
        books: []
    }

    componentDidMount() {
        this.loadBooks();
      }

      loadBooks = () => {
        API.getBooks()
          .then(res =>
            this.setState({ books: res.data })
          )
          .catch(err => console.log(err));
      };

    render() { 
        console.log(this.state.books)
        return ( <Results booksProp={this.state.books} /> );
    }
}
 
export default Mycards;