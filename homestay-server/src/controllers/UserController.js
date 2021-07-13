import * as UserService from "../service/UserService";

export const login = function (req, res, next) {
  console.log(req.body);
  UserService.loginAsync(req.body.email, req.body.password)
    .then((loginResponse) => res.json(loginResponse))
    .catch((err) => next(err));
};

export const register = function (req, res, next) {
  UserService.registerAsync(req.body)
    .then((registerResponse) => res.json(registerResponse))
    .catch((err) => next(err));
};

export const updateProfile = function (req, res, next) {
  console.log(req.params.id, req.body);
  UserService.updateProfile(req.params.id, req.body)
    .then((updateResponse) => res.json(updateResponse))
    .catch((err) => next(err));
};
