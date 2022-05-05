import React from "react";
import { Link } from "react-router-dom";

const Tablecategory = ({item, index}) => {
  return (
    <tbody className="">
      <tr className="">
        <td scope="row" className="align-middle">
          {item.id + 1 }
        </td>
        <td className="align-middle">{item.name}</td>
        <td className="">
          <div className="d-flex">
            <div>
              <Link to={`/edit-category/${item.id}`} className="btn btn-success m-1 px-4" type="button">
                Edit
              </Link>
            </div>
            <button className="btn btn-danger m-1 px-3" type="button" data-bs-toggle="modal" data-bs-target="#exampleModal">
              Delete
            </button>
            <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
              <div class="modal-dialog modal-dialog-centered">
                <div class="modal-content">
                  <div class="modal-body text-dark">
                    <h4 className="mt-3">
                      <strong>Delete Data</strong>
                    </h4>
                    <h5>Are you sure you want to delete this data?</h5>
                  </div>
                  <div class="modal-footer border-white">
                    <button type="button" class="btn btn-success py-2 px-5">
                      Yes
                    </button>
                    <button type="button" class="btn btn-danger py-2 px-5" data-bs-dismiss="modal">
                      No
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </td>
      </tr>
    </tbody>
  );
};

export default Tablecategory;
