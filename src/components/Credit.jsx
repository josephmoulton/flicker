import React from "react";
import "./Credit.css";

function Credit({ name, character, photo }) {
  return (
    <div className="credit__container">
      <img
        className="photo"
        src={`https://image.tmdb.org/t/p/w500${photo}`}
        alt="Actors headshot"
      />
      <div className="text__container">
        <div className="name">{name}</div>
        <div className="character">{character}</div>
      </div>
    </div>
  );
}

export default Credit;
