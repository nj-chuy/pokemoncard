import axios from "axios";
// import { PromiseProvider } from "mongoose";

export default {
  // Gets all books
  getBooks: function(userID) {
    return axios.get("/api/cards/" + userID);
  },

  // Gets the book with the given id
  getCards: function(id) {
    return axios.get("/api/cards/" + id);
  },

  // Deletes the book with the given id
  deleteCards: function(_id) {
    console.log(_id);
    return axios.delete("/api/cards/" + _id);
  },

  savedCards: function(savedCards) {
    console.log("jesus" + savedCards);
    // const savedCards = { name: savedCards.name, id: savedCards.id, artist: savedCards.artist, image:savedCards.image, attack: savedCards.attack, attackDamage: savedCards.attackDamage, description: savedCards.description, hp: savedCards.hp}
    return axios.post("/api/cards/", savedCards);
  },

};
