import * as HomestayService from '../service/HomestayService'

export const homestayLogin = function (req, res, next) {
    HomestayService.loginHomestayAsyc(req.body)
    .then( (loginResponse) => res.json(loginResponse) )
    .catch( (err) => next(err) )
}

export const homestayRegister = function (req, res, next) {
    HomestayService.registerHomestayAsync(req.body)
    .then( (registerResponse) => res.json(registerResponse) )
    .catch( (err) => next(err) )
}

export const getHomestayAsync = function (req, res, next) {
    HomestayService.getHomestayByIdAsync(req.params.id)
    .then( (getResponse) => res.json(getResponse))
    .catch( (err) => next(err) )
}