import { decode } from "jsonwebtoken";
import * as UserFeatures from "../../service/userFeatureServices";

export const addBookmarks = function (req, res, next) {
  const token = req.headers["authorization"].split(" ")[1];
  const { id: userId } = decode(token);
  UserFeatures.addBookMarks(userId, req.body)
    .then((data) => res.status(200).json(data))
    .catch((err) => next(err));
};

export const removeBookmark = function (req, res, next) {
  const token = req.headers["authorization"].split(" ")[1];
  const { id: userId } = decode(token);
  UserFeatures.removeBookmark(userId, req.params.id)
    .then((data) => res.status(200).json(data))
    .catch((err) => next(err));
};

export const getBookmarks = function (req, res, next) {
  const token = req.headers["authorization"].split(" ")[1];
  const { id: userId } = decode(token);
  UserFeatures.getBookmarksByUserId(userId)
    .then((data) => res.status(200).json(data))
    .catch((err) => next(err));
};
