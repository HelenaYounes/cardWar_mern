import axios from "axios";
import db from "../config/db.js";
import Deck from "../models/Deck.js";
import Card from "../models/Card.js";
import { ObjectId } from "mongodb";

export const create = async (req, res, next) => {
  const cardsList = await Card.find();
  const newDeck = await Deck.create({ _id: new ObjectId(), cards: cardsList });
  res.json(newDeck);
};

export const find = async (req, res) => {
  console.log(req.params);
  const deckSelected = await Deck.findOne({ _id: req.params.id });
  res.json(deckSelected);
};

export const deleteDeck = async (req, res) => {
  await Deck.deleteOne({ _id: req.params.id });
  res.send(`deleted deck _id: ${req.params.id}`);
};
