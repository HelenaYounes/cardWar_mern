import { useContext } from "react";
import { DeckContext, DeckContextDispatch } from "../context/DeckContext";

const Deck = ({ isPlaying, children }) => {
  const { score } = useContext(DeckContext);
  const { dispatch } = useContext(DeckContextDispatch);
  return { children };
};

export default Deck;
