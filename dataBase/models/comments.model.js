import mongoose from "mongoose";

const commentSchema = mongoose.Schema(
  {
    comment: String,
    createdBy: {
      type: mongoose.Types.ObjectId,
      ref: "user",
    },
    postId: {
      type: mongoose.Types.ObjectId,
      ref: "post",
    },
  },
  { timestamps: true }
);

const commentModel = mongoose.model("comment", commentSchema);

export default commentModel;
