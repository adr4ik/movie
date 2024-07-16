import React from "react";
import "./style.css";

import HdIcon from "@mui/icons-material/Hd";

import timeIcon from "../../assets/time.svg";

interface Movie {
  img: string;
  title: string;
  duration: string;
  quality: boolean;

  id: number;
}

interface OneMovie {
  movie: Movie;
}
export default function TradingCard6({ movie }: OneMovie) {
  return (
    <div className="card_box-6">
      <div className="card-box-6__banner">
        <img src={movie.img} alt="Movie Banner" />
      </div>
      <div className="card_box-6_info">
        <div className="card_box-6_info_title">
          <p>{movie.title}</p>
        </div>
        <div className="card_box-6_info_direction">
          <div className="card_box-6_info_direction_hdicon">
            {movie.quality && (
              <HdIcon
                sx={{
                  width: "31px",
                  height: "32px",
                  backgroundColor: "red",
                }}
              />
            )}
          </div>

          <div className="card_box-6_info_direction_time">
            <img src={timeIcon} alt="" />
            <p>{movie.duration}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
