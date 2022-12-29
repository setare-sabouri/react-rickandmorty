import React, { useState, useEffect } from "react";
import Pagination from "../../components/pagination/pagination";
import Card from "../../components/card/card";
const Episodes = () => {
  let [fetchedData, setFetchedData] = useState([]);
  let [characters, setCharacters] = useState([]);
  let [episode, setEpisode] = useState(1);
  let apiUrl = `https://rickandmortyapi.com/api/episode/${episode}`;

  useEffect(() => {
    (async function () {
      let src = await fetch(apiUrl);
      let data = await src.json();
      setFetchedData(data);
      let EpisodeCharacters = await Promise.all(
        data.characters.map((charUrl) => {
          return fetch(charUrl).then((res) => res.json());
        })
      );
      setCharacters(EpisodeCharacters);
    })();
  }, [apiUrl]); //watch on apiUrl
  console.log(fetchedData);
  console.log(characters);
  return (
    <main className="container d-flex flex-column gap-3">
      <h1 className="my-3 text-center">
        Episode {fetchedData.id} released {fetchedData.air_date}
      </h1>
      <div className="row col-12">
        <Pagination
          current={fetchedData.id}
          onChange={setEpisode}
          total={51}
        ></Pagination>
      </div>
      <section className="row col-12">
        <h2> characters :</h2>
        <Card characters={characters}></Card>
      </section>
    </main>
  );
};

export default Episodes;
