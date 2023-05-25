import axios from "axios";
import db from "../config/db.js";
import Deck from "../models/Deck.js";
import Card from "../models/Card.js";

export const create = async (req, res, next) => {
  const player = await Card.aggregate([{ $sample: { size: 26 } }]);
  const bot = await Card.aggregate([{ $sample: { size: 26 } }]);

  const newDeck = await Deck.create({ player: player, bot: bot });
  res.json(newDeck);
};

export const find = async (req, res) => {
  const deckSelected = await Deck.findOne({ _id: req.params.id });
  res.json(deckSelected);
};

export const deleteDeck = async (req, res) => {
  await Deck.deleteOne({ _id: req.params.id });
  res.send(`deleted deck _id: ${req.params.id}`);
};
