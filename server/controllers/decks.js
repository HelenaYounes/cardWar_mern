import axios from "axios";
import mongoose from "mongoose";
import db from "../config/db.js";
import { Card, User, Player, Game } from "../models/Game.js";

export const createGame = async (req, res) => {
  const newPlayer = await Card.aggregate([{ $sample: { size: 26 } }])
    .exec()
    .then((deck) =>
      Player.create({
        username: req.body.username,
        cards: deck,
        score: 0,
      })
    );
  const newBot = await Card.aggregate([{ $sample: { size: 26 } }])
    .exec()
    .then((deck) =>
      Player.create({
        username: "Bot",
        cards: deck,
        score: 0,
      })
    );
  const newGame = await User.findOne({ username: req.body.username })
    .exec()
    .then((user) =>
      Game.create({
        player: newPlayer,
        bot: newBot,
        user: user._id,
      })
    );
  const user = await User.findOne({ username: req.body.username })
    .exec()
    .then((user) => {
      user.games.push(newGame);
      user.save();
    });
  res.json(newGame);
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
  let user = await User.findOne({ username: req.body.username });
  if (!user) {
    user = await User.create({
      _id: new mongoose.Types.ObjectId(),
      username: req.body.username,
      games: [],
    });
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
export const listGames = async (req, res) => {
  const user = await User.findOne({ username: req.params.username }).exec();

  // console.dir(list);
  // const games = currentUser.games;
  res.json(user);
};
