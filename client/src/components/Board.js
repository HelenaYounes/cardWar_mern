import { useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import { DeckContext, DeckContextDispatch } from "../context/DeckContext";
import Card from "./Card";

const Board = () => {
  const state = useContext(DeckContext);
  const dispatch = useContext(DeckContextDispatch);
  const round = state.round;
  const playerCard = state.player.cards[round];
  const botCard = state.bot.cards[round];
  const botScore = state.bot.score;
  const playerScore = state.player.score;
  let { deckId } = useParams();

  const getDeck = () => {
    let url = "http://localhost:4000/decks/" + deckId;
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        let bot = structuredClone(data.bot);
        let player = structuredClone(data.player);
        dispatch({ type: "saveDecks", playerCards: player, botCards: bot });
      });
  };

  const checkWinner = () => {
    dispatch({ type: "incScore", payload: playerCard.value > botCard.value });
  };

  useEffect(() => {
    getDeck();
  }, []);

  return (
    <div className="achievements">
      {[state.player, state.bot].map((playing) => {
        return (
          <div>
            <Card card={playing.cards[round]} />
            <h1>
              {playing.id} Score = {playing.score}
            </h1>
          </div>
        );
      })}

      <button
        className="centered"
        onClick={() =>
          state.isTurned
            ? checkWinner()
            : alert("click button below to draw card")
        }
      >
        Next
      </button>
    </div>
  );
};

export default Board;
