const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const cardSchema = new Schema({
  name: { type: String, required: true },
  id: { type: String, required: true },
  rarity: String,
  imageUrlHiRes: { type: String },
  damage: String,
  artist: String,
  hp: String,
  attack: String,
});

const Card = mongoose.model("Card", cardSchema);

module.exports = Card;