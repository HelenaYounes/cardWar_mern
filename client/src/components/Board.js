import { useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import { DeckContext, DeckContextDispatch } from "../context/DeckContext";
import Card from "./Card";

const Board = () => {
  const state = useContext(DeckContext);
  const dispatch = useContext(DeckContextDispatch);
  // const round = state.round;
  // const playerCard = state.player.cards[round];
  // const botCard = state.bot.cards[round];
  // const botScore = state.bot.score;
  // const playerScore = state.player.score;
  let { deckId } = useParams();

  const getDeck = () => {
    let url = "http://localhost:4000/decks/" + deckId;
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        debugger;
      });
  };

  // const checkWinner = () => {
  //   dispatch({ type: "incScore", payload: playerCard.value > botCard.value });
  // };

  useEffect(() => {
    getDeck();
  }, []);

  return (
    <div className="achievements">
      <h1>BOArd</h1>
    </div>
  );
};

export default Board;
