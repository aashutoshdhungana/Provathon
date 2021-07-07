import React from "react";

import userPhoto from "../assets/images/landmarks/forest1.jpg";
const Bookmaks = () => {
  return (
    <div className="container">
      <h1>Your Bookmaks</h1>
      <div class="row">
        <div class="col-sm-4">
          <div class="card">
            <img
              class="card-img-top bookmark-image"
              src={userPhoto}
              alt="homestay-bookmark"
            />
            <div class="card-body">
              <h5 class="card-title text-center">homestay title</h5>
              <p class="card-text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et
                quam efficitur, porta ex eget, aliquet risus. Praesent feugiat
                metus quis nunc congue, eget finibus lacus efficitur.
              </p>
            </div>
          </div>
        </div>
        <div class="col-sm-4">
          <div class="card">
            <img
              class="card-img-top bookmark-image"
              src={userPhoto}
              alt="homestay-bookmark"
            />
            <div class="card-body">
              <h5 class="card-title text-center">homestay title</h5>
              <p class="card-text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et
                quam efficitur, porta ex eget, aliquet risus. Praesent feugiat
                metus quis nunc congue, eget finibus lacus efficitur.
              </p>
            </div>
          </div>
        </div>
        <div class="col-sm-4"></div>
      </div>
    </div>
  );
};

export default Bookmaks;
