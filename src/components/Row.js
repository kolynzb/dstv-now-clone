import React, { useEffect, useState } from "react";
import "./styles/Row.css";
import axios from "../axios/Axios";

const Row = ({ title, fetchUrl, isLargeRow }) => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function getData() {
      const response = await axios.get(fetchUrl);
      setMovies(response.data.results);
      console.log(response.data.results);
      return response;
    }
    getData();
  }, [fetchUrl]);
  const baseUrl = "https://image.tmdb.org/t/p/original/";
  return (
    <div className="row">
      <h1 className="row_title">{title}</h1>
      <div className="row__posters">
        {movies.map((movie) => {
          return (
            <img
              className={`row_poster  ${isLargeRow && "row_poster_large"}`}
              key={movie?.id}
              src={`${baseUrl}${
                isLargeRow ? movie.poster_path : movie.backdrop_path
              }`}
              alt={movie?.name}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Row;
