import React, { useContext, useEffect } from "react";
import "./style.css";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import TradingCard from "./Card";
import { TrendingContext } from "../../contexts/TrendingContext";

export default function Section3() {
  const context = useContext(TrendingContext);

  if (!context) {
    throw new Error("Trending context not Found");
  }

  const { movies, getTrendingMovies } = context;

  useEffect(() => {
    getTrendingMovies();
  }, []);
  return (
    <div className="container">
      <div className="section__3__title">
        <h1>Tranding</h1>
        <a href="#">View All {<ArrowForwardIcon />}</a>
      </div>
      <section className="section__3">
        {movies.map((movie) => (
          <TradingCard key={movie.id} movie={movie} />
        ))}
      </section>
    </div>
  );
}
