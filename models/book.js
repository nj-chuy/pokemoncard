const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const bookSchema = new Schema({
  name: { type: String, required: true },
  id: { type: String, required: true },
  artist: String,
  imageUrlHiRes: { type: String }
});

const Book = mongoose.model("Book", bookSchema);

module.exports = Book;
