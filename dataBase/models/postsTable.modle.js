import mongoose from "mongoose";

const postSchema = mongoose.Schema(
  {
    content: String,
    createdBy: {
      type: mongoose.Types.ObjectId,
      ref: "user",
    },
    likes: {
      type: [mongoose.Types.ObjectId],
      ref: "user",
    },
    privacy: {
      type: String,
      enum: ["puplic", "private"],
      default: "puplic",
    },
    likesCount: Number,
  },
  { timestamps: true }
);

const postModel = mongoose.model("post", postSchema);

export default postModel;
