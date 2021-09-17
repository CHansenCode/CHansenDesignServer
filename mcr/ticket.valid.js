import Joi from "joi";

export const ticketValidation = Joi.object({
  title: Joi.string().min(2).max(48).required(),
  body: Joi.string().min(10).max(500),
  category: Joi.string().allow(""),
  whatHappened: Joi.string().min(10).max(500),
  whatSupposed: Joi.string().min(10).max(500),
  etc: Joi.string().min(0).max(500),
  resolved: Joi.boolean(),

  status: Joi.string().allow("resolved", "pending review", "in progress", "on hold", "dismissed"),
  comments: Joi.array(),
  createdBy: Joi.string(),
});

export default ticketValidation;
