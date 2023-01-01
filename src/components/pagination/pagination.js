import ReactPaginate from "react-paginate";
const Pagination = ({ current, onChange, total }) => {
  let changePage = (clicked) => {
    console.log(clicked.selected + 1);
    onChange(clicked.selected + 1);
  };
  return (
    <div className="row">
      <ReactPaginate
        className="pagination justify-content-center gap-2"
        activePage={current}
        pageCount={total}
        pageRangeDisplayed={1}
        onPageChange={changePage}
        nextLabel="Next"
        previousLabel="Prev"
        previousClassName="btn btn-primary prev"
        nextClassName="btn btn-primary next"
        activeClassName="active"
        pageClassName="page-item"
        pageLinkClassName="page-link p-xs-1 p-sm-2 p-md-3 p-lg-3 p-xl-4 p-2"
      />
    </div>

  );
};

export default Pagination;
