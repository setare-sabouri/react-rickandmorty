import Card from "../card/card";
const Home = ({ results }) => {
  return (
    <main className="container d-flex flex-column gap-3">
      <h1 className="text-center my-3">Characters</h1>
      <div className="row col-12 m-1">
        <Card characters={results}></Card>
      </div>
    </main>
  );
};
export default Home;
