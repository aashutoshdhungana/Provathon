import React from "react";
import userPhoto from "../../assets/images/landmarks/forest1.jpg";

const Search = () => {
  return (
    <div>
      <h1>This is Main page</h1>
      <p>Searching filter etc...</p>
      <div class="row">
        <div class="col-sm-3">

        </div>
        <div class="col-sm-6">
        <input class="form-control form-control-lg" type="text" placeholder="search" />
       
        <div class="text-center">
        <h5  class="text-center mt-2">filter: </h5>
        <div class="form-check">
          <div class="d-inline mr-5">
            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
            <label class="form-check-label" for="flexCheckDefault">
              location
            </label>
          </div>
          <div class="d-inline mr-5">
            <input class="form-check-input " type="checkbox" value="" id="flexCheckDefault" />
            <label class="form-check-label" for="flexCheckDefault">
              Attractions
            </label>
          </div>
          
          <div class="d-inline mr-5">
            <input class="form-check-input " type="checkbox" value="" id="flexCheckDefault" />
            <label class="form-check-label" for="flexCheckDefault" >
              Homestay name
            </label>
          
          </div>
          </div>
        </div>
        </div>
        <div class="col-sm-3">

        </div>
        

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
              <div class="col-sm-6">
                

              </div>
              <p class="text-justify">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse non tortor a arcu mollis ullamcorper. Ut placerat justo sed nisl rhoncus, in dapibus nunc rhoncus. Aenean in odio tellus. Cras malesuada a ante vitae mattis. Mauris sed urna vitae dolor pretium bibendum ut nec nulla. Mauris sagittis quam vel gravida gravida. </p>
            </div>
            <button type="button" class="btn btn-primary">Read More</button>

          </div>

        </div>
        </div>

      </div>
    </div>
  );
};

export default Search;
