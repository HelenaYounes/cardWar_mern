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
  value: Number,
  suit: String,
});

const Card = model("card", cardSchema);

const playerSchema = new Schema({
  username: String,
  cards: Array,
  score: Number,
});

const Player = model("player", playerSchema);

const gameSchema = new Schema({
  player: Object,
  bot: Object,
  user: { type: Schema.Types.ObjectId, ref: "user" },
});

const Game = model("game", gameSchema);

const userSchema = new Schema({
  _id: Schema.Types.ObjectId,
  username: String,
  games: [{ type: Schema.Types.ObjectId, ref: "game" }],
});

const User = model("user", userSchema);

export { Card, Player, User, Game };
