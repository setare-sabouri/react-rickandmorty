import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";
import React, { useContext, useEffect } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar/navbar";
import Home from "./pages/home/Home";
import Location from "./pages/locations/locations";
import Episodes from "./pages/episodes/episodes";
import { themeContext } from "./contexts/themecontext";

function App() {
  const { Theme } = useContext(themeContext);
  const mkDark = () => {
    document.body.style.backgroundColor = "black"
    document.body.style.color = "white"
  }
  const mkLight = () => {
    document.body.style.backgroundColor = "white"
    document.body.style.color = "black"
  }
  useEffect(() => {
    { Theme ? mkDark() : mkLight() }

  });
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/characters" element={<Home />} />
        <Route path="/episodes" element={<Episodes />} />
        <Route path="/Location" element={<Location />} />
      </Routes>
    </BrowserRouter >
  );
}

export default App;
