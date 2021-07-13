/**
 * http://127.0.0.1:5000/
 * endpoint: '/users'
 * description : user features
 */

const baseURL = "http://127.0.0.1:5000/users/";

export const addBookmark = (userId, homestayId) => {
  const data = fetch(`${baseURL}/addBookmark`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      userId,
      homestayId,
    })
      .then((res) => res.json())
      .catch((err) => console.log(err)),
  });
};
