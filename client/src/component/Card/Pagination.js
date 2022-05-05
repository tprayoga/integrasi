import React from "react";

const Pagination = () => {
  return (
    <nav className="mt-3" aria-label="Page navigation example">
      <ul className="pagination justify-content-start">
        <li className="page-item disabled">
          <a className="page-link bg-dark ">Previous</a>
        </li>
        <li className="page-item">
          <a className="page-link bg-dark text-light" href="#">
            1
          </a>
        </li>
        <li className="page-item">
          <a className="page-link bg-dark text-light" href="#">
            2
          </a>
        </li>
        <li className="page-item">
          <a className="page-link bg-dark text-light" href="#">
            3
          </a>
        </li>
        <li className="page-item">
          <a className="page-link bg-dark text-light" href="#">
            Next
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Pagination;
