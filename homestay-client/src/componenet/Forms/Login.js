import React, { useState } from "react";

const Login = () => {
  const intialValues = {
    email: "",
    password: "",
  };

  const [values, setValues] = useState(intialValues);
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const data = values.email;
    alert(data);
  };
  return (
    <div class="container mt-3">
      <div className="row">
        <div className="col-md-6 mr-auto ml-auto">
          <h3 className="p-2 mt-3 mb-3">Log in </h3>
          <form onSubmit={handleSubmit}>
            <div class="form-group">
              <label>Email address</label>
              <input
                type="email"
                name="email"
                value={values.email}
                onChange={handleInputChange}
                class="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="Enter email"
              />
            </div>
            <div class="form-group">
              <label>Password</label>
              <input
                type="password"
                name="password"
                value={values.password}
                onChange={handleInputChange}
                class="form-control"
                placeholder="Password"
              />
            </div>
            <button type="submit" class="btn btn-primary">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
