import React from "react";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import TradingCard6 from "./Card6";

interface Movie {
  img: string;
  title: string;
  duration: number;
  quality: boolean;
  id: number;
}
const trendingMovies: Movie[] = [
  {
    img: "https://kinogo.biz/uploads/mini/minifull/c60/1720080687-1411047893.webp",
    title: "Вкус страха",
    duration: 2.32,
    quality: true,

    id: 1,
  },
  {
    img: "https://kinogo.biz/uploads/mini/minifull/14a/1720224703-649547337.webp",
    title: "Самая большая луна",
    duration: 2.34,
    quality: true,

    id: 2,
  },
  {
    img: "https://kinogo.biz/uploads/mini/minifull/b72/1720188643-nikto-i-nichto.webp",
    title: "Никто и ничто",
    duration: 5.34,
    quality: false,

    id: 3,
  },
  {
    img: "https://kinogo.biz/uploads/mini/minifull/39f/1719396652-1381743035.jpg",
    title: "Зомби в Сеуле",
    duration: 5.34,
    quality: true,

    id: 4,
  },
  {
    img: "https://kinogo.biz/uploads/mini/minifull/d27/1585373604-2017377715.jpg",
    title: "Темный рыцарь ",
    duration: 5.34,
    quality: true,

    id: 5,
  },
  {
    img: "https://kinogo.biz/uploads/mini/minifull/2db/1713456654-1710759271.jpg",
    title: "Linkin Park",
    duration: 2.34,
    quality: false,

    id: 6,
  },
  {
    img: "https://kinogo.biz/uploads/mini/minifull/174/1585408476-1489505728.webp",
    title: "Гран Торино",
    duration: 5.34,
    quality: true,

    id: 7,
  },
  {
    img: "https://kinogo.biz/uploads/mini/minifull/5cb/1585501240-1179712573.webp",
    title: "Ип Ман",
    duration: 5.34,
    quality: true,

    id: 8,
  },
];
export default function Section6() {
  return (
    <div className="container">
      <div className="section__6__title">
        <div className="section__6__title_sectors">
          <h1>Recommended</h1>
          <a href="#">Movies</a>
          <a href="#">Series</a>
          <a href="#">Animation</a>
        </div>
        <div>
          <a href="#">
            View All <ArrowForwardIcon />
          </a>
        </div>
      </div>
      <section className="section__6">
        {trendingMovies.map((movie) => (
          <TradingCard6 key={movie.id} movie={movie} />
        ))}
      </section>
    </div>
  );
}
