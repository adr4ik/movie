import React from "react";
import "./style.css";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import TradingCard from "./Card";

interface Movie {
  img: string;
  title: string;
  genre: string[];
  id: number;
}
const trendingMovies: Movie[] = [
  {
    img: "https://kinogo.biz/uploads/mini/minifull/681/1720044649-1469384998.webp",
    title: "Граф Монте-Кристо",
    genre: ["action", "comedy"],
    id: 1,
  },
  {
    img: "https://kinogo.biz/uploads/mini/minifull/7e6/1719936642-1356814439.webp",
    title: "Я – Селин Дион",
    genre: ["action", "comedy", "crime"],
    id: 2,
  },
  {
    img: "https://kinogo.biz/uploads/mini/minifull/2bd/1715868674-494695612.webp",
    title: "Криминальный город. Возмездие",
    genre: ["action", "comedy", "drama"],
    id: 3,
  },
];

export default function Section3() {
  return (
    <div className="container">
      <div className="section__3__title">
        <h1>Trending</h1>
        <a href="#">View All {<ArrowForwardIcon />}</a>
      </div>
      <section className="section__3">
        {trendingMovies.map((movie) => (
          <TradingCard key={movie.id} movie={movie} />
        ))}
      </section>
    </div>
  );
}
