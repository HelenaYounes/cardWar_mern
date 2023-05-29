import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../css/signIn.css";

const SignIn = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    username: "",
  });

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
    console.log(JSON.stringify(user));
  };

  const handleSubmit = async (e, req, res) => {
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
        console.log(data._id);
        navigate(`/${user.username}`);
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
                name="username"
                value={user.username}
                onChange={handleChange}
              />
            </div>
            {/* <div className="login__field">
              <i className="login__icon fas fa-lock"></i>
              <input
                type="text"
                className="login__input"
                placeholder="Password"
                name="pass"
              />
            </div> */}
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
