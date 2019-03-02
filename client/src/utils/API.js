import axios from "axios";
// import { PromiseProvider } from "mongoose";

export default {
  // Gets all books
  getBooks: function() {
    return axios.get("/api/books");
  },
  // Gets the book with the given id
  getBook: function(id) {
    return axios.get("/api/books/" + id);
  },
  // Deletes the book with the given id
  deleteBook: function(id) {
    return axios.delete("/api/books/" + id);
  },
  // Saves a book to the database
  // saveBook: function(bookData) {
  //   // console.log(bookData);
  //   const postData = { name: bookData.name, id: bookData.id, artist: bookData.artist, imageUrlHiRes:bookData.imageUrlHiRes}
  //   return axios.post("/api/books/", postData);
  // },

  savedCards: function(savedCards) {
    console.log(savedCards);
    const postData = { name: savedCards.name, id: savedCards.id, artist: savedCards.artist, image:savedCards.image, attack: savedCards.attack, attackDamage: savedCards.attackDamage, description: savedCards.description, hp: savedCards.hp}
    return axios.post("/api/cards/", postData);
  },
  // Deletes the book with the given id
  // deleteBook: function(deleteCards) {
  //   const deleteData = { name: deleteCards.name, id: deleteCards.id, artist: deleteCards.artist, image:deleteCards.image, attack: deleteCards.attack, attackDamage: deleteCards.attackDamage, description: deleteCards.description, hp: deleteCards.hp}
  //   return axios.delete("/api/cards/", deleteData);
  // },

};
