import Card from "../../components/card/card";
import Pagination from "../../components/pagination/pagination";
import React, { useState, useEffect } from "react";

const Home = () => {
  let [page, setPage] = useState(1);
  let [fetchedData, setFetchedData] = useState([]);
  let { info, results } = fetchedData;

  let apiUrl = `https://rickandmortyapi.com/api/character/?page=${page}`;
  useEffect(() => {
    (async function () {
      let src = await fetch(apiUrl);
      let data = await src.json();
      setFetchedData(data);
    })();
  }, [apiUrl]); //watch on apiUrl

  return (
    <main className="container row justify-content-center ">
      <h1 className="row my-3">Characters</h1>
      <Pagination
        current={page}
        onChange={setPage}
        total={info?.pages}
      ></Pagination>
      <div className="row col-12 d-flex flex-wrap">
        <Card characters={results}></Card>
      </div>
    </main>
  );
};
export default Home;
