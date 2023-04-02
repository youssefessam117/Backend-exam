import * as dotenv from "dotenv";
import express from "express";
import dbConnections from "./dataBase/dbConections.js";
import { globalError } from "./src/middleware/globaleError.js";
import userRoute from "./src/modules/users/users.route.js";
import { AppError } from "./src/utilities/errorClassMessage.js";
import postRoute from "./src/modules/posts/posts.route.js";
import CommentRoute from "./src/modules/comments/comments.route.js";

dotenv.config();

dbConnections();
const app = express();

app.use(express.json());
app.use("/user", userRoute);
app.use("/post", postRoute);
app.use("/comment", CommentRoute);

app.all("*", (req, res, next) => {
  next(new AppError("Rong Url", 404));
});
app.use(globalError);

app.listen(3000, () => console.log("server is runnig "));
