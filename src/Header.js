import React from "react";
import "./Header.css";
// import { Link } from "react-router-dom";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import Profile from "./Profile";

// import logo from "./img/logo.png";

function Header({ basketCount, addToBasket }) {
  return (
    <nav className="header">
      <div onClick={() => (window.location.href = "/")}>
        {/* <div> */}
        <img
          className="header__logo"
          src="https://freelogopng.com/images/all_img/1688364164amazon-logo-transparent.png"
          alt=""
        />
      </div>
      {/* </Link> */}

      {/* {search box} */}
      <div className="header__search">
        <input
          type="text"
          className="header__searchInput"
          placeholder="search"
        />
        <SearchIcon className="header__searchIcon" />
      </div>

      <div>
        <Profile />
      </div>

      {/* {3 links} */}
      <div className="header__nav">
        <div className="header__link">
          <div className="header__option">
            <span className="header__optionLineOne">Hello maddy</span>
            <span
              className="header__optionLineTwo"
              onClick={() => (window.location.href = "/login")}
            >
              Sign In
            </span>{" "}
          </div>
        </div>

        <div
          className="header__link"
          onClick={() => (window.location.href = "/")}
        >
          <div className="header__option">
            <span className="header__optionLineOne">Returns</span>
            <span className="header__optionLineTwo">& Orders</span>
          </div>
        </div>

        <div
          className="header__link"
          onClick={() => (window.location.href = "/")}
        >
          <div className="header__option">
            <span className="header__optionLineOne">Your</span>
            <span className="header__optionLineTwo">Prime</span>
          </div>
        </div>

        <div className="header__optionBasket">
          <ShoppingBasketIcon
            onClick={() => (window.location.href = "/checkout")}
          />
          {/* shopping cart  icon*/}
          {/* <ShoppingBasketIcon /> */}
          {/* number of item in basket */}
          <span className="header__optionLineTwo header__basketCount">
            {basketCount}
            {/* {basket.length} */}
          </span>
        </div>
      </div>
      {/* {Basket icon with number} */}
    </nav>
  );
}

export default Header;
