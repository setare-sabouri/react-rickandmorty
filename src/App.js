import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import React, { useState, useEffect } from "react";

import Card from "./components/card/card";
import Navbar from "./components/navbar/navbar";
import Pagination from "./components/pagination/pagination";
// import Location from "./pages/locations";
// import Episodes from "./pages/episodes";

function App() {
  return (
    <BrowserRouter>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}
const Home = () => {
  let [fetchedData, updateFetchedData] = useState([]);
  let { info, results } = fetchedData;
  let apiUrl = `https://rickandmortyapi.com/api/character/?page=${1}`;

  useEffect(() => {
    (async function () {
      let src = await fetch(apiUrl);
      let data = await src.json();
      updateFetchedData(data);
    })();
  }, [apiUrl]); //watch on apiUrl

  return (
    <div className="main-wrapper">
      <main className="container d-flex flex-column gap-3">
        <h1 className="text-center">Characters</h1>
        <div className="row">
          <div className=" col-12">
            <div className="row">
              <Card characters={results}></Card>
            </div>
          </div>
        </div>
      </main>
      <Pagination></Pagination>
    </div>
  );
};
export default App;
