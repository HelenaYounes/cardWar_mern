import express from "express";
import * as deck from "../controllers/decks.js";

const router = express.Router();

router.get("/");
router.post("/users", deck.createUser);
router.post("/decks", deck.createPlayer);
router.get("/decks/:deckId", deck.findPlayer);

router.get("/decks/:deckId", deck.findDeck);

// router.delete("/decks/:id", deck.deleteDeck);

// router.get("/card", deck.findCard);

export default router;
