import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { DeckContext, DeckContextDispatch } from "../context/DeckContext";
import "../css/signIn.css";

const SignIn = () => {
  const navigate = useNavigate();
  const state = useContext(DeckContext);
  const dispatch = useContext(DeckContextDispatch);
  const [user, setUser] = useState({
    userId: "",
  });

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
    console.log(JSON.stringify(user));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const fetchOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    };
    await fetch("http://localhost:4000/users", fetchOptions)
      .then((res) => res.json())
      .then((data) => {
        dispatch({ type: "logIn", payload: data });
        navigate(`/${user.userId}`);
      });
  };

  return (
    <div className="container">
      <div className="screen">
        <div className="screen__content">
          <form className="login" onSubmit={handleSubmit}>
            <div className="login__field">
              <i className="login__icon fas fa-user"></i>
              <input
                type="text"
                className="login__input"
                placeholder="User name / Email"
                name="userId"
                value={user.userId}
                onChange={handleChange}
              />
            </div>
            <button className="button login__submit">
              <span className="button__text">Log In Now</span>
              <i className="button__icon fas fa-chevron-right"></i>
            </button>
          </form>
        </div>
        <div className="screen__background">
          <span className="screen__background__shape screen__background__shape4"></span>
          <span className="screen__background__shape screen__background__shape3"></span>
          <span className="screen__background__shape screen__background__shape2"></span>
          <span className="screen__background__shape screen__background__shape1"></span>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
