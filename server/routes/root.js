import express from "express";
import "../config/db.js";
import * as deck from "../controllers/decks.js";

const router = express.Router();

router.get("/deck", deck.create);

router.get("/", deck.list);

router.get("/deck/:id", deck.find);

router.delete("/deck/:id", deck.deleteDeck);

export default router;
