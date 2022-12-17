import React from "react";
import "./MovieProfile.css";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import placeholderImage from "../assets/DefaultPoster.png";
import Header from "../components/Header";
import {
  CircularProgressbar,
  CircularProgressbarWithChildren,
  buildStyles,
} from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import PaidIcon from "@mui/icons-material/Paid";
import SellIcon from "@mui/icons-material/Sell";
import IconWithTag from "../components/IconWithTag";
import Credit from "../components/Credit";

function MovieProfile() {
  const { id } = useParams();
  const [genres, setGenres] = useState([]);
  const [film, setFilm] = useState([]);
  const [loading, setLoading] = useState(true);
  const [credits, setCredits] = useState([]);

  async function fetchMovie() {
    setLoading(true);
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/movie/${id.replace(
        ":",
        ""
      )}?api_key=72df3e39ae70f2a87b61200cd97ee96b`
    );
    setFilm(data);
    setGenres(data.genres);
    setLoading(false);
  }

  async function fetchCredits() {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/movie/${id.replace(
        ":",
        ""
      )}/credits?api_key=72df3e39ae70f2a87b61200cd97ee96b&language=en-US`
    );
    setCredits(data.cast);
  }

  useEffect(() => {
    fetchMovie();
    fetchCredits();
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
              {film.release_date ? (
                <div className="film__availability">Film Available</div>
              ) : (
                <div className="film__availability">Film Not Available</div>
              )}
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
                <div className="tagline">{film?.tagline}</div>
                <div className="stats__container">
                  <div className="user__container">
                    <div className="review__container">
                      <CircularProgressbarWithChildren
                        value={film?.vote_average?.toFixed(1)}
                        maxValue={10}
                        background
                        backgroundPadding={6}
                        styles={buildStyles({
                          backgroundColor: "#242424",
                          textColor: "#fff",
                          pathColor: "#32cd32",
                          trailColor: "#006400",
                        })}
                      >
                        <div style={{ fontSize: 16 }}>{`${
                          film?.vote_average?.toFixed(1) * 10
                        }%`}</div>
                      </CircularProgressbarWithChildren>
                    </div>
                    <h4 className="user-score">User Score</h4>
                  </div>
                  <div className="budget">
                    <PaidIcon className="money__icon" />
                    <div className="money">
                      <p className="money__title">Budget:</p>
                      <p>${film?.budget?.toLocaleString()}.00</p>
                    </div>
                  </div>
                  <div className="revenue">
                    <SellIcon className="money__icon" />
                    <div className="money">
                      <p className="money__title">Revenue:</p>
                      <p>${film?.revenue?.toLocaleString()}.00</p>
                    </div>
                  </div>
                </div>
                <div className="film__info">
                  <h3 className="overview">Overview</h3>
                  <p className="overview__text">{film?.overview}</p>
                </div>
                <div className="production__container">
                  {film?.production_companies?.map((company) => (
                    <IconWithTag
                      key={company.id}
                      name={company.name}
                      logoPath={company.logo_path}
                      originCountry={company.origin_country}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="cast__container">
        {credits?.slice(0, 8)?.map((actor) => (
          <Credit
            key={actor.id}
            name={actor.name}
            character={actor.character}
            photo={actor.profile_path}
          />
        ))}
      </div>
    </>
  );
}

export default MovieProfile;
