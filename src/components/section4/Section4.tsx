import React from "react";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import TradingCard2 from "./Card4";
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
];
export default function Section4() {
  return (
    <div className="container">
      <div className="section__4__title">
        <h1>New Release - Movies</h1>
        <a href="#">
          View All <ArrowForwardIcon />
        </a>
      </div>
      <section className="section__4">
        {trendingMovies.map((movie) => (
          <TradingCard2 key={movie.id} movie={movie} />
        ))}
      </section>
    </div>
  );
}
