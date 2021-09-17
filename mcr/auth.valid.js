import Joi from "joi";

export const login = Joi.object({
  username: Joi.string().min(6).max(30).alphanum().required(),
  password: Joi.string().min(6).max(30).required(),
});
