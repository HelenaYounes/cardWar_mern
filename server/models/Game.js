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
  userId: String,
  player: Object,
  bot: Object,
});

const Game = model("game", gameSchema);

const userSchema = new Schema({
  userId: String,
  games: Array,
});

const User = model("user", userSchema);

export { Card, Player, User, Game };
