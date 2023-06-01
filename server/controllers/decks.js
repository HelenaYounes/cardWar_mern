import axios from "axios";
import mongoose from "mongoose";
import db from "../config/db.js";
import { Card, User, Player, Game } from "../models/Game.js";

export const updateUserGames = async (req, res) => {
  const userId = req.body.userId;
  const query = { userId };
  const newGame = await createGameModel(userId);
  const update = { $push: { games: { newGame } } };
  const user = await User.findOneAndUpdate(query, update);
  res.json(newGame);
};

export const createGameModel = async (userId) => {
  const newDeck = await Card.aggregate([{ $sample: { size: 26 } }]);
  const newDeckBot = await Card.aggregate([{ $sample: { size: 26 } }]);
  const newPlayer = new Player({
    username: userId,
    cards: newDeck,
    score: 0,
  });
  const newBot = new Player({
    username: "bot",
    cards: newDeckBot,
    score: 0,
  });

  newPlayer.save();
  newBot.save();
  console.log(newBot);
  console.log(newPlayer);
  const newGame = new Game({
    userId,
    player: newPlayer,
    bot: newBot,
  });
  newGame.save();
  console.dir(newGame);
  return newGame;
};

export const findGame = async (req, res) => {
  const gameSelected = await Game.findOne({ _id: req.params.gameId })
    .exec()
    .then((game) => game.populate("user"));
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
  console.log(req.body.userId);
  const query = { userId: req.body.userId };
  const update = {
    /* the update object to apply if the document exists */
  };
  const options = {
    upsert: true, // Creates a new document if no match is found
    new: true, // Returns the updated document
  };

  const user = await User.findOneAndUpdate(query, update, options)
    .then((result) => result)
    .catch((error) => console.error(error));
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
export const listGames = async (req, res) => {
  const user = await User.findOne({ userId: req.params.userId }).exec();

  res.json(user);
};
