import React from "react";
import "./MovieProfile.css";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import placeholderImage from "../assets/DefaultPoster.png";

function MovieProfile() {
  const { id } = useParams();
  const [film, setFilm] = useState([]);
  const [loading, setLoading] = useState(true);

  async function fetchMovie() {
    setLoading(true);
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/movie/458156?api_key=72df3e39ae70f2a87b61200cd97ee96b`
    );
    setFilm(data);
    setLoading(false);
  }

  useEffect(() => {
    fetchMovie();
  }, []);

  return (
    <>
      <div className="film__header">
        <img
          src={
            film.backdrop_path
              ? `https://image.tmdb.org/t/p/original${film.backdrop_path}`
              : placeholderImage
          }
          alt="film backdrop"
          className="film__backdrop"
        />
        <div className="film__title--container">
          <h1 className="film__title"> {film.title} </h1>
        </div>
        <div className="film__tagline--container">
          <h4 className="film__tagline">{film.tagline}</h4>
        </div>
      </div>
    </>
  );
}

export default MovieProfile;
