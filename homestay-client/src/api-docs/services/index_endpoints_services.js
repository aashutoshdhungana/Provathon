/**
 * http://127.0.0.1:5000/
 * 127.0.0.1://5000
 * endpoint: '/'
 * description : index route gives about api
 */

const baseURL = "http://127.0.0.1:5000";

export const fetchIndex = () => {
  const data = fetch(`${baseURL}`)
    .then((res) => res.json())
    .catch((err) => console.log(err));
  return data;
};

export const login = ({ password, email }) => {
  const user = fetch(`${baseURL}/login`, {
    method: "POST",
    body: JSON.stringify({
      password,
      email,
    }),
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((res) => res.json())
    .catch((err) => console.log(err));

  return user;
};

export const registerUser = (data) => {
  const user = fetch(`${baseURL}/register`, {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((res) => res.json())
    .catch((err) => console.log(err));

  return user;
};
