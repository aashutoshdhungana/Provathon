import React from "react";

const BasicInfo = () => {
  return (
    <div class="track incomplete position-relative ">
      <h3 className="mt-4">Basic Info</h3>
      <div className="form-group">
        <label>Email</label>
        <input
          name="email"
          className="form-control"
          placeholder="Enter Email"
        />
      </div>
      <div className="form-group">
        <label>Password</label>
        <input
          name="email"
          className="form-control"
          placeholder="Enter Password"
        />
      </div>
      <div className="form-group">
        <label>Location</label>
        <input className="form-control" placeholder="Enter Location" />
      </div>

      <div className="form-group">
        <label>Name of your homestay</label>
        <input name="email" className="form-control" placeholder="Enter Name" />
      </div>
      <div className="form-group">
        <label>Description about your homestay</label>
        <textarea className="form-control" rows="3"></textarea>
      </div>
      <div className="form-group">
        <label>Upload a profile picture of your homestay</label>
        <input name="email" type="file" className="form-control" />
      </div>
    </div>
  );
};

export default BasicInfo;
