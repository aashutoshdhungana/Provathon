import * as UserFeatures from "../../service/userFeatureServices";

export const insertReview = function (req, res, next) {
  UserFeatures.insertReview(req.body)
    .then((data) => res.status(200).json(data))
    .catch((err) => next(err));
};
