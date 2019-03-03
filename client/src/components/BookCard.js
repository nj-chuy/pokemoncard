import React from "react";
import API from "../utils/API";
import PokeBtn from "../components/button";

const BookCard = props => {
  var user = sessionStorage.getItem("userID");
  return (
    <div className="carousel slide">
      <div className="carousel-inner">
        <img src={props.image} className="d-block w-50" alt=""/>
        <div className="desc carousel-item active">
          <h2 className="card-title">{props.title}</h2>
          <h3>id: {props.id}</h3>
          <h3>1st Attack: {props.attack}</h3>
          <h3>Damage: {props.attackDamage}</h3>
          <h3>RARITY: {props.description}</h3>
          <h3>ARTIST: {props.artist}</h3>
          <h3>HP: {props.hp}</h3>
          <PokeBtn  
            onClick={()=>{API.savedCards({
                  name: props.title, 
                  id:props.id,
                  artist: props.artist,
                  image: props.image,
                  attack: props.attack, 
                  attackDamage: props.attackDamage, 
                  description: props.description, 
                  hp: props.hp,
                  userID: user
                })}}>
                  I choose YOU!
          </PokeBtn>
        </div>
      </div>
    </div>
  );
};

export default BookCard;
