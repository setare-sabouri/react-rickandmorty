import { useEffect, useState } from "react";
import Card from "../../components/card/card";

const Location = () => {
  const [locationNum, setLocationNum] = useState(1);
  const [isLoading, setIsLoading] = useState(true);
  const [fetchedData, setFetchedData] = useState([]);
  const [residents, setResidents] = useState([]);
  console.log("in location");
  let apiUrl = `https://rickandmortyapi.com/api/location/${locationNum}`;
  useEffect(() => {
    console.log(locationNum);
    (async function () {
      let src = await fetch(apiUrl);
      let data = await src.json();
      setFetchedData(data);
      let residents = await Promise.all(data.residents.map((item) => {
        return fetch(item).then((res) => res.json());
      }))
      setResidents(residents);
      console.log();
    })();
  }, []);

  return (
    <main>
      <h1 className="my-3 text-center">
        Location is {fetchedData.name}
      </h1>
      {/* {isLoading && <p>Loading ...</p>} */}
      <section className="row col-12">
        <h2> nordic residents :</h2>
        <Card characters={residents}></Card>
      </section>
    </main>
  )
};

export default Location;
