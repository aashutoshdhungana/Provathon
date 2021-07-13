import * as UserFeatures from "../service/userFeatureServices";

export const createCheckIn = function (req, res, next) {
  UserFeatures.createCheckin(req.body)
    .then((data) => res.status(200).json(data))
    .catch((err) => next(err));
};

export const getUserFeed = function (req, res, next) {};
