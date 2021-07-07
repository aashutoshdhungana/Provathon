import React from "react";
import place1 from "../../assets/images/places/place1.jpg";
import place2 from "../../assets/images/places/place2.jpg";
import place3 from "../../assets/images/places/place3.jpg";
import place4 from "../../assets/images/places/place4.jpg";
import place5 from "../../assets/images/places/place5.jpg";

function Carousel() {
  return (
    <div>
      <div
        id="carouselExampleIndicators"
        class="carousel slide"
        data-ride="carousel"
      >
        <ol class="carousel-indicators">
          <li
            data-target="#carouselExampleIndicators"
            data-slide-to="0"
            class="active"
          ></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="3"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="4"></li>
        </ol>
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img
              class="d-block w-100 image-resize"
              src={place4}
              alt="First slide"
            />
          </div>
          <div class="carousel-item">
            <img
              class="d-block w-100 image-resize"
              src={place3}
              alt="Second slide"
            />
          </div>
          <div class="carousel-item">
            <img
              class="d-block w-100 image-resize"
              src={place5}
              alt="Third slide"
            />
          </div>
          <div class="carousel-item">
            <img
              class="d-block w-100 image-resize"
              src={place1}
              alt="Fourth slide"
            />
          </div>
          <div class="carousel-item">
            <img
              class="d-block w-100 image-resize"
              src={place2}
              alt="Fifth slide"
            />
          </div>
        </div>
        <a
          class="carousel-control-prev"
          href="#carouselExampleIndicators"
          role="button"
          data-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="sr-only">Previous</span>
        </a>
        <a
          class="carousel-control-next"
          href="#carouselExampleIndicators"
          role="button"
          data-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="sr-only">Next</span>
        </a>
      </div>
    </div>
  );
}

export default Carousel;
