import axios from "axios";
import { stat } from "fs";
import React, { ReactNode, useReducer } from "react";
import { createContext } from "react";

// ! tipizacja propsov children

interface ChildrenProps {
  children: ReactNode;
}

//! tipizacyja produkta

export interface TrandingMovie {
  img: string;
  title: string;
  genre: string;
  id?: number;
}

//! tipizacja contexta

interface ContextType {
  movies: TrandingMovie[];
  oneMovie: TrandingMovie | null;
  getTrendingMovies: () => void;
  createMovie: (movie: TrandingMovie) => void;
  getOneMovie: (id: string | undefined) => void;
  deleteMovie: (id: string | undefined) => void;
  updateMovie: (id: string | undefined) => void;
}

//! tipizacja reducer

type Action =
  | { type: "GET_MOVIES"; payload: TrandingMovie[] }
  | {
      type: "GET_ONE_MOVIE";
      payload: TrandingMovie;
    };

//! tipizacja init state

interface INIT_STATE {
  movies: TrandingMovie[];
  oneMovie: TrandingMovie | null;
}

const API = "http://localhost:8000/trendigmovies";

const INIT_STATE: INIT_STATE = {
  movies: [],
  oneMovie: null,
};

export const TrendingContext = createContext<ContextType | undefined>(
  undefined
);

function reducer(state: INIT_STATE, action: Action) {
  switch (action.type) {
    case "GET_MOVIES":
      return { ...state, movies: action.payload };
    case "GET_ONE_MOVIE":
      return { ...state, oneMovie: action.payload };
  }
}

export default function TrendingContextProvider({ children }: ChildrenProps) {
  const [state, dispatch] = useReducer(reducer, INIT_STATE);

  async function getTrendingMovies() {
    let res = await axios.get(API);
    dispatch({
      type: "GET_MOVIES",
      payload: res.data,
    });
  }

  async function createMovie(movie: TrandingMovie) {
    await axios.post(API, movie);
  }

  async function getOneMovie(id: string | undefined) {
    let res = await axios.get(`${API}/${id}`);
    dispatch({
      type: "GET_ONE_MOVIE",
      payload: res.data,
    });
  }

  async function deleteMovie(id: string | undefined) {
    await axios.delete(`${API}/${id}`);
  }

  async function updateMovie(id: string | undefined) {
    await axios.patch(`${API}/${id}`);
    getOneMovie(id);
  }

  return (
    <TrendingContext.Provider
      value={{
        movies: state.movies,
        oneMovie: state.oneMovie,
        getTrendingMovies,
        createMovie,
        getOneMovie,
        deleteMovie,
        updateMovie,
      }}
    >
      {children}
    </TrendingContext.Provider>
  );
}
