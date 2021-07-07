import React from "react";

const Hsregister = () => {
  return (
    <div class="container">
      <h3 className="mt-4 mb-4">Register as Homestay</h3>
      <div class="form-group">
        <label>Email</label>
        <input name="email" class="form-control" placeholder="Enter Email" />
      </div>
      <div class="form-group">
        <label>Password</label>
        <input name="email" class="form-control" placeholder="Enter Password" />
      </div>
      <div class="form-group">
        <label>Location</label>
        <input class="form-control" placeholder="Enter Location" />
      </div>

      <div class="form-group">
        <label>Name of your homestay</label>
        <input name="email" class="form-control" placeholder="Enter Name" />
      </div>
      <div class="form-group">
        <label>Description about your homestay</label>
        <textarea class="form-control" rows="3"></textarea>
      </div>
      <div class="form-group">
        <label>Upload a profile picture of your homestay</label>
        <input name="email" type="file" class="form-control" />
      </div>
      <div class="form-group">
        <label>Describe about the room you offer</label>
        <textarea class="form-control" rows="3"></textarea>
      </div>
      <div class="form-group">
        <label>Price per room</label>
        <input class="form-control" />
      </div>
      <div class="form-group">
        <label>Upload picture showing the rooms that you offer</label>
        <input name="email" type="file" multiple class="form-control" />
      </div>
      <div class="form-group">
        <label>
          Describe about the landmarks and attraction near your place
        </label>
        <textarea class="form-control" rows="3"></textarea>
        <label>Upload the images of those major attraction</label>
        <input name="email" type="file" multiple class="form-control" />
      </div>
      <div class="form-group">
        <label>Describe about food you offer </label>
        <textarea class="form-control" rows="3"></textarea>
        <label>Upload the images showing those food</label>
        <input name="email" type="file" multiple class="form-control" />
      </div>

      <button type="submit" class="btn btn-primary">
        Submit
      </button>
    </div>
  );
};

export default Hsregister;
