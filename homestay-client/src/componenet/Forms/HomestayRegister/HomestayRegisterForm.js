import React, { useState } from "react";

import "./HomestayRegister.css";

import BasicInfo from "./BasicInfo";
import RoomInfo from "./RoomInfo";
import LandmarksInfo from "./LandmarksInfo";

const HomestayRegisterForm = () => {
  const [data, setData] = useState({
    email: "",
    password: "",
    location: "",
    title: "",
    description: "",
    rooms: [],
    landmarks: [],
  });

  return (
    <div className="container position-relative">
      <h3 className="mt-4 mb-4">Register as Homestay</h3>

      <BasicInfo />

      <RoomInfo />

      <LandmarksInfo />

      <div className="mt-4">
        <button type="submit" className="btn btn-primary ">
          Submit
        </button>
      </div>
    </div>
  );
};

export default HomestayRegisterForm;
