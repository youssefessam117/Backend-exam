import jwt from "jsonwebtoken";
import { AppError } from "../utilities/errorClassMessage.js";

export const userToken = (req, res, next) => {
  const token = req.header("token");
  jwt.verify(token, process.env.tokenPass, (error, decoded) => {
    if (error) {
      return next(new AppError("error in token", 401, error));
    }
    req._id = decoded._id;
    next();
  });
};
