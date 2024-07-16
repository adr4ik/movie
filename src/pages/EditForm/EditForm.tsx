import { Box, Button, TextField } from "@mui/material";
import React, { useContext, useEffect, useState } from "react";

import { useNavigate, useParams } from "react-router-dom";
import "./style.css";
import { TrendingContext } from "../../contexts/TrendingContext";
interface Movie {
  img: string;
  title: string;
  genre: string;
}

export default function EditFrom() {
  const [movie, setMovie] = useState<Movie>({
    img: "",
    title: "",
    genre: "",
  });

  const context = useContext(TrendingContext);

  if (!context) {
    throw new Error("Trending context not Found");
  }

  const { updateMovie, getOneMovie, oneMovie } = context;

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    inputName: string
  ) => {
    setMovie((prev) => ({
      ...prev,
      [inputName]: e.target.value,
    }));
  };

  const [stateUrl, setStateUrl] = useState("");
  const [stateTitle, setStateTitle] = useState("");
  const [stateGenre, setStateGenre] = useState("");

  const { id } = useParams();

  useEffect(() => {
    getOneMovie(id);
  }, [id]);

  useEffect(() => {
    if (oneMovie) {
      setStateUrl(oneMovie.img);
      setStateTitle(oneMovie.title);
      setStateGenre(oneMovie.genre);
    }
  }, [oneMovie]);

  const navigate = useNavigate();

  return (
    <div className="color-white">
      <div className="add-form">
        <input
          placeholder="for image url..."
          value={stateUrl}
          onChange={(e) => handleChange(e, "img")}
        />
        <input
          placeholder="for title..."
          value={stateTitle}
          onChange={(e) => handleChange(e, "title")}
        />
        <input
          placeholder="for genre..."
          value={stateGenre}
          onChange={(e) => handleChange(e, "genre")}
        />
        <Button variant="contained" sx={{ backgroundColor: "red" }}>
          Edit Movie
        </Button>
      </div>
    </div>
  );
}
