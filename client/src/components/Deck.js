import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDeckContext } from "../context/DeckContext.js";
import Card from "./Card";
import backcard from "../images/backcard.jpg";

const Deck = () => {
  const { id } = useParams();
  const { state, dispatch } = useDeckContext();
  const [round, setRound] = useState(0);
  const [playerCards, setPlayerCards] = useState([]);
  const [botCards, setBotCards] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:4000/decks/${id}`)
      .then((res) => res.json())
      .then((data) =>
        dispatch({
          type: "getDeck",
          payload: { data },
        })
      );
  }, []);

  const cardImage = backcard;

  return (
    <>
      <div className="split left">
        <div className="centered">
          <Card image={cardImage} />
        </div>
      </div>

      <div className="split right">
        <div className="centered">
          <Card image={cardImage} />
        </div>
      </div>
    </>
  );
};

export default Deck;
