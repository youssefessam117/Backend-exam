// import userModel from "../../dataBase/models/userTabls.model.js";

// export const softDeleteChecker = async (req, res, next) => {
//   const { email } = req.body;
//   const user = await userModel.findOne({ email });
//   if (user.status === "notActive") {
//     res.json({ message: "cant find user " });
//   } else {
//     next();
//   }
// };
