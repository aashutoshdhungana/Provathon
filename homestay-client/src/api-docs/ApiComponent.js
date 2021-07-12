import React, { Component } from "react";

import "./style.css";

import ApiItem from "./ApiItem";
import Description from "./Description";
import {
  fetchIndex,
  registerUser,
  login,
} from "./services/index_endpoints_services";
import { _register, _login } from "./api_datas/index_routes_data";

const methods = {
  get: "get",
  post: "post",
  put: "put",
  delete: "delete",
};

export default class ApiComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      index: 0,
      response: null,
    };
  }

  onFetchIndex = async () => {
    try {
      const data = await fetchIndex();
      this.setState(() => ({ index: 1, response: data }));
    } catch (err) {
      console.log(err);
    }
  };

  onRegisterUser = async () => {
    const data = {
      firstName: "sangeeta",
      lastName: "kumal",
      email: "sangeeta@gmail.com",
      password: "sangeeta123",
      phoneNum: "9861121314",
    };

    try {
      const response = await registerUser(data);
      this.setState(() => ({ index: 2, response: response }));
    } catch (err) {
      console.log(err);
    }
  };

  onUserLogin = async () => {
    const data = {
      email: "sangeeta@gmail.com",
      password: "sangeeta123",
    };
    try {
      const response = await login(data);
      this.setState(() => ({ index: 3, response: response }));
    } catch (err) {
      console.log(err);
    }
  };

  render() {
    return (
      <div>
        <h1>Checking api......</h1>

        <section className="index">
          <h2>Index routes</h2>

          <div className="api-item">
            <ApiItem method={methods.get} url="/" onFetch={this.onFetchIndex}>
              <div className="description">
                <p>Description : Gives information about api</p>
              </div>
            </ApiItem>
            <div className="json">
              {this.state.index === 1 ? (
                <div>{JSON.stringify(this.state.response)}</div>
              ) : (
                ""
              )}
            </div>
          </div>

          <div className="api-item">
            <ApiItem
              method={methods.post}
              url="/register"
              onFetch={this.onRegisterUser}
            >
              <Description
                description={_register.description}
                params={_register.params}
              />
            </ApiItem>
            <div>
              {this.state.index === 2 ? (
                <div>{JSON.stringify(this.state.response)}</div>
              ) : (
                ""
              )}
            </div>
          </div>

          <div className="api-item">
            <ApiItem
              method={methods.post}
              url="/login"
              onFetch={this.onUserLogin}
            >
              <Description
                description={_login.description}
                params={_login.params}
              />
            </ApiItem>
            <div>
              {this.state.index === 3 ? (
                <div>{JSON.stringify(this.state.response)}</div>
              ) : (
                ""
              )}
            </div>
          </div>
        </section>
      </div>
    );
  }
}
