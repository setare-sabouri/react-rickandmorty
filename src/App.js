import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";
import React, { useState, useEffect } from "react";
import "./App.css";
import Card from "./components/card/card";
import Navbar from "./components/navbar/navbar";

function App() {
  let apiUrl = `https://rickandmortyapi.com/api/character/?page=${1}`;
  let [fetchedData, updateFetchedData] = useState([]);
  let { info, results } = fetchedData;
  console.log(info);
  useEffect(() => {
    (async function () {
      let src = await fetch(apiUrl);
      let data = await src.json();
      updateFetchedData(data);
    })();
  }, [apiUrl]); //watch on apiUrl

  return (
    <div className="main-wrapper">
      <Navbar></Navbar>
      <main className="container d-flex flex-column gap-3">
        <h1 className="text-center">Characters</h1>
        <div className="row">
          Filter component will be placed here
          <div className="col-lg-8 col-12">
            <div className="row">
              <Card characters={results}></Card>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
