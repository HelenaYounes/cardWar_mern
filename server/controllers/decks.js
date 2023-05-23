import axios from "axios";
import db from "../config/db.js";
import Deck from "../models/Deck.js";
import Card from "../models/Card.js";
import { ObjectId } from "mongodb";

// const apiUrl = "https://www.deckofcardsapi.com/api/deck/";
// const cards = db.collection("cards");
// const decks = db.collection("decks");

export const create = async (req, res, next) => {
  const cardsList = await Card.find();
  const newDeck = await Deck.create({ _id: new ObjectId(), cards: cardsList });
  res.json(newDeck);
};

export const list = async (req, res) => {
  const decksList = await Deck.find();
  console.log(decksList);
  res.json(decksList);
};

export const find = async (req, res) => {
  console.log(req.params);
  const deckSelected = await Deck.find({ id: req.params._id });
  res.json(deckSelected);
};

export const deleteDeck = async (req, res) => {
  await Deck.deleteOne({ id: req.params.id });
  res.send(`deleted deck id: ${req.params.id}`);
};
