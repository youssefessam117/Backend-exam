import Joi from "joi";

export const CommentSchema = {
  body: Joi.object({
    comment: Joi.string().min(1).max(100).required(),
    postId: Joi.string().hex().length(24),
  }),
};

export const updateCommentSchema = {
  body: Joi.object({
    comment: Joi.string().min(1).max(100).required(),
    _id: Joi.string().hex().length(24),
  }),
};
