import { ObjectId } from "mongodb";
import mongoose from "mongoose";

const { Schema, model } = mongoose;
const deckSchema = new Schema({
  cards: Array,
});

const Deck = model("deck", deckSchema);
export default Deck;
