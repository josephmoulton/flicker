import React from "react";
import "./MovieProfile.css";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import placeholderImage from "../assets/DefaultPoster.png";
import Header from "../components/Header";

function MovieProfile() {
  const { id } = useParams();
  const [genres, setGenres] = useState([]);
  const [film, setFilm] = useState([]);
  const [loading, setLoading] = useState(true);
  const [releaseYear, setReleaseYear] = useState("");
  const [releaseDate, setReleaseDate] = useState("");

  async function fetchMovie() {
    setLoading(true);
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/movie/458156?api_key=72df3e39ae70f2a87b61200cd97ee96b`
    );
    setFilm(data);
    setGenres(data.genres);
    setLoading(false);
  }

  function getReleaseYear() {
    const result = releaseDate.split("-");
    const [first, second, third] = result;
    setReleaseYear(first);
  }

  useEffect(() => {
    fetchMovie();
  }, []);

  return (
    <>
      <Header></Header>
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
        <div className="film__header--container">
          <div className="film__data--container">
            <div className="film__poster--container">
              <img
                src={
                  film.poster_path
                    ? `https://image.tmdb.org/t/p/w500${film.poster_path}`
                    : placeholderImage
                }
                alt="Film Poster"
                className="film__poster"
              />
              <div className="film__availability">Film Available</div>
            </div>
            <div className="film__info--container">
              <div className="film__title--conatiner">
                <h1 className="film__title">
                  {film.title}{" "}
                  <span className="film__year">({film?.release_date?.split("-")[0]})</span>
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default MovieProfile;
