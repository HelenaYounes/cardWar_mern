import mongoose from "mongoose";
import { dbDecksConnection } from "../config/db.js";

const { Schema, model } = mongoose;
const deckSchema = new Schema({
  player: Array,
  bot: Array,
});

const Deck = dbDecksConnection.model("deck", deckSchema);
export default Deck;
