import React from 'react';
import {Button} from "react-bootstrap";
import {Link} from "react-router-dom";

// access props from bookSearch
const Search = (props) => {
    return (
        <div className="search">
            <form onSubmit={props.bookApiProp} action="">
                <input onChange={props.handleSearchProp} type="text" />
                {/* onChange will fire to event handler with each input */}
                {/* <button type="submit"></button> */}
                <Button type="submit" variant="secondary" size="sm">
                    Choose Your Pokemon!
                </Button>
                <Link to="/mycards">
                    <Button variant="secondary" size="sm">
                        Your Pokedeck
                </Button>
                </Link>
            </form>
        </div>
    )
}

export default Search;