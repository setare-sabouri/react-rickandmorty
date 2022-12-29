import ReactPaginate from "react-paginate";
const Pagination = ({ current, onChange, total }) => {
  let changePage = (clicked) => {
    console.log(clicked.selected + 1);
    onChange(clicked.selected + 1);
  };
  return (
    // <div className="row">
    <ReactPaginate
      className="pagination justify-content-center my-4 gap-4 "
      activePage={current}
      pageCount={total}
      pageRangeDisplayed={2}
      onPageChange={changePage}
      nextLabel="Next"
      previousLabel="Prev"
      previousClassName="btn btn-primary fs-5 prev"
      nextClassName="btn btn-primary fs-5 next"
      activeClassName="active"
      pageClassName="page-item"
      pageLinkClassName="page-link"
    />
    // </div>

  );
};

export default Pagination;
