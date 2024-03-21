import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/Home.Page";
import MoviePage from "./pages/Movie.Page";
import PlayPage from "./pages/Play.page";

function App() {
  return (
    <Routes>
      <Route path="/ " element={<HomePage />}></Route>
      <Route path="/movie/:id" element={<MoviePage />}></Route>
      <Route path="/plays" element={<PlayPage />} />
    </Routes>
  );
}
export default App;
