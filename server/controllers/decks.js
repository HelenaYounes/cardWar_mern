import axios from "axios";
import mongoose from "mongoose";
import db from "../config/db.js";
import { Card, User, Player, Game } from "../models/Game.js";

export const updateUser = async (req, res) => {
  try {
    // Find the document
    const game = await Game.findOne({ userId: req.body.userId });

    if (!game) {
      console.log("Document not found.");
      game = await createGame(req.body.userId);
    } else {
      return game;
    }
  } catch (error) {
    console.error(error);
  }
};

// Asynchronously create a new model

// Update the document with the new model
// document.model = newModel;

// Save the updated document
//   const updatedDocument = await document.save();
//   console.log(updatedDocument);
// } catch (error) {
//   console.error(error);
// }

export const createGameModel = async (req, res) => {
  const userId = req.body.userId;
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
  res.json(newGame);
};

// export const returnGame = async (req, res) => {
//   const createdGame = await createGameModel(req.body.userId);

//   if (createdGame) {
//     res.json(createdGame);
//   } else {
//     res.status(500).json({ error: "Error creating Game" });
//   }
// };

// const newPlayer = await Card.aggregate([{ $sample: { size: 26 } }])
//   .exec()
//   .then((deck) =>
//     Player.create({
//       username: req.body.username,
//       cards: deck,
//       score: 0,
//     })
//   );
// const newBot = await Card.aggregate([{ $sample: { size: 26 } }])
//   .exec()
//   .then((deck) =>
//     Player.create({
//       username: "Bot",
//       cards: deck,
//       score: 0,
//     })
//   );
// const newGame = await User.findOne({ username: req.body.username })
//   .exec()
//   .then((user) =>
//     Game.create({
//       player: newPlayer,
//       bot: newBot,
//       user: user._id,
//     })
//   );
// const user = await User.findOne({ username: req.body.username })
//   .exec()
//   .then((user) => {
//     user.games.push(newGame);
//     user.save();
//   });
// res.json(newGame);

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
