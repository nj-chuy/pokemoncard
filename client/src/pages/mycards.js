import React, { Component } from "react";
import Results from "../components/myResults";
import API from "../utils/API"

class Mycards extends Component {
    state = { 
        books: []
    }

    componentDidMount() {
        this.loadBooks();
      }

      loadBooks = () => {
        var userID = sessionStorage.getItem("userID");
        API.getBooks(userID)
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