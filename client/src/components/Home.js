import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  const createDeck = () => {
    const fetchOptions = {
      method: "POST",
      body: "",
      headers: {
        "Content-Type": "application/json",
      },
    };
    fetch("http://localhost:4000/decks", fetchOptions)
      .then((res) => res.json())
      .then((data) => {
        navigate("/decks/" + data._id);
      });
  };
  return (
    <>
      <header>Card War</header>
      <h1>Home page</h1>
      <button onClick={createDeck}>create deck</button>
      <footer>Footer</footer>
    </>
  );
};

export default Home;
