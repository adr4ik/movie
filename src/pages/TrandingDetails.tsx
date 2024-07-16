import React, { useContext, useEffect, useState } from "react";
import "./style.css";
import { TrendingContext } from "../contexts/TrendingContext";
import { useNavigate, useParams } from "react-router-dom";
import { Backdrop, Button, CircularProgress } from "@mui/material";
import ConfirmModel from "./components/ConfirmModel";
import Section6 from "../components/section6/Section6";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import timeIcon from "../assets/time.svg";
import starIcon from "../assets/star.svg";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";

export default function TrandingDetails() {
  const context = useContext(TrendingContext);

  const [open, setOpen] = useState(false);

  if (!context) {
    throw new Error("Trending context not Found");
  }

  const navigate = useNavigate();

  const { oneMovie, getOneMovie, deleteMovie } = context;

  const { id } = useParams();

  useEffect(() => {
    getOneMovie(id);
  }, []);

  if (!oneMovie) {
    return (
      <div>
        <Backdrop
          sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
          open={true}
        >
          <CircularProgress color="inherit" />
        </Backdrop>
      </div>
    );
  }

  return (
    <div className="container">
      <div className="detailsBox color-white ">
        <div className="detailsBox-leftSector">
          <img src={oneMovie.img} alt="" />
        </div>
        <div className="detailsBox-rightSector">
          <div className="rightSector-title">
            <p>{oneMovie.title}</p>
            <button>+ Add to Favourite</button>
          </div>
          <div className="rightSector-genre">
            <p>{oneMovie.genre}</p>
            <p>Science Fiction</p> <p>{<CalendarMonthIcon />} 2023</p>{" "}
            <p>
              <img src={timeIcon} alt="timeicon" /> 50:43
            </p>{" "}
            <p>
              <img src={starIcon} alt="starIcon" /> 8.5
            </p>
          </div>
          <div className="rightSector-text">
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maiores,
              quisquam quos consequatur nam laborum asperiores quasi cumque
              aliquid laudantium, porro nulla ea non voluptas repellendus
              expedita omnis cum vel provident?
            </p>
          </div>
          <div className="detailsBox-movie-info">
            <p>Country : United States</p>
            <p>Genre : Drama, Science Fiction</p>

            <p>Date Realease : May 05 2023</p>
            <p>Production : AMC Studios</p>
            <p>
              Coast : Tim Robbins, Rebecca Ferguson, Avi Nash, Rashida Jones,
              David Oyewolo, Tim Robbins
            </p>
          </div>
          <div className="rightSector-buttons">
            <ConfirmModel deleteMovie={deleteMovie} id={id} />
            <Button onClick={() => navigate("/edit-form")} variant="contained">
              Edit Movie
            </Button>
          </div>
        </div>
      </div>{" "}
      <div className="details-season-sector">
        <div>
          <h1>Season 1 icon</h1>
        </div>
        <div className="details-seasons">
          <a href="#">{<ArrowRightIcon />}Episode 1: Freedom Day</a>
          <a href="#">{<ArrowRightIcon />}Episode 2: Holston’s Pick</a>
          <a href="#">{<ArrowRightIcon />}Episode 3: Machines</a>
          <a href="#">{<ArrowRightIcon />}Episode 4: Truth</a>
          <a href="#">{<ArrowRightIcon />}Episode 5: The Janitor’s Boy</a>
          <a href="#">{<ArrowRightIcon />}Episode 6: The Relic</a>
        </div>
      </div>
      <div>
        <Section6 />
      </div>
      ;
    </div>
  );
}
