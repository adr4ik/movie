import "./App.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Homepage from "./pages/HomePage";
import Header from "./components/Header/Header";
import AddTrendingFrom from "./pages/AddTrendingFrom";
import TrendingContextProvider from "./contexts/TrendingContext";
import TrandingDetails from "./pages/TrandingDetails";

import Movies from "./pages/Movies/Movies";
import MoviesContextProvider from "./contexts/NewReleaseContext";
import MoviesDetails from "./pages/Movies/MoviesDetails/MoviesDetils";

function App() {
  return (
    <MoviesContextProvider>
      <TrendingContextProvider>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route index element={<Homepage />} />
            <Route path="/add-tranding" element={<AddTrendingFrom />} />
            <Route path="/tranding/:id" element={<TrandingDetails />} />
            <Route path="/movies" element={<Movies />} />
            <Route path="/movies-details/:id" element={<MoviesDetails />} />
          </Routes>
        </BrowserRouter>
      </TrendingContextProvider>
    </MoviesContextProvider>
  );
}

export default App;
