import React, { useEffect, useState } from "react";
import "./Login.css";
import { useHistory } from "react-router-dom";
import { PropTypes } from "prop-types";

// async function login(credentials) {
//   return fetch("http://localhost:8080/login", {
//     method: "POST",
//     headers: {
//       "Content-type": "application/json",
//     },
//     body: JSON.stringify(credentials),
//   }).then((data) => data.json());
// }

// function Login({ setToken }) {

const Login = ({ onLogin }) => {
  // hard value
  //   const hardcodedEmail = "mad@gmail.com";
  //   const hardcodedPassword = "1234";

  const [email, setEmail] = useState(" ");
  const [password, setPassword] = useState(" ");
  const history = useHistory();

  useEffect(() => {
    const storedSignupInfo = localStorage.getItem("signupInfo");
    if (storedSignupInfo) {
      const { email, password } = JSON.parse(storedSignupInfo);

      setEmail(email);
      setPassword(password);

      localStorage.removeItem("signupInfo"); //clear signup session storage
    }
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    onLogin({ email, password });

    const loginInfo = { email, password };
    localStorage.setItem("loginInfo", JSON.stringify(loginInfo));

    history.push("/");
  };

  // Call onSignup with hardcoded values
  //   if (typeof onLogin === "function") {
  //     onLogin({ email, password });
  //     history.push("/");
  //   } else {
  //     console.error("onLogin is not func");
  //   }
  // };
  // hard val end

  //   const [email, setEmail] = useState("");
  //   const [password, setPassword] = useState("");
  //   const history = useHistory();

  //   const handleLogin = async (e) => {
  //     // console.log("Logging in with:", email, password);
  //     e.preventDefault();

  // try {
  //   const response = await fetch("http://localhost:8080/login", {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify({ email, password }),
  //   });

  //   if (response.ok) {
  //     const { token } = await response.json();

  //     setToken(token); //token saved to local storage

  //     history.push("/"); // redirect to home
  //   } else {
  //     console.error("Login Failed");
  //   }
  // } catch (error) {
  //   console.error("login error:", error);
  // }
  //   };

  //   const handleSubmit = async (event) => {
  //     event.preventDefault();
  //     const token = await login({
  //       email,
  //       password,
  //     });
  //     setToken(token);
  //   };

  return (
    <div className="login">
      <img
        className="login__logo"
        src="https://freelogopng.com/images/all_img/1688361055amazon-logo-png.png"
        alt=""
      />

      <div className="login__container">
        <h1>SignIn</h1>
        <form onSubmit={handleSubmit}>
          <h5>E-mail</h5>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            type="email"
            placeholder="email"
          />
          <h5>Password</h5>
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            type="password"
            placeholder="enter-password"
          />
          <button type="submit" className="login__signInButton">
            <span onClick={() => history.push("/")}>Sign In</span>
          </button>
          <p>
            By continuing, you agree to Amazon's Conditions of Use and Privacy
            Notice.
          </p>
          <p>Need help?</p>
          <button className="login__registerButton">
            <span onClick={() => (window.location.href = "/signup")}>
              Create your Amazon Account
            </span>
          </button>
        </form>
      </div>
    </div>
  );
};

Login.propTypes = {
  onLogin: PropTypes.func.isRequired,
};

export default Login;
