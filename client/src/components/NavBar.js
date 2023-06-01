import { Link } from "react-router-dom";
import { useContext } from "react";
import { DeckContext, DeckContextDispatch } from "../context/DeckContext";

const NavBar = () => {
  const state = useContext(DeckContext);
  const dispatch = useContext(DeckContextDispatch);
  return state.isLogged ? (
    <>
      <Link to={`/${state.user.userId}`}>Home</Link>
      <Link to="/" onClick={() => dispatch({ type: "logOut" })}>
        SignOut
      </Link>
    </>
  ) : (
    <>
      <Link to="/signin">SignIn</Link>
      <Link to="/">Home</Link>
    </>
  );
};

export default NavBar;
