import React from "react";

const Room = ({ info }) => {
  return (
    <div className="col-md-4">
      <div className="card">
        <div className="position-relative">
          <img className="card-img-top" src={info.photo} alt={info.title} />
          <span className="room-price">
            {" "}
            Rs.{info.price} <span className="per-night">/ night</span>
          </span>
        </div>
        <div className="card-body">
          <h5 className="card-title">{info.title}</h5>
          <p className="card-text">{info.description}</p>
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
