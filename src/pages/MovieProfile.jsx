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

  async function fetchMovie() {
    setLoading(true);
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/movie/458156?api_key=72df3e39ae70f2a87b61200cd97ee96b`
    );
    setFilm(data);
    setGenres(data.genres);
    setLoading(false);
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
                  <span className="film__year">
                    ({film?.release_date?.split("-")[0]})
                  </span>
                </h1>
                <div className="film__subtitle--container">
                  <div className="release">{film?.release_date}</div>
                  <div className="dot"> • </div>
                  {genres.map((genre) => (
                    <div key={genre.id} className="genres__container">
                      <span>{genre.name}</span>
                      <div className="dot"> • </div>
                    </div>
                  ))}
                  <div className="runtime">
                    {Math.floor(film?.runtime / 60)}h {film?.runtime % 60}m
                  </div>
                </div>
                <div className="tagline">
                  {film?.tagline}
                </div>
                <div className="film__info">
                  <h3 className="overview">Overview</h3>
                  <p className="overview__text">
                    {film?.overview}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default MovieProfile;
