import React from "react";

const LandmarksInfo = () => {
  return (
    <div className="track incomplete position-relative">
      <h3 className="mt-4">Landmarks</h3>
      <div className="form-group">
        <label>
          Describe about the landmarks and attraction near your place
        </label>
        <textarea className="form-control" rows="3"></textarea>
        <label>Upload the images of those major attraction</label>
        <input name="email" type="file" multiple className="form-control" />
      </div>
      <div className="form-group">
        <label>Describe about food you offer </label>
        <textarea className="form-control" rows="3"></textarea>
        <label>Upload the images showing those food</label>
        <input name="email" type="file" multiple className="form-control" />
      </div>
    </div>
  );
};

export default LandmarksInfo;
