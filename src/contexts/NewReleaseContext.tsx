import axios from "axios";
import { stat } from "fs";
import React, { ReactNode, useReducer } from "react";
import { createContext } from "react";

// ! tipizacja propsov children

interface ChildrenProps {
  children: ReactNode;
}

//! tipizacyja produkta

export interface Movie {
  img: string;
  title: string;
  duration: number;
  quality: boolean;

  id?: number;
}

//! tipizacja contexta

interface ContextType {
  movies: Movie[];
  oneMovie: Movie | null;
  getMovies: (search?: string) => Promise<Movie[]>;
  createMovie: (movie: Movie) => void;
  getOneMovie: (id: string | undefined) => void;
  deleteMovie: (id: string | undefined) => void;
  updateMovie: (id: string | undefined, movie: Movie) => void;
}

//! tipizacja reducer

type Action =
  | { type: "MOVIES"; payload: Movie[] }
  | {
      type: "ONE_MOVIE";
      payload: Movie;
    };

//! tipizacja init state

interface INIT_STATE {
  movies: Movie[];
  oneMovie: Movie | null;
}

const API = "http://localhost:8000/new_release";

const INIT_STATE: INIT_STATE = {
  movies: [],
  oneMovie: null,
};

export const MoviesContext = createContext<ContextType | undefined>(undefined);

function reducer(state: INIT_STATE, action: Action) {
  switch (action.type) {
    case "MOVIES":
      return { ...state, movies: action.payload };
    case "ONE_MOVIE":
      return { ...state, oneMovie: action.payload };
  }
}

export default function MoviesContextProvider({ children }: ChildrenProps) {
  const [state, dispatch] = useReducer(reducer, INIT_STATE);

  async function getMovies(search = "") {
    let res = await axios.get(`${API}/?q=${search}`);
    dispatch({
      type: "MOVIES",
      payload: res.data,
    });
    return res.data;
  }

  async function createMovie(movie: Movie) {
    await axios.post(API, movie);
  }

  async function getOneMovie(id: string | undefined) {
    let res = await axios.get(`${API}/${id}`);
    dispatch({
      type: "ONE_MOVIE",
      payload: res.data,
    });
  }

  async function deleteMovie(id: string | undefined) {
    await axios.delete(`${API}/${id}`);
  }

  async function updateMovie(id: string | undefined, movie: Movie) {
    await axios.patch(`${API}/${id}`, movie);
    getMovies();
    getOneMovie(id);
  }

  return (
    <MoviesContext.Provider
      value={{
        movies: state.movies,
        oneMovie: state.oneMovie,
        getMovies,
        createMovie,
        getOneMovie,
        deleteMovie,
        updateMovie,
      }}
    >
      {children}
    </MoviesContext.Provider>
  );
}
