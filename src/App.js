import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";
import React, { useState, useEffect } from "react";
import "./App.css";


function App() {
  let apiUrl = `https://rickandmortyapi.com/api/character/?page=${1}`;
  let [fetchedData, updateFetchedData] = useState([]);
  console.log(fetchedData);
  useEffect(() => {
    (async function () {
      let src = await fetch(apiUrl);
      let data = await src.json();
      updateFetchedData(data);
    })();
  }, [apiUrl]); //watch on apiUrl

  return (
    <div className="main-wrapper">
      <nav className="navbar">navbar</nav>
      <main className="container">
        <h1 className="text-center mb-3">Characters</h1>
        <div className="row">
          Filter component will be placed here
          <div className="col-lg-8 col-12">
            <div className="row">Card component will be placed here</div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
