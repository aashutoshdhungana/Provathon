import React from "react";
import { homestaysDemo } from "../../demo/homestay-demo";
import default_cover from "../../assets/images/default_cover_photo.jpg";

import Room from "./Room";
import Landmark from "./Landmarks";
import Reviews from "./Reviews";

// const ratings=[{
//   user : {
//     username: 'hkeo@21',
//     photo:
//   },
//   review: {
//     rating: 5,
//     review: ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas debitis illum perferendis praesentium consequuntur expedita odio iusto nesciunt! Nam, animi! '
//   }
// }]

const reviews = [{}, {}];

let homestay = homestaysDemo[0];

const HomestayProfile = () => {
  console.log(homestaysDemo);

  const backgroundImgStyle = {
    backgroundImage: `url(${default_cover})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  };

  return (
    <div>
      <div class="hp-banner " style={backgroundImgStyle}>
        <div class="container position-relative">
          <h1 className="hp-banner-title">{homestay.title} Hello</h1>
        </div>
      </div>

      <div class="container mt-4 mb-4 position-relative">
        <div class="row">
          <div className="col-md-8" style={{ maxWidth: "500px" }}>
            <h3 className="mb-3">Description</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi
              dolore quos inventore libero est illum soluta esse animi neque
              officia reiciendis, nulla possimus velit? Eos!
            </p>
          </div>
          <div className="col-md-4">
            <h3 className="mb-3">Contact</h3>
            <div>
              <p className="m-0">Phone : {homestay.phone}</p>
              <p className="m-0">Email : {homestay.email}</p>
            </div>
          </div>
        </div>
      </div>

      <div className="container mt-4 mb-4">
        {!!homestay.landmarks.length && <h3>Rooms </h3>}

        {!!homestay.rooms.length ? (
          <div className="row mt-4 mb-4">
            {homestay.rooms.map((room, key) => (
              <Room info={room} key={room.id} />
            ))}
          </div>
        ) : (
          ""
        )}
      </div>

      <div className="container mt-4 mb-4">
        {!!homestay.landmarks.length && <h3>Landmark and Foods</h3>}

        {!!homestay.landmarks.length ? (
          <div className="row mt-4 mb-4">
            {homestay.landmarks.map((landmark, key) => (
              <Landmark info={landmark} key={landmark.id} />
            ))}
          </div>
        ) : (
          ""
        )}
      </div>

      <div className="container mt-4 mb-4">
        {!!homestay.landmarks.length && <h3>Reviews</h3>}

        {!!reviews.length && (
          <div className="row">
            {reviews.map((rating, key) => (
              <Reviews />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default HomestayProfile;
