import Card from "../card/card";
import Pagination from "../pagination/pagination";
import React, { useState, useEffect } from "react";
const Home = () => {
  let [page, setPage] = useState(1);
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
    <main className="container d-flex flex-column gap-3">
      <h1 className="text-center my-3">Characters</h1>
      <div className="row col-12 m-1">
        <Card characters={results}></Card>
      </div>
      <Pagination
        page={page}
        setPage={setPage}
        totalPages={info?.pages}
      ></Pagination>
    </main>
  );
};
export default Home;
