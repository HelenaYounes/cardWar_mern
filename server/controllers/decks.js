import axios from "axios";
import db from "../config/db.js";
import Deck from "../models/Deck.js";
import Card from "../models/Card.js";
import User from "../models/User.js";

export const createDeck = async (req, res, next) => {
  const playerC = await Card.aggregate([{ $sample: { size: 26 } }]);
  const botC = await Card.aggregate([{ $sample: { size: 26 } }]);

  const newDeck = await Deck.create({ player: playerC, bot: botC });
  console.log("newdeck created");
  res.json(newDeck);
};

export const findDeck = async (req, res) => {
  const deckSelected = await Deck.findOne({ _id: req.params.id });
  console.dir(deckSelected);
  res.json(deckSelected);
};

export const deleteDeck = async (req, res) => {
  await Deck.deleteOne({ _id: req.params.id });
  res.send(`deleted deck _id: ${req.params.id}`);
};
export const createCards = async (req, res) => {
  const cards = await axios.get(
    "https://www.deckofcardsapi.com/api/deck/new/draw/?count=52"
  );
  const list = await cards.data.cards;
  const cardList = await Card.insertMany(list);
  res.json(list);
};
export const createUser = async (req, res) => {
  console.log(req.body);
  const { username, pass } = req.body;
  const newUser = {
    username,
    pass,
  };
  console.log(newUser);
  const newUserData = await User.create(newUser);
  console.log("new user created");
  res.json(newUserData);
};

export const findUser = async (req, res) => {
  const user = await User.findById({ _id: req.params.id });
  res.json(user);
};
