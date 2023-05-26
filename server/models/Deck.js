import mongoose from "mongoose";

const { Schema, model } = mongoose;
const deckSchema = new Schema({
  player: Array,
  bot: Array,
});

const Deck = model("deck", deckSchema);
export default Deck;
