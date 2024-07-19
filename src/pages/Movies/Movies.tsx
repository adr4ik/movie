import React, { useContext, useEffect } from "react";
import "./style.css";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import MoviesCard from "./MoviesCard";
import { MoviesContext } from "../../contexts/NewReleaseContext";

export default function Movies() {
  const context = useContext(MoviesContext);

  if (!context) {
    throw new Error(" context not Found");
  }

  const { movies, getMovies } = context;

  useEffect(() => {
    getMovies();
  }, []);
  return (
    <div className="container">
      <div className="section__4__title">
        <h1>New Release - Movies</h1>
      </div>
      <section className="section__4">
        {movies.map((movie) => (
          <MoviesCard key={movie.id} movie={movie} />
        ))}
      </section>
    </div>
  );
}
