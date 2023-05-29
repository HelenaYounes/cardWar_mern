import { useReducer } from "react";
import { Link } from "react-router-dom";
import { deckReducer } from "./reducers/deckReducers.js";
import { DeckContext, DeckContextDispatch } from "./context/DeckContext.js";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home.js";
import Board from "./components/Board.js";
import SignIn from "./components/SignIn.js";
// import "./css/signIn.css";
import "./App.css";

let init = {
  _id: { $oid: "646d52bfc1bb005a2e8810f8" },
  player: {
    id: "Player",
    cards: [],
    score: 0,
  },
  bot: { id: "Bot", cards: [], score: 0 },
  round: 0,
  isTurned: false,
};

function App() {
  const [state, dispatch] = useReducer(deckReducer, init);

  return (
    <DeckContext.Provider value={state}>
      <DeckContextDispatch.Provider value={dispatch}>
        <div>
          <header className="header">
            <a href="#" className="logo">
              Helena's War game
            </a>
            <nav className="nav-items">
              <Link to="/">SignIn</Link>
              {/* <Link to="/signIn">SignIn</Link> */}
              <a href="#">Contact</a>
              <a href="#">Contact</a>
            </nav>
          </header>
          <Routes>
            <Route exact path="/" element={<SignIn />} />
            <Route path="/:userId" element={<Home />} />
            <Route path="/:userId/decks/:deckId" element={<Board />} />
          </Routes>
          <footer className="footer">
            <div className="copy">&copy; 2022 Developer</div>
            <div className="bottom-links">
              <div className="links">
                <span>More Info</span>
                <a href="#">Home</a>
                <a href="#">About</a>
                <a href="#">Contact</a>
              </div>
              <div className="links">
                <span>Social Links</span>
                <a href="#">
                  <i className="fab fa-facebook"></i>
                </a>
                <a href="#">
                  <i className="fab fa-twitter"></i>
                </a>
                <a href="#">
                  <i className="fab fa-instagram"></i>
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
