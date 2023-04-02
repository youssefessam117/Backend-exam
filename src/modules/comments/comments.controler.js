import commentModel from "../../../dataBase/models/comments.model.js";
import { catchAsyncError } from "../../utilities/asyncError.js";
import { AppError } from "../../utilities/errorClassMessage.js";
import postModel from "./../../../dataBase/models/postsTable.modle.js";

export const addComment = catchAsyncError(async (req, res, next) => {
  const { comment, postId } = req.body;
  const newComment = await commentModel.insertMany({
    comment,
    createdBy: req._id,
    postId,
  });
  res.json({ message: "success", newComment });
});
// update Comment
export const updateComment = catchAsyncError(async (req, res, next) => {
  const { comment, _id } = req.body;
  const update = await commentModel.findOneAndUpdate(
    { _id, createdBy: req._id },
    { comment },
    { new: true }
  );
  res.json({ message: "success", update });
});
// delete Comment
export const deleteComment = catchAsyncError(async (req, res) => {
  const { _id } = req.body;
  const deleted = await commentModel.findByIdAndDelete({
    _id,
    createdBy: req._id,
  });
  res.json({ message: "success", deleted });
});

// // get all Comments

export const getAllComments = catchAsyncError(async (req, res, next) => {
  const comments = await commentModel.find();
  res.status(201).json({ message: "success", comments });
});

// get privacy comments
export const getPrivatePosts = catchAsyncError(async (req, res, next) => {
  const comments = await commentModel.find({ createdBy: req._id });
  res.status(201).json({ message: "success", comments });
});

// delete post comments by createdBy
export const deleteCommentsByUser = catchAsyncError(async (req, res, next) => {
  const { _id, commentId } = req.body;
  const post = await postModel.findOne({ _id, createdBy: req._id });
  if (post) {
    const comments = await commentModel.findOneAndDelete({
      postId: post._id,
      _id: commentId,
    });
    if (comments) return res.status(201).json({ message: "success", comments });
    next(new AppError("cant find comment ", 404));
  } else {
    next(new AppError("cant find post ", 404));
  }
});
