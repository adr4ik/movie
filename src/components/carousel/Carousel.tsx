import React from "react";
import "./style.css";
import Section2 from "../section2/Section2";

import Slider from "react-slick";
import { Button } from "@mui/material";
import PlayCircleOutlineIcon from "@mui/icons-material/PlayCircleOutline";
import WatchLaterIcon from "@mui/icons-material/WatchLater";
import dateIcon from "../../assets/date.svg";
import timeIcon from "../../assets/time.svg";
import starIcon from "../../assets/star.svg";
import { useNavigate } from "react-router-dom";

function Carousel() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };

  const navigate = useNavigate();
  return (
    <div className="slider-container ">
      <Slider {...settings}>
        <div>
          <div className="slide slide-1">
            <div className="container">
              <div className="slide-1__btns">
                <Button
                  variant="contained"
                  onClick={() => navigate("/add-tranding")}
                >
                  Add Movie <PlayCircleOutlineIcon sx={{ fontSize: "40px" }} />
                </Button>
                <Button variant="outlined">
                  Whatch Movies <WatchLaterIcon sx={{ fontSize: "40px" }} />
                </Button>
              </div>
              <div className="slide-1__info">
                <h1>Avatar: The Way of Water</h1>
                <div className="slide-1__more-info">
                  <div>
                    <p>Action</p>
                  </div>
                  <div>
                    <p>Adventure</p>
                  </div>
                  <div>
                    <p>Science Fiction</p>
                  </div>
                  <div>
                    <img src={dateIcon} alt="" />
                    <p>2022</p>
                  </div>
                  <div>
                    <img src={timeIcon} alt="" />
                    <p>3:12:45</p>
                  </div>
                  <div>
                    <img src={starIcon} alt="" />
                    <p>8.5</p>
                  </div>
                </div>
                <p
                  className="
                slide-1__description"
                >
                  Set more than a decade after the events of the first film,
                  learn the story of the Sully family (Jake, Neytiri, and their
                  kids), the trouble that follows them, the lengths they go to
                  keep each other safe, the battles they fight to stay alive,
                  and the tragedies they endure.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="slide slide-2">
            <div className="container"></div>
          </div>
        </div>
        <div>
          <div className="slide slide-2">
            <div className="container"></div>
          </div>
        </div>
        <div>
          <div className="slide slide-2">
            <div className="container"></div>
          </div>
        </div>
      </Slider>
    </div>
  );
}

export default Carousel;
