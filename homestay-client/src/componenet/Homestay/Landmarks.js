import React from "react";

const Landmark = ({ info }) => {
  return (
    <div className="col-md-4">
      <div className="card">
        <img className="card-img-top" src={info.photo} alt={info.title} />
        <div className="card-body">
          <h5 className="card-title">{info.title}</h5>
          <p className="card-text">{info.description}</p>
        </div>
      </div>
    </div>
  );
};

export default Landmark;

// <div>
//   <div style={{ maxHeight: "200px", objectFit: "cover" }}>
//     <img
//       src={info.photo}
//       alt={info.title}
//       style={{ height: "100%", width: "100%" }}
//     />
//   </div>
//   <div>
//     <h4 className="mt-3">{info.title}</h4>
//     <p>{info.description}</p>
//   </div>
// </div>
