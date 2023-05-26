import { useReducer } from "react";
import { Link } from "react-router-dom";
import { deckReducer } from "./reducers/deckReducers.js";
import { DeckContext, DeckContextDispatch } from "./context/DeckContext.js";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home.js";
import Board from "./components/Board.js";
import SignIn from "./components/SignIn.js";
import "./App.css";

let init = {
  _id: { $oid: "646d52bfc1bb005a2e8810f8" },
  player: {
    cards: [],
    score: 0,
  },
  bot: { cards: [], score: 0 },
  round: 0,
  isTurned: false,
};

function App() {
  const [state, dispatch] = useReducer(deckReducer, init);

  return (
    <DeckContext.Provider value={state}>
      <DeckContextDispatch.Provider value={dispatch}>
        <div>
          <header class="header">
            <a href="#" class="logo">
              Helena's War game
            </a>
            <nav class="nav-items">
              <Link to="/">HOME</Link>
              <Link to="/signIn">SignIn</Link>
              <a href="#">Contact</a>
            </nav>
          </header>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="signIn" element={<SignIn />} />
            <Route path="decks/:id" element={<Board />} />
          </Routes>
          <footer class="footer">
            <div class="copy">&copy; 2022 Developer</div>
            <div class="bottom-links">
              <div class="links">
                <span>More Info</span>
                <a href="#">Home</a>
                <a href="#">About</a>
                <a href="#">Contact</a>
              </div>
              <div class="links">
                <span>Social Links</span>
                <a href="#">
                  <i class="fab fa-facebook"></i>
                </a>
                <a href="#">
                  <i class="fab fa-twitter"></i>
                </a>
                <a href="#">
                  <i class="fab fa-instagram"></i>
                </a>
              </div>
            </div>
          </footer>
        </div>
      </DeckContextDispatch.Provider>
    </DeckContext.Provider>
  );
}

export default App;
