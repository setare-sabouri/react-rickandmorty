import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import React, { useState, useEffect } from "react";
import Home from "./components/home/Home";

import Navbar from "./components/navbar/navbar";
import Location from "./pages/locations/locations";
import Episodes from "./pages/episodes/episodes";

function App() {
  let [page, setPage] = useState(3);
  let [fetchedData, updateFetchedData] = useState([]);
  let { info, results } = fetchedData;

  let apiUrl = `https://rickandmortyapi.com/api/character/?page=${page}`;
  useEffect(() => {
    (async function () {
      let src = await fetch(apiUrl);
      let data = await src.json();
      updateFetchedData(data);
    })();
  }, [apiUrl]); //watch on apiUrl

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <Home info={info} results={results} page={page} setPage={setPage} />
          }
        />
        <Route path="/Home" element={<Home results={results} info={info} />} />
        <Route path="/episodes" element={<Episodes />} />
        <Route path="/Location" element={<Location />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
