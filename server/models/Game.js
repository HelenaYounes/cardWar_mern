import mongoose from "mongoose";
import db from "../config/db.js";
import { ObjectId } from "mongodb";

const { Schema, model } = mongoose;

const cardSchema = new Schema({
  code: String,
  image: String,
  images: {
    svg: String,
    png: String,
  },
  value: String,
  suit: String,
});

const Card = model("card", cardSchema);

const playerSchema = new Schema({
  username: String,
  cards: [cardSchema],
  score: Number,
});

const Player = model("player", playerSchema);

const userSchema = new Schema({
  username: String,
});

const User = model("user", userSchema);

// const gameSchema = new Schema({
//   players: [playerSchema],
// });

// const Game = model("game", gameSchema);
export { Card, Player, User };
