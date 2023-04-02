import express from "express";
import { userToken } from "../../middleware/auth.js";
import { validatioin } from "../../middleware/validation.js";
import { signinSchema, signupSchema } from "./user.valedateSchema.js";
import * as userControler from "./users.controler.js";
import { uploadFile } from "../../utilities/photos upload/upload.js";

const userRoute = express.Router();

userRoute.post("/signup", validatioin(signupSchema), userControler.signUp);
userRoute.post("/signin", validatioin(signinSchema), userControler.signIn);
userRoute.put("/update", userToken, userControler.updateUser);
userRoute.delete("/delete", userToken, userControler.deleteUser);
userRoute.get("/getuserdata", userToken, userControler.getUserData);
userRoute.get("/verify/:token", userControler.verifyEmail);
userRoute.post("/resetpassword/request", userControler.resetPasswordRequset);
userRoute.put("/resetpassword/config", userControler.resetPasswordConfig);
userRoute.put("/softdelete", userToken, userControler.softDelete);
userRoute.post(
  "/addProfilePic",
  uploadFile("profilePic"),
  userToken,
  userControler.addProfilePic
);
userRoute.patch("/logOut", userToken, userControler.logOut);

export default userRoute;
