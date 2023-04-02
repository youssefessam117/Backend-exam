import Joi from "joi";

export const postSchema = {
  body: Joi.object({
    content: Joi.string().min(1).max(100).required(),
    privacy: Joi.string().required(),
  }),
};

export const updateSchema = {
  body: Joi.object({
    content: Joi.string().min(1).max(100).required(),
    _id: Joi.string().hex().length(24),
  }),
};
