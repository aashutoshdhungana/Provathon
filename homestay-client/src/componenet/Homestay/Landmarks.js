import React from "react";

const Landmark = ({ info }) => {
  return (
    <div class="col-md-4">
      <div class="card">
        <img class="card-img-top" src={info.photo} alt={info.title} />
        <div class="card-body">
          <h5 class="card-title">{info.title}</h5>
          <p class="card-text">{info.description}</p>
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
