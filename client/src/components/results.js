import React from "react";
import BookCard from "../components/BookCard";

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
                id={info.id}
                key={i}
                title={info.name}
                attack={(info.attacks) ? info.attacks[0].name : info.attack}
                attackDamage={(info.attacks) ? info.attacks[0].damage : info.attackDamage}
                description={(info.hasOwnProperty("rarity")) ? info.rarity : info.description}
                image={(info.hasOwnProperty("imageUrlHiRes")) ? info.imageUrlHiRes : info.image}
                artist={info.artist}
                hp = {info.hp}
                // resistances={info.resistances[0].type}
                // weaknesses = {info.weaknesses[0].type}
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
