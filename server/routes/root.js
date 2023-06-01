import express from "express";
import * as deck from "../controllers/decks.js";

const router = express.Router();

router.get("/");
router.post("/users", deck.signinUser);
router.post("/games", deck.createGame);
// router.get("/games/:gameId", deck.findGame);
router.get("/:username/games/", deck.listGames);

// router.delete("/decks/:id", deck.deleteDeck);

// router.get("/card", deck.findCard);

export default router;
