import React from "react";
import "./Testing.css";
import { useState, useEffect } from "react";
import axios from "axios";

function Testing() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  async function fetchMovies() {
    setLoading(true);
    const { data } = await axios.get(
      "https://jsonplaceholder.typicode.com/users"
    );
    setMovies(data);
    setLoading(false);
  }

  useEffect(() => {
    fetchMovies();
  }, []);


  return (<div>Testing</div>);
}

export default Testing;
