import mongoose from "mongoose";

const { Schema, model } = mongoose;
const deckSchema = new Schema({
  success: Boolean,
  deck_id: String,
  shuffled: Boolean,
  remaining: Number,
});

const Deck = model("deck", deckSchema);
export default Deck;
