import express from "express";
import * as deck from "../controllers/decks.js";
import * as card from "../controllers/cards.js";

const router = express.Router();

router.get("/");
router.post("/decks", deck.create);

router.get("/decks/:id", deck.find);

router.delete("/deck/:id", deck.deleteDeck);

router.get("/card", card.find);

export default router;
