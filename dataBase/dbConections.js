import mongoose from "mongoose";

const dbConnections = async () => {
  mongoose.set("strictQuery", true);
  await mongoose
    .connect(process.env.dbConnection)
    .then(() => console.log("dbConnected!"))
    .catch((err) => {
      console.log(err);
    });
};
export default dbConnections;
