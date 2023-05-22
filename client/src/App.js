import { Routes, Route } from "react-router-dom";
import Home from "./components/Home.js";
import Deck from "./components/Deck.js";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/deck" element={<Deck />} />
      </Routes>
    </div>
  );
}

export default App;
