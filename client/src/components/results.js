import React from "react";
import BookCard from "./BookCard";

const Results = props => {
  console.log(props);
  return (
    <div>
      <div>
        {props.booksProp ? (
          props.booksProp.map((book, i) => {
            var info = book;
            return (
              <BookCard
                key={i}
                title={info.name}
                author={info.attacks[0].name}
                description={info.rarity}
                image={info.imageUrlHiRes}
              />
            );
          })
        ) : (
          <h3>No Results to Display</h3>
        )}
      </div>
    </div>
  );
};

export default Results;
