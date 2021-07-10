import React from "react";

import userPhoto from "../../assets/images/default_user_avatar.png";

const Reviews = () => {
  return (
    <div className="col-md-6">
      <div className="card">
        <div className="card-body d-flex flex-row">
          <div className="mr-3" style={{ width: "40%" }}>
            <img
              src={userPhoto}
              style={{ width: "100%", height: "auto", verticalAlign: "middle" }}
              alt="review-user-avatar"
            />
          </div>
          <div>
            <h5 className="card-title">
              <span className="review-stars">
                <i className="fa fa-star" aria-hidden="true"></i>
              </span>
            </h5>
            <p className="card-text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa
              ratione voluptatibus quas maiores voluptates maxime velit itaque
              veritatis debitis porro!
            </p>
            <p className="card-text">
              <small className="text-muted">Kirtee | 20/20/2020</small>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

// <div>
//   <div>Imgage</div>
//   <div>
//     <div>
//       <p>stars</p>
//       <p>
//         Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia ab
//         praesentium quia odio totam omnis unde sapiente, sint harum culpa
//         placeat perspiciatis, quaerat mollitia aliquid. Dolore, omnis unde
//         voluptate maxime, est voluptatem fugiat rem sunt ex, tenetur eaque
//         facere asperiores?
//       </p>
//     </div>
//     <div class="user-info">
//       <span>name</span>|<span>20/20/2020</span>
//     </div>
//   </div>
// </div>

export default Reviews;
