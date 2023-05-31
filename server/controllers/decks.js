import axios from "axios";
import mongoose from "mongoose";
import db from "../config/db.js";
import { Card, User, Player, Game } from "../models/Game.js";

export const createGame = async (req, res) => {
  const { username } = req.body;
  const user = await User.findOne({ username });
  const deck = await Card.aggregate([{ $sample: { size: 26 } }]);
  const deckBot = await Card.aggregate([{ $sample: { size: 26 } }]);
  const newPlayer = await new Player({
    username,
    cards: deck,
    score: 0,
  });
  const newBot = await new Player({
    username: "Bot",
    cards: deckBot,
    score: 0,
  });

  newPlayer.save();
  newBot.save();
  const newGame = await Game.create({
    player: newPlayer,
    bot: newBot,
    user: user._id,
  });
  await newGame.populate("user");
  res.json(newGame);
};

export const findGame = async (req, res) => {
  const gameSelected = await Game.findOne({ _id: req.params.gameId });
  console.dir(gameSelected);
  res.json(gameSelected);
};

export const createCards = async (req, res) => {
  const cards = await axios.get(
    "https://www.deckofcardsapi.com/api/deck/new/draw/?count=52"
  );
  const list = await cards.data.cards;
  const cardList = await Card.insertMany(list);
  console.log(list);
  res.json(list);
};

export const signinUser = async (req, res) => {
  console.log(req.body);
  const { username } = req.body;
  let user = await User.findOne({ username });
  if (!user) {
    user = await User.create({ _id: new mongoose.Types.ObjectId(), username });
    console.log("new user created");
  } else console.log("user found");
  res.json(user);
};

export const findCard = async (req, res) => {
  const card = await Card.findOne({ _id: req.params.id });
  res.json(card);
};
export const listCards = async (req, res) => {
  const cards = await Card.find();
  res.json(cards);
};
