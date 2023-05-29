import axios from "axios";
import mongoose from "mongoose";
import db from "../config/db.js";
import { Card, User, Player, Game } from "../models/Game.js";

// export const createGame = async (req, res, next) => {
//   const newGame = await Game.create({ _id: new mongoose.Types.ObjectId() });
//   res.json(newGame._id);
// };

export const createGame = async (req, res) => {
  const { username } = req.body.username;
  const deck = await Card.aggregate([{ $sample: { size: 26 } }]);
  const deckBot = await Card.aggregate([{ $sample: { size: 26 } }]);
  const newPlayer = await new Player({
    username,
    cards: deck,
    score: 0,
  });
  const newBot = await new Player({
    _id: new mongoose.Types.ObjectId(),
    username: "Bot",
    cards: deckBot,
    score: 0,
  });

  newPlayer.save();
  newBot.save();
  const newGame = await Game.create({ player: newPlayer, bot: newBot });
  res.json(newGame);
};

export const findGame = async (req, res) => {
  const gameSelected = await Game.findOne({ _id: req.params.gameId });
  console.dir(gameSelected);
  res.json(gameSelected);
};

// export const deleteDeck = async (req, res) => {
//   await Deck.deleteOne({ _id: req.params.id });
//   res.send(`deleted deck _id: ${req.params.id}`);
// };
export const createCards = async (req, res) => {
  const cards = await axios.get(
    "https://www.deckofcardsapi.com/api/deck/new/draw/?count=52"
  );
  const list = await cards.data.cards;
  const cardList = await Card.insertMany(list);
  console.log(list);
  res.json(list);
};
export const createUser = async (req, res) => {
  console.log(req.body);
  const { username } = req.body;
  const newUser = await User.create({ username });
  console.log("new user created");
  res.json(newUser);
};

// export const findPlayer = async (req, res) => {
//   const player = await Player.findById({ _id: req.params.Id });
//   res.json(player);
// };
export const findCard = async (req, res) => {
  const card = await Card.findOne({ _id: req.params.id });
  res.json(card);
};
export const listCards = async (req, res) => {
  const cards = await Card.find();
  res.json(cards);
};
