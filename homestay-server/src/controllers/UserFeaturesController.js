import { decode } from "jsonwebtoken";
import * as UserFeatures from "../service/userFeatureServices";

export const addBookmarks = function (req, res, next) {
  const token = req.headers["authorization"].split(" ")[1];
  const { id: userId } = decode(token);
  UserFeatures.addBookMarks(userId, req.body)
    .then((data) => res.status(200).json(data))
    .catch((err) => next(err));
};

export const getBookmarks = function (req, res, next) {
  console.log(req.userId);
  UserFeatures.getBookmarksByUserId(req.params.userId)
    .then((data) => res.status(200).json(data))
    .catch((err) => next(err));
};

export const insertReview = function (req, res, next) {
  UserFeatures.insertReview(req.body)
    .then((data) => res.status(200).json(data))
    .catch((err) => next(err));
};

export const createCheckIn = function (req, res, next) {
  UserFeatures.createCheckin(req.body)
    .then((data) => res.status(200).json(data))
    .catch((err) => next(err));
};

export const getUserFeed = function (req, res, next) {};
