import express from "express";
import "../config/db.js";
import * as deck from "../controllers/decks.js";
import * as card from "../controllers/cards.js";

const router = express.Router();

router.get("/deck", card.list);

router.get("/", deck.list);

router.get("/deck/:id", deck.find);

router.delete("/deck/:id", deck.deleteDeck);

router.get("/card", card.find);

export default router;
