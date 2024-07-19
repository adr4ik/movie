import { Typography } from "@mui/material";
import { TrandingMovie } from "../../contexts/TrendingContext";

import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import React, { useState } from "react";
interface Movie {
  img: string;
  title: string;
  genre: string;
}
interface Props {
  oneMovie: Movie;
  handleEdit: (newMovie: Movie) => void;
}

export default function EditFormModal({ oneMovie, handleEdit }: Props) {
  const [open, setOpen] = useState(false);

  const [movie, setMovie] = useState<Movie>({
    img: oneMovie.img,
    title: oneMovie.title,
    genre: oneMovie.genre,
  });
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    inputName: string
  ) => {
    setMovie((prev) => ({
      ...prev,
      [inputName]: e.target.value,
    }));
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  function handleClick() {
    handleEdit(movie);
    handleClose();
  }

  return (
    <React.Fragment>
      <Button variant="outlined" onClick={handleClickOpen}>
        Edit
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          <Typography sx={{ alignItems: "center", justifyContent: "center" }}>
            {" "}
            {"Edit Form"}
          </Typography>
        </DialogTitle>

        <DialogContent>
          <div>
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
                Edit Movie
              </Button>
            </div>
          </div>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Close</Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}
