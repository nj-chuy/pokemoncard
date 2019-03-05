const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const bookSchema = new Schema({
  name: { type: String, required: true },
  id: { type: String, required: true },
  rarity: String,
  image: { type: String },
  damage: String,
  artist: String,
  hp: String,
  attack: String,
  userID: String,
});

const Book = mongoose.model("Book", bookSchema);

module.exports = Book;
