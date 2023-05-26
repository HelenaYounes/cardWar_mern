import { useContext } from "react";
import { DeckContext, DeckContextDispatch } from "../context/DeckContext";
import backCard from "../images/backcard.jpg";

const Card = ({ card }) => {
  const state = useContext(DeckContext);
  const dispatch = useContext(DeckContextDispatch);
  const isTurned = state.isTurned;

  return (
    <div>
      <img
        src={isTurned ? card.image : backCard}
        alt=""
        onClick={() => dispatch({ type: "turnCard" })}
      />
    </div>
  );
};
export default Card;
