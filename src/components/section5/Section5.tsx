import React from "react";
import "./style.css";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import Tradingcard5 from "./Card5";
interface Movie {
  img: string;
  title: string;
  seasons: string;
  episods: string;
  quality: boolean;
  id: number;
}
const trendingMovies: Movie[] = [
  {
    img: "https://kinogo.biz/uploads/mini/minifull/373/1661105123-1801850808.webp",
    title: "Дом Дракона",
    seasons: "Season 2",
    episods: "EP 1-4",
    quality: true,
    id: 1,
  },
  {
    img: "https://kinogo.biz/uploads/mini/minifull/bcc/1720332635-2110304602.webp",
    title: "Аудиторы",
    seasons: "Season 1",
    episods: "EP 1-2",
    quality: false,

    id: 2,
  },
  {
    img: "https://kinogo.biz/uploads/mini/minifull/7b2/1717380667-1027939076.webp",
    title: "Отель «Кокаин»",
    seasons: "Season 1",
    episods: "EP 1-4",
    quality: true,

    id: 3,
  },
  {
    img: "https://kinogo.biz/uploads/mini/minifull/949/1690921848-360689123.webp",
    title: "Багровое озеро",
    seasons: "Season 2",
    episods: "EP 1-9",
    quality: true,

    id: 4,
  },
];
export default function Section5() {
  return (
    <div className="container">
      <div className="section__5__title">
        <h1>New Release - Series</h1>
        <a href="#">
          View All <ArrowForwardIcon />
        </a>
      </div>
      <section className="section__5">
        {trendingMovies.map((movie) => (
          <Tradingcard5 key={movie.id} movie={movie} />
        ))}
      </section>
    </div>
  );
}
