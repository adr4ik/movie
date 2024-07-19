import { Box, Typography } from "@mui/material";
import React, { useState, useContext, ChangeEvent } from "react";
import searchIcon from "../../assets/search.svg";
import loginIcon from "../../assets/login.svg";
import "./style.css";
import { TrandingMovie, TrendingContext } from "../../contexts/TrendingContext";
import MenuDrawer from "./Drawer";
import { useNavigate } from "react-router-dom";

export default function Header() {
  const [search, setSearch] = useState<string>("");
  const [searchResults, setSearchResults] = useState<TrandingMovie[]>([]);
  const { getTrendingMovies } = useContext(TrendingContext)!;
  const navigate = useNavigate();

  const handleSearchChange = async (e: ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
    if (e.target.value) {
      const results = await getTrendingMovies(e.target.value);
      setSearchResults(results);
    } else {
      setSearchResults([]);
    }
  };

  return (
    <header className="header ">
      <div className="container header__inner">
        <nav>
          <MenuDrawer />
          <a href="/">Home</a>
          <a href="">Genre</a>
          <a href="">Country</a>
        </nav>
        <Box className="header__search">
          <input
            placeholder="Search movies..."
            type="text"
            value={search}
            onChange={handleSearchChange}
          />
          <button>
            <img src={searchIcon} alt="" />
          </button>
          {searchResults.length > 0 && (
            <div className="search-results">
              {searchResults.map((movie) => (
                <div key={movie.id} className="search-result-item">
                  <img src={movie.img} alt={movie.title} />
                  <div>
                    <p>Name:{movie.title}</p>
                    <p>Genre:{movie.genre}</p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </Box>
        <nav>
          <a href="/movies">Movies</a>
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
