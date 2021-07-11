import React, { useState } from "react";

const RoomInfo = () => {
  const [room, setRoomValue] = useState({
    title: "",
    description: "",
    price: 0.0,
  });

  const onChangeHandler = (e) => {
    let { value, name } = e.target;
    if (name === "price") {
      value = parseFloat(value, 10);
    }
    setRoomValue({
      ...room,
      [name]: value,
    });

    console.log(room);
  };

  return (
    <div className="track incomplete position-relative">
      <h3>Rooms</h3>
      <div className="form-group">
        <label>Describe about the room you offer</label>
        <textarea
          name="description"
          className="form-control"
          rows="3"
          onChange={onChangeHandler}
          value={room.description}
        ></textarea>
      </div>

      <div className="form-group">
        <label>Title of room</label>
        <input
          name="title"
          className="form-control"
          onChange={onChangeHandler}
          value={room.title}
        />
      </div>

      <div className="form-group">
        <label>Price per room</label>

        <input
          name="price"
          className="form-control"
          onChange={onChangeHandler}
          value={room.price}
        />
      </div>
      <div className="form-group">
        <label>Upload picture showing the rooms that you offer</label>
        onChange={onChangeHandler}
        <input
          name="email"
          type="file"
          className="form-control"
          onChange={onChangeHandler}
        />
      </div>
      <button className="btn btn-secondary">add room</button>
    </div>
  );
};

export default RoomInfo;
