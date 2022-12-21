// import ReactPaginate from "react-paginate";
import React, { useState } from "react";

import ReactPaginate from "react-paginate";
const Pagination = ({ page, setPage }) => {
  return (
    <ReactPaginate
      activePage={page}
      totalItemsCount={450}
      pageRangeDisplayed={5}
      className="pagination justify-content-center my-4 gap-4"
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
