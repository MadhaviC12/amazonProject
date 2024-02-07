import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./Header.css";
import Header from "./Header";
import Home from "./Home";
import Login from "./Login";
import Checkout from "./Checkout";
import "./Checkout.css";
import SignUp from "./SignUp";
import "./SignUp.css";
import "./UserProfile.css";
import UserProfile from "./UserProfile ";
import { Redirect } from "react-router-dom";
import AddAnotherAcc from "./AddAnotherAcc";
import "./AddAnotherAcc.css";

function App() {
  const [token, setToken] = useState(null);

  const [basket, setBasket] = useState([]);

  useEffect(() => {
    const storedBasket = sessionStorage.getItem("basket");
    if (storedBasket) {
      setBasket(JSON.parse(storedBasket));
    }
  }, []);

  const addToBasket = (item) => {
    const updatedBasket = [...basket, item];
    setBasket(updatedBasket);
    sessionStorage.setItem("basket", JSON.stringify(updatedBasket));
  };

  useEffect(() => {
    const storedLoginInfo = localStorage.getItem("loginInfo");
    if (storedLoginInfo) {
      const { email, password } = JSON.parse(storedLoginInfo);

      localStorage.removeItem("loginInfo");
    }
  });

  // if (!token) {
  //   return (
  //     <Router>
  //       <Home setToken={setToken} />
  //     </Router>
  //   );
  // }

  return (
    <Router>
      <div className="app">
        {/* <Header basketCount={basket.length} /> */}
        {/* <Home /> */}

        <Switch>
          <Route exact path="/checkout">
            <Header basketCount={basket.length} />
            <Checkout basket={basket} setBasket={setBasket} />
          </Route>

          {/* 
          <Route exact path="/login">
            {/* <Login setToken={setToken} /> */}
          {/* <Login onLogin={setToken} />
          <SignUp /> */}
          {/* {token ? (
              <>
                <Header basketCount={basket.length} />
                <Home addToBasket={addToBasket} />
              </>
            ) : (
              <Login onLogin={setToken} />
            )} */}
          {/* </Route>  */}

          <Route exact path="/login">
            {token ? (
              <>
                <Redirect to="/" />
                <Header basketCount={basket.length} />
                <Home addToBasket={addToBasket} />
              </>
            ) : (
              <Login onLogin={setToken} />
            )}
          </Route>
          <Route exact path="/signUp">
            <SignUp onSignUp={setToken} />
          </Route>
          <Route exact path="/profile">
            <Header basketCount={basket.length} />
            <UserProfile />
          </Route>

          <Route exact path="/userprofile"></Route>
          <Route exact path="/addanotheracc">
            <Header />
            <AddAnotherAcc />
          </Route>
          <Route exact path="/">
            <Header basketCount={basket.length} />

            <Home addToBasket={addToBasket} />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
