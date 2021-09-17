import Joi from "joi";

export const mediaValidation = Joi.object({
  title: Joi.required(),
  description: Joi.string().allow(""),
  excerpt: Joi.string().allow(""),
  scale: Joi.number(),
  northRotation: Joi.number().min(0).max(360),

  alt: Joi.string().allow(""),

  category: Joi.string().allow(""),
  project: Joi.string().allow(""),
  stage: Joi.string().allow(""),
  drawingType: Joi.string().allow(""),
  tags: Joi.array(),

  src: Joi.object()
    .keys({
      url: Joi.string(),
      filename: Joi.string().allow(""),
      url_original: Joi.string().allow(""),
      url_3200: Joi.string().allow(""),
      url_1600: Joi.string().allow(""),
      url_800: Joi.string().allow(""),
      url_400: Joi.string().allow(""),
    })
    .required(),

  scale: Joi.number().required(),
});

export default mediaValidation;
