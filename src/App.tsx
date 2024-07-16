import "./App.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Homepage from "./pages/HomePage";
import Header from "./components/Header/Header";
import AddTrendingFrom from "./pages/AddTrendingFrom";
import TrendingContextProvider from "./contexts/TrendingContext";
import TrandingDetails from "./pages/TrandingDetails";
import EditFrom from "./pages/EditForm/EditForm";

function App() {
  return (
    <TrendingContextProvider>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route index element={<Homepage />} />
          <Route path="/add-tranding" element={<AddTrendingFrom />} />
          <Route path="/tranding/:id" element={<TrandingDetails />} />
          <Route path="/edit-form" element={<EditFrom />} />
        </Routes>
      </BrowserRouter>
    </TrendingContextProvider>
  );
}

export default App;
