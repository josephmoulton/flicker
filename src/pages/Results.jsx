import React from "react";
import "./Results.css";
import { Link, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import { Navigate, useNavigate } from "react-router-dom";
import Header from "../components/Header";
import placeholderImage from "../assets/DefaultPoster.png";
import MovieCard from "../components/MovieCard";

function Results() {
  const { searchResult } = useParams();
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [pageNo, setPageNo] = useState(1);
  const [maxPages, setMaxPages] = useState(0);

  function onSearch() {
    fetchMovies();
  }

  async function fetchMovies() {
    setLoading(true);
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/search/movie?api_key=72df3e39ae70f2a87b61200cd97ee96b&language=en-US&query=${searchResult}&page=${pageNo}`
    );
    setMovies(data.results);
    setMaxPages(data.total_pages);
    setLoading(false);
  }

  useEffect(() => {
    fetchMovies();
  }, []);

  return (
    <>
      <Header />
      <div className="container">
        <div className="row">
          <div className="result__list">
            {movies.map((movie) => (
              <MovieCard
              key={movie.id}
              id={movie.id}
              photo={movie.poster_path}
              title={movie.title}
              releaseDate={movie.release_date}
              description={movie.overview}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Results;