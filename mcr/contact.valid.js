import Joi from "joi";

export const messageValidation = Joi.object({
  name: Joi.string().min(1).max(50).required(),
  contactInfo: Joi.string().required(),
  category: Joi.string().min(1).max(30).alphanum(),
  message: Joi.string().min(5).required(),
});
