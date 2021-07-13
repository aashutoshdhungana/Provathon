import joi, { assert } from "joi";

const REGISTER_HOMESTAY_SCHEMA = joi
  .object()
  .keys({
    title: joi.string().min(5).max(50).required(),
    description: joi.string().max(250).min(5).required(),
    email: joi.string().email().required(),
    password: joi.string().min(8).required(),
    phoneNum: joi.string().min(5).max(10),
    location: joi.string().required(),
    rooms: joi
      .array()
      .min(0)
      .items(
        joi.object().keys({
          title: joi.string().min(0).max(30).required(),
          description: joi.string().min(0).max(100).required(),
          price: joi.number().precision(2).required(),
        })
      )
      .required(),
    foods: joi
      .array()
      .min(0)
      .required()
      .items(
        joi.object().keys({
          title: joi.string().min(0).max(30).required(),
          description: joi.string().min(0).max(100).required(),
        })
      ),
    services: joi
      .array()
      .min(0)
      .items(
        joi.object().keys({
          title: joi.string().min(0).max(30).required(),
          description: joi.string().min(0).max(100).required(),
        })
      )
      .required(),
    attractions: joi
      .array()
      .min(0)
      .required()
      .items(
        joi.object().keys({
          title: joi.string().min(0).max(30).required(),
          description: joi.string().min(0).max(100).required(),
        })
      ),
  })
  .required();

export function validateRegisterHomestay(req, res, next) {
  const { error, value } = REGISTER_HOMESTAY_SCHEMA.validate(req.body);
  if (error) {
    next(error);
  } else {
    next();
  }
}
