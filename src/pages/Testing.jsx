import React from "react";
import "./Testing.css";
import { useState, useEffect } from "react";
import axios from "axios";
import Header from "../components/Header";

function Testing() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  async function fetchMovies() {
    setLoading(true);
    const { data } = await axios.get(
      "https://api.themoviedb.org/3/search/movie?api_key=72df3e39ae70f2a87b61200cd97ee96b&language=en-US&query=you&page=2"
    );
    console.log(data.results);
    setMovies(data.results);
    setLoading(false);
  }

  useEffect(() => {
    fetchMovies();
  }, []);

  return (
    <>
      <Header></Header>
      <div className="container">
        <div className="row">
          <div className="user-list">
            {movies.map((movie) => (
              <div className="user" key={movie.id}>
                <div className="user-card">
                  <div className="user-card__container">
                    <h3>{movie.title}</h3>
                    <p>
                      <b>Popularity:</b> {movie.popularity}
                    </p>
                    <p>
                      <b>Release_date:</b> {movie.release_date}
                    </p>
                    <p><b>Image:</b></p>
                    <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt="" className="movie__poster"/>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Testing;
