import React, { useState } from "react";
import "./SignUp.css";
import { PropTypes } from "prop-types";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";

// function SignUp() {
//   const [action, setAction] = useState("Login");
const SignUp = ({ onSignUp }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    onSignUp({ name, email, password });

    const signupInfo = { name, email, password };
    localStorage.setItem("signupInfo", JSON.stringify(signupInfo));

    history.push("/");
  };

  const handleSignInClick = () => {
    window.location.href = "/login";
  };

  return (
    <div className="signUp">
      <img
        className="signUp__logo"
        src="https://freelogopng.com/images/all_img/1688361055amazon-logo-png.png"
        alt=""
      />

      <div className="signUp__container">
        <h1>Create account</h1>
        <form onSubmit={handleSubmit}>
          <h5>Your Name</h5>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="name"
          />
          <h5>E-mail</h5>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="e-mail"
          />
          <h5>Password</h5>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="enter password"
          />
          <h5>Re-enter Password</h5>
          <input type="password" placeholder="re-enter" />

          <button type="submit" className="signUp__continueButton">
            Continue
          </button>

          <p>
            By continuing, you agree to Amazon's Conditions of Use and Privacy
            Notice.
          </p>
          <p>
            Already have an account ?
            <Link onClick={handleSignInClick}>SignIn</Link>
          </p>
        </form>
      </div>
    </div>
  );
};
SignUp.prototypes = {
  onSignUp: PropTypes.func.isRequired,
};

export default SignUp;
