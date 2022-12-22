import Card from "../card/card";
import Pagination from "../pagination/pagination";

const Home = ({ info, results, page, setPage }) => {
  return (
    <main className="container d-flex flex-column gap-3">
      <h1 className="text-center my-3">Characters</h1>
      <div className="row col-12 m-1">
        <Card characters={results}></Card>
      </div>
      <Pagination
        page={page}
        setPage={setPage}
        totalPages={info.pages}
      ></Pagination>
    </main>
  );
};
export default Home;
