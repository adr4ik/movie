import React from "react";
import "./style.css";
import HdIcon from "@mui/icons-material/Hd";
interface Movie {
  img: string;
  title: string;
  seasons: string;
  episods: string;
  quality: boolean;

  id: number;
}

interface OneMovie {
  movie: Movie;
}
export default function Tradingcard5({ movie }: OneMovie) {
  return (
    <div className="container">
      <section className="section__5">
        <div className="card_box-5">
          <div className="card-box-5__banner">
            <div className="card-box-5__banner__inner">
              <p>{movie.episods}</p>
            </div>
            <img src={movie.img} alt="Movie Banner" />
          </div>
          <div className="card_box-5_info">
            <div className="card_box-5_info_title">
              <p>{movie.title}</p>
            </div>
            <div className="card_box-5_info_direction">
              <div className="card_box-5_info_direction_hdicon">
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

              <div className="card_box-5_info_direction_time">
                <p> {movie.seasons}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
