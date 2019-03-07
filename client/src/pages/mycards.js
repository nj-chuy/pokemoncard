import React, { Component } from "react";
// import Results from "../components/myResults";
import MyCard from "../components/MyCard";
import API from "../utils/API"


class Mycards extends Component {
    state = {
        books: []
    }

    componentDidMount() {
        this.loadBooks();
    }

    deleteCard = (_id) => {
        API.deleteCards(_id)
            .then(() => this.loadBooks())
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
        return (
            <div>
                <div>
                    {this.state.books ? (
                        this.state.books.map((book, i) => {
                            var info = book;
                            return (
                                // <span>
                                //     <h1>Your PokeDeck Collection</h1>
                                //     <NavBar />
                                // </span>
                                <MyCard
                                    _id={info._id}
                                    id={info.id}
                                    key={i}
                                    title={info.name}
                                    attack={(info.attacks) ? info.attacks[0].name : info.attack}
                                    attackDamage={(info.attacks) ? info.attacks[0].damage : info.attackDamage}
                                    description={(info.hasOwnProperty("rarity")) ? info.rarity : info.description}
                                    image={(info.hasOwnProperty("imageUrlHiRes")) ? info.imageUrlHiRes : info.image}
                                    artist={info.artist}
                                    hp={info.hp}
                                    delete={() => this.deleteCard(info._id)}
                                />
                        );
                        })
                    ) : (
                            <h3>No Results to Display</h3>
                        )}
                </div>
            </div>
            // <Results booksProp={this.state.books} delete={()=>this.deleteCard()} /> 
        );
    }
}

export default Mycards;