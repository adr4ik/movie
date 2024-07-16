import React from "react";
import timeIcon from "../../assets/time.svg";
import starIcon from "../../assets/star.svg";
import "./style.css";
import { useNavigate } from "react-router-dom";

interface Movie {
  img: string;
  title: string;
  genre: string;
  id?: number;
}

interface OneMovie {
  movie: Movie;
}

export default function TradingCard({ movie }: OneMovie) {
  const navigate = useNavigate();

  return (
    <div className="card_box" onClick={() => navigate(`/tranding/${movie.id}`)}>
      <div className="card-box__banner">
        <div className="card-box__banner-inner">
          <div>
            <img src={timeIcon} alt="" />
            <p>3:12:40</p>
          </div>
          <div>
            <img src={starIcon} alt="" />
            <p>8.0</p>
          </div>
        </div>
        <img src={movie.img} alt="" />
      </div>
      <div className="card_box_info">
        <div className="card_box_info_title">
          <p>{movie.title}</p>
        </div>
        <div className="card_box_info_direction">
          <p>{movie.genre}</p>
        </div>
      </div>
    </div>
  );
}
