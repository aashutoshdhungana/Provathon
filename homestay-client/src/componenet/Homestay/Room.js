import React from "react";

const Room = ({ info }) => {
  return (
    <div class="col-md-4">
      <div class="card">
        <div className="position-relative">
          <img class="card-img-top" src={info.photo} alt={info.title} />
          <span className="room-price">
            {" "}
            Rs.{info.price} <span className="per-night">/ night</span>
          </span>
        </div>
        <div class="card-body">
          <h5 class="card-title">{info.title}</h5>
          <p class="card-text">{info.description}</p>
        </div>
      </div>
    </div>
  );
};

export default Room;

// <div className="hp-sections-cards hp-box col-md-4  pt-4 pb-4">
//   <div>
//     <div
//       className=""
//       style={{
//         maxHeight: "300px",
//         position: "relative",
//       }}
//     >
//       <img
//         src={info.photo}
//         alt={info.title}
//         style={{ height: "100%", width: "100%", objectFit: "cover" }}
//       />
//       <span className="room-price"> Rs.{info.price}</span>
//     </div>
//     <div className="p2">
//       <h4 className="mt-3">{info.title}</h4>
//       <p>{info.description}</p>
//     </div>
//   </div>
// </div>
