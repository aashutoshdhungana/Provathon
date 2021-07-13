import joi from "joi";

const UPDATE_USER_SCHEMA = joi.object().keys({
  firstName: joi.string(),
  lastName: joi.string(),
  password: joi.string().min(8),
  phoneNum: joi.string().max(10).min(10),
});

const CREATE_USER_SCHEMA = joi.object().keys({
  firstName: joi.string().required(),
  lastName: joi.string().required(),
  password: joi.string().min(8).required(),
  email: joi
    .string()
    .regex(
      /^(?=.{1,64}@)[A-Za-z0-9_-]+(\\.[A-Za-z0-9_-]+)*@[^-][A-Za-z0-9-]+(\\.[A-Za-z0-9-]+)*(\\.[A-Za-z]{2,})$/
    )
    .required(),
  phoneNum: joi.string().max(10).min(10),
});

export function validateCreateUser(req, res, next) {
  try {
    joi.assert(res.body, CREATE_USER_SCHEMA);
    next();
  } catch (err) {
    next(err);
  }
}

export function validateUpdateUser(req, res, next) {
  try {
    joi.assert(res.body, UPDATE_USER_SCHEMA);
    next();
  } catch (err) {
    next(err);
  }
}
