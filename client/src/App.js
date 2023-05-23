import { useReducer, useMemo } from "react";
import { Routes, Route } from "react-router-dom";
import DeckContext from "./context/DeckContext.js";
import { deckReducer } from "./reducers/deckReducers.js";
import Home from "./components/Home.js";
import Deck from "./components/Deck.js";
import backCard from "./images/backcard.jpg";
import "./App.css";

const deck = {
  _id: "",
  cards: [
    {
      image: backCard,
    },
  ],
};

function App() {
  const [state, dispatch] = useReducer(deckReducer, deck);
  const deckStateProvider = useMemo(() => {
    return { state, dispatch };
  }, [state, dispatch]);

  return (
    <DeckContext.Provider value={deckStateProvider}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/decks/:id" element={<Deck />} />
      </Routes>
    </DeckContext.Provider>
  );
}

export default App;
