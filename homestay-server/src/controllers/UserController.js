import * as UserService from '../service/UserService';

export const login = function (req, res, next) {
    UserService.loginAsync(req.body.email, req.body.password)
    .then((loginResponse) => res.json(loginResponse))
    .catch( (err)=>next(err) )
}

export const register = function (req, res, next) {
    UserService.registerAsync(req.body)
    .then((registerResponse) => res.json(registerResponse))
    .catch((err) => next(err));
}