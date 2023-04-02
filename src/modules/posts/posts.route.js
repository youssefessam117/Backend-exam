import express from "express";
import { userToken } from "../../middleware/auth.js";
import { validatioin } from "../../middleware/validation.js";
import * as postControler from "./posts.controler.js";
import { postSchema, updateSchema } from "./posts.valedateSchema.js";

const postRoute = express.Router();

postRoute.post(
  "/add",
  userToken,
  validatioin(postSchema),
  postControler.addPost
);
postRoute.put(
  "/update",
  userToken,
  validatioin(updateSchema),
  postControler.updatePost
);
postRoute.delete("/delete", userToken, postControler.deletePost);
postRoute.get("/get/public", userToken, postControler.getPublicPosts);
postRoute.get("/get/private", userToken, postControler.getPrivatePosts);
postRoute.get("/get/userposts", userToken, postControler.getUserPosts);
postRoute.patch("/addLike", userToken, postControler.addLike);
postRoute.patch("/removeLike", userToken, postControler.removeLike);
export default postRoute;
