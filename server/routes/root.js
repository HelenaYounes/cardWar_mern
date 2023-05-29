import express from "express";
import * as deck from "../controllers/decks.js";
import * as card from "../controllers/cards.js";

const router = express.Router();

router.get("/");
router.post("/users", deck.createUser);
router.post("/decks", deck.createDeck);

router.get("/decks/:id", deck.findDeck);

router.delete("/deck/:id", deck.deleteDeck);

router.get("/card", card.find);

export default router;
