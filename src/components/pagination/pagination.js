import ReactPaginate from "react-paginate";
const Pagination = ({ page, setPage, totalPages }) => {
  let changePage = (clicked) => {
    console.log(clicked.selected + 1);
    setPage(clicked.selected + 1);
  };
  return (
    <ReactPaginate
      activePage={page}
      pageCount={totalPages}
      pageRangeDisplayed={2}
      onPageChange={changePage}
      className="pagination justify-content-center my-4 gap-4 "
      nextLabel="Next"
      previousLabel="Prev"
      previousClassName="btn btn-primary fs-5 prev"
      nextClassName="btn btn-primary fs-5 next"
      activeClassName="active"
      pageClassName="page-item"
      pageLinkClassName="page-link"
    />
  );
};

export default Pagination;
