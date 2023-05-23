import { ObjectId } from "mongodb";
import mongoose from "mongoose";

const { Schema, model } = mongoose;
const deckSchema = new Schema({
  _id: ObjectId,
  cards: Array,
});

const Deck = model("deck", deckSchema);
export default Deck;
