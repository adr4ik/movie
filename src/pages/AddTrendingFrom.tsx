import { Box, Button, TextField } from "@mui/material";
import React, { useContext, useState } from "react";
import { TrendingContext } from "../contexts/TrendingContext";
import { useNavigate } from "react-router-dom";
import "./style.css";
interface Movie {
  img: string;
  title: string;
  genre: string;
}
export default function AddTrendingFrom() {
  const [movie, setMovie] = useState<Movie>({
    img: "",
    title: "",
    genre: "",
  });

  const context = useContext(TrendingContext);

  if (!context) {
    throw new Error("Trending context not Found");
  }

  const { createMovie } = context;

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    inputName: string
  ) => {
    setMovie((prev) => ({
      ...prev,
      [inputName]: e.target.value,
    }));
  };

  async function handleClick() {
    await createMovie(movie);
    navigate("/");
  }

  const navigate = useNavigate();

  return (
    <div className="color-white">
      <div className="add-form">
        <input
          placeholder="for image url..."
          value={movie.img}
          onChange={(e) => handleChange(e, "img")}
        />
        <input
          placeholder="for title..."
          value={movie.title}
          onChange={(e) => handleChange(e, "title")}
        />
        <input
          placeholder="for genre..."
          value={movie.genre}
          onChange={(e) => handleChange(e, "genre")}
        />
        <Button
          onClick={handleClick}
          variant="contained"
          sx={{ backgroundColor: "red" }}
        >
          Add Movie to HomePage
        </Button>
      </div>
    </div>
  );
}
