import { useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import { DeckContext, DeckContextDispatch } from "../context/DeckContext";
import Deck from "./Deck";
import "../App.css";

const Board = () => {
  const state = useContext(DeckContext);
  const dispatch = useContext(DeckContextDispatch);
  const { isTurned, player, bot, round } = state;
  const playerCard = player.cards[round].value;
  const botCard = bot.cards[round].value;

  let { gameId } = useParams();

  const checkWinner = () => {
    const winner = playerCard > botCard ? "player" : "bot";
    // const wins = Math.max(playerCard, botCard);
    const newScore = state[winner].score + 1;
    dispatch({
      type: "incScore",
      payload: { key: winner, value: newScore },
    });
  };
  const onClickHandler = () => {
    isTurned ? checkWinner() : dispatch({ type: "turnCard" });
  };

  return (
    <main>
      <div className="achievements">
        <div className="work">
          <Deck player={player} />
        </div>
        <button onClick={onClickHandler}>
          {isTurned ? "Next Round" : "Draw card"}
        </button>
        <div className={isTurned ? "work" : "transitionDiv"}>
          <Deck player={bot} />
        </div>
      </div>
      <div className="about-me">
        <h2>
          Player Score ={player.score} Bot Score = {bot.score}
        </h2>
      </div>
    </main>
  );
};

export default Board;
