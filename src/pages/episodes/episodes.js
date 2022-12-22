import React, { useState, useEffect } from "react";
import Pagination from "../../components/pagination/pagination";

const Episodes = () => {
  let [fetchedData, updateFetchedData] = useState([]);
  let [episode, setEpisode] = useState(1);
  let apiUrl = `https://rickandmortyapi.com/api/episode/${episode}`;

  useEffect(() => {
    (async function () {
      let src = await fetch(apiUrl);
      let data = await src.json();
      updateFetchedData(data);
    })();
  }, [apiUrl]); //watch on apiUrl
  console.log(fetchedData);
  return (
    <div>
      <Pagination
        page={fetchedData.id}
        setPage={setEpisode}
        totalPages={51}
      ></Pagination>
      episode {fetchedData.id}
    </div>
  );
};

export default Episodes;
