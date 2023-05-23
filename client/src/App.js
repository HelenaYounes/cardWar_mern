import { useReducer } from "react";
import { Routes, Route } from "react-router-dom";
import DeckContext from "./context/DeckContext.js";
import { deckReducer } from "./reducers/deckReducers.js";
import Home from "./components/Home.js";
import Deck from "./components/Deck.js";
import "./App.css";

const init = {
  deck: [],
  remaining: 52,
};

function App() {
  const [state, dispatch] = useReducer(deckReducer, init);
  const deckStateProvider = {
    state,
    dispatch,
  };
  return (
    <DeckContext.Provider value={deckStateProvider}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/deck" element={<Deck />} />
      </Routes>
    </DeckContext.Provider>
  );
}

export default App;
