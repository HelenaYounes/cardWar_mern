import { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import { DeckContext, DeckContextDispatch } from "../context/DeckContext";
import Deck from "./Deck";

const Board = () => {
  const state = useContext(DeckContext);
  const dispatch = useContext(DeckContextDispatch);
  const [playerCards, setPlayerCards] = useState(state.player.cards);
  const [botCards, setBotCards] = useState(state.bot.cards);
  let deckId = useParams();

  const getDeck = () => {
    let url = "http://localhost:4000/decks/" + deckId.id;
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        let bot = structuredClone(data.bot);
        let player = structuredClone(data.player);
        setBotCards(bot);
        setPlayerCards(player);
        dispatch({ type: "saveDecks", playerCards: player, botCards: bot });
      });
  };

  const checkWinner = () => {
    let playerCard = state.player.cards[state.round].value;
    let botCard = state.bot.cards[state.round].value;
    dispatch({ type: "incScore", payload: playerCard > botCard });
  };

  useEffect(() => {
    getDeck();
  }, []);

  return (
    <div>
      {[true, false].map((isPlayer) => (
        <Deck player={isPlayer} cards={isPlayer ? playerCards : botCards} />
      ))}

      <button className="centered" onClick={checkWinner}>
        Next
      </button>
    </div>
  );
};

export default Board;
