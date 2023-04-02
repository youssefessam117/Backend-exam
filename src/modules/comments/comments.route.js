import express from "express";
import { userToken } from "../../middleware/auth.js";
import { validatioin } from "../../middleware/validation.js";
import * as CommentControler from "./comments.controler.js";
import { CommentSchema, updateCommentSchema } from "./comments.validation.js";

const CommentRoute = express.Router();

CommentRoute.post(
  "/add",
  userToken,
  validatioin(CommentSchema),
  CommentControler.addComment
);
CommentRoute.put(
  "/update",
  userToken,
  validatioin(updateCommentSchema),
  CommentControler.updateComment
);
CommentRoute.delete("/delete", userToken, CommentControler.deleteComment);
CommentRoute.get("/getall", userToken, CommentControler.getAllComments);
CommentRoute.get("/get/private", userToken, CommentControler.getPrivatePosts);
CommentRoute.delete(
  "/delete/post",
  userToken,
  CommentControler.deleteCommentsByUser
);

export default CommentRoute;
