import axios from "axios";
// import { PromiseProvider } from "mongoose";

export default {
  // Gets all books
  getBooks: function() {
    return axios.get("/api/cards");
  },

  // Gets the book with the given id
  getCards: function(id) {
    return axios.get("/api/cards/" + id);
  },

  // Deletes the book with the given id
  deleteCards: function(id) {
    console.log(id);
    return axios.delete("/api/cards/" + id);
  },

  savedCards: function(savedCards) {
    console.log(savedCards);
    //const postData = { name: savedCards.name, id: savedCards.id, artist: savedCards.artist, image:savedCards.image, attack: savedCards.attack, attackDamage: savedCards.attackDamage, description: savedCards.description, hp: savedCards.hp}
    return axios.post("/api/cards/", savedCards);
  },

};
