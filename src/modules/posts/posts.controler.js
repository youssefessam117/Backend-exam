import postModel from "../../../dataBase/models/postsTable.modle.js";
import { catchAsyncError } from "../../utilities/asyncError.js";

export const addPost = catchAsyncError(async (req, res, next) => {
  const { content, privacy } = req.body;
  const post = await postModel.insertMany({
    content,
    createdBy: req._id,
    privacy,
  });
  res.json({ message: "success", post });
});
// update post
export const updatePost = catchAsyncError(async (req, res, next) => {
  const { content, _id } = req.body;
  const update = await postModel.findOneAndUpdate(
    { _id: _id, createdBy: req._id },
    { content },
    { new: true }
  );
  res.json({ message: "success", update });
});
// delete post
export const deletePost = catchAsyncError(async (req, res) => {
  const { _id } = req.body;
  const deleted = await postModel.deleteOne({ _id });
  res.json({ message: "success", deleted });
});

// // get all public posts

export const getPublicPosts = catchAsyncError(async (req, res, next) => {
  const posts = await postModel.find({ privacy: "puplic" });
  res.status(201).json({ message: "success", posts });
});

// get privacy posts
export const getPrivatePosts = catchAsyncError(async (req, res, next) => {
  const posts = await postModel.find({
    privacy: "private",
    createdBy: req._id,
  });
  res.status(201).json({ message: "success", posts });
});

// get all user posts
export const getUserPosts = catchAsyncError(async (req, res, next) => {
  const posts = await postModel
    .find({ createdBy: req._id })
    .populate("createdBy", "name -_id");
  res.status(201).json({ message: "success", posts });
});

// add like to post
export const addLike = catchAsyncError(async (req, res, next) => {
  const { _id } = req.body;
  const posts = await postModel.findByIdAndUpdate(
    { _id },
    { $addToSet: { likes: req._id } },
    { new: true }
  );
  posts.likesCount = posts.likes.length;
  await posts.save();
  res.status(201).json({ message: "success", posts });
});

// remove like
export const removeLike = catchAsyncError(async (req, res, next) => {
  const { _id } = req.body;
  const posts = await postModel.findByIdAndUpdate(
    { _id },
    { $pull: { likes: req._id } },
    { new: true }
  );
  posts.likesCount = posts.likes.length;
  await posts.save();
  res.status(201).json({ message: "success", posts });
});
