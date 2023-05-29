import { useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import { DeckContext, DeckContextDispatch } from "../context/DeckContext";
import Deck from "./Deck";

const Board = () => {
  const state = useContext(DeckContext);
  const dispatch = useContext(DeckContextDispatch);
  // const round = state.round;
  // const playerCard = state.player.cards[round];
  // const botCard = state.bot.cards[round];
  // const botScore = state.bot.score;
  // const playerScore = state.player.score;
  let { gameId } = useParams();

  const getDeck = () => {
    let url = "http://localhost:4000/games/" + gameId;
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        dispatch({ type: "saveGame", payload: data });
      });
  };

  // const checkWinner = () => {
  //   dispatch({ type: "incScore", payload: playerCard.value > botCard.value });
  // };

  useEffect(() => {
    getDeck();
  }, []);
  useEffect(() => {
    console.log(JSON.parse(JSON.stringify(state)));
  }, [state]);
  return (
    <div className="achievements">
      <Deck player={state.player} />
      <Deck player={state.bot} />
    </div>
  );
};

export default Board;
