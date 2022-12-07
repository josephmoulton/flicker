import React from "react";
import "./Header.css";
import MovieIcon from "@mui/icons-material/Movie";

function Header() {
  return (
    <div className="header">
      <div className="container">
        <div className="logo__container">
          <h1>Flicker</h1>
          <div className="logo__icon">
            <MovieIcon />
          </div>
        </div>
        <div className="header__links">
          <a className="header__link" href="#">Home</a>
          <a className="header__link" href="#">Find your movie</a>
          <a href="/contact"><button className="header__link header__link--button">Contact</button></a>
        </div>
      </div>
    </div>
  );
}

export default Header;
