//Validation
import Joi from "joi";

//REGISTER
export const registerValidation = Joi.object({
  username: Joi.string().min(6).max(30).alphanum().required(),
  password: Joi.string().min(6).max(30).required(),
  email: Joi.string().min(6).max(50).required().email(),
});

//LOGIN
export const loginValidation = Joi.object({
  username: Joi.string().min(6).max(30).alphanum().required(),
  password: Joi.string().min(6).max(30).required(),
});
