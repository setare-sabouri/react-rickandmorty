import Card from "../card/card";
import Pagination from "../pagination/pagination";
const Home = ({ results }) => {
  return (
    <main className="container d-flex flex-column gap-3">
      <h1 className="text-center my-3">Characters</h1>
      <div className="row col-12 m-1">
        <Card characters={results}></Card>
      </div>
      <Pagination></Pagination>
    </main>
  );
};
export default Home;
