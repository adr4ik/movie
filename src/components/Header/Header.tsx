import { Box, Typography } from "@mui/material";
import React from "react";
import searchIcon from "../../assets/search.svg";
import loginIcon from "../../assets/login.svg";
import "./style.css";

export default function Header() {
  return (
    <header className="header ">
      <div className="container header__inner">
        <nav>
          <a href="/">Home</a>
          <a href="">Genre</a>
          <a href="">Country</a>
        </nav>
        <Box className="header__search">
          <input placeholder="Search movies..." type="text" />
          <button>
            <img src={searchIcon} alt="" />
          </button>
        </Box>

        <nav>
          <a href="">Movies</a>
          <a href="">Series</a>
          <a href="">Animation</a>
        </nav>
        <Box className="header__auth">
          <Typography>Login</Typography>
          <span>/</span>
          <Typography>SignUp</Typography>
          <img src={loginIcon} alt="" />
        </Box>
      </div>
    </header>
  );
}
