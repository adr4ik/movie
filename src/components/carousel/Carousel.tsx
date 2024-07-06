import React from "react";
import "./style.css";
import Section2 from "../section2/Section2";

import Slider from "react-slick";
import { Button } from "@mui/material";
import PlayCircleOutlineIcon from "@mui/icons-material/PlayCircleOutline";
import WatchLaterIcon from "@mui/icons-material/WatchLater";

function Carousel() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };
  return (
    <div className="slider-container ">
      <Slider {...settings}>
        <div>
          <div className="slide slide-1">
            <div className="container">
              <div className="slider_buttons">
                <Button
                  variant="contained"
                  style={{
                    backgroundColor: "red",
                    color: "white",
                    fontSize: "30px",
                  }}
                >
                  Watch Now
                  {<PlayCircleOutlineIcon sx={{ fontSize: "40px" }} />}
                </Button>
                <Button
                  variant="outlined"
                  sx={{ color: "white", fontSize: "30px" }}
                >
                  Watch Later
                  {<WatchLaterIcon sx={{ fontSize: "40px" }} />}
                </Button>
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
