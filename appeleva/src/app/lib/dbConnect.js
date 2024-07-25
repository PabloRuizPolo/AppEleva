import mongoose from "mongoose";

require("dotenv").config();

mongoose.connection.on("error", (err) => {
  console.log("Connection error ", err);
});
mongoose.connection.once("open", () => {
  console.log("Conect to mongodb at ", mongoose.connection.name);
});
const mongodbURL = process.env.MONGODB_URI;

mongoose.connect(mongodbURL);

module.exports = mongoose.connection;
