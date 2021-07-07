import * as UserFeatures from '../service/userFeatureServices';

export const addBookmarks = async function (req, res, next) {
    UserFeatures.addBookMarks(req.body)
    .then( (data) => res.status(200).json(data))
    .catch( (err) => next(err));
};

export const getBookmarks = function (req, res, next) {
    UserFeatures.getBookmarksByUserId(req.params.userId)
    .then( (data) => res.status(200).json(data))
    .catch( (err) => next(err));
};

export const insertReview = function (req, res, next) {
    UserFeatures.insertReview(req.body)
    .then( (data) => res.status(200).json(data))
    .catch( (err) => next(err));
};

export const createCheckIn = function (req, res, next) {
    UserFeatures.createCheckin(req.body)
    .then( (data) => res.status(200).json(data))
    .catch( (err) => next(err));
}

export const getUserFeed = function (req, res, next) {

}