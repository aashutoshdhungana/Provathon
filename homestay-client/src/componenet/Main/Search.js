import React from "react";
import { Link } from "react-router-dom";
import userPhoto from "../../assets/images/landmarks/forest1.jpg";
import { homestaysDemo } from "../../demo/homestay-demo";

const Search = () => {
  return (
    <div>
      <h1>Search Homestay here</h1>
      <div class="row">
        <div class="col-sm-3"></div>
        <div class="col-sm-6">
          <input
            class="form-control form-control-lg"
            type="text"
            placeholder="search"
          />

          <div class="text-center">
            <h5 class="text-center mt-2">filter: </h5>
            <div class="form-check">
              <div class="d-inline mr-5">
                <input
                  class="form-check-input"
                  type="checkbox"
                  value=""
                  id="flexCheckDefault"
                />
                <label class="form-check-label" for="flexCheckDefault">
                  location
                </label>
              </div>
              <div class="d-inline mr-5">
                <input
                  class="form-check-input "
                  type="checkbox"
                  value=""
                  id="flexCheckDefault"
                />
                <label class="form-check-label" for="flexCheckDefault">
                  Attractions
                </label>
              </div>

              <div class="d-inline mr-5">
                <input
                  class="form-check-input "
                  type="checkbox"
                  value=""
                  id="flexCheckDefault"
                />
                <label class="form-check-label" for="flexCheckDefault">
                  Homestay name
                </label>
              </div>
            </div>
          </div>
        </div>
        <div class="col-sm-3"></div>
      </div>

      <div class="alert alert-primary">
        <div class="container">
          <div class="row">
            <div class="col-sm-6">
              <img class="search-resize text-center" src={userPhoto} />
            </div>
            <div class="col-sm-6">
              <div class="row">
                <div class="col-sm-6">
                  <h3 class="mb-3">title</h3>
                </div>
                <div class="col-sm-6"></div>
                <p class="text-justify">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse non tortor a arcu mollis ullamcorper. Ut placerat
                  justo sed nisl rhoncus, in dapibus nunc rhoncus. Aenean in
                  odio tellus. Cras malesuada a ante vitae mattis. Mauris sed
                  urna vitae dolor pretium bibendum ut nec nulla. Mauris
                  sagittis quam vel gravida gravida.{" "}
                </p>
              </div>
              <Link to={`/homestay/${homestaysDemo[0].id}`}>
                <button type="button" class="btn btn-primary">
                  Read More
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Search;
