import mongoose from "mongoose";
/*
const connection = {};
connection.isConnected = undefined;

async function dbConnect() {
  if (connection.isConnected) {
    return;
  }

  const db = await mongoose.connect(process.env.MONGODB_URI);
  connection.isConnected = db.connections[0].readyState;
}

export default dbConnect;
*/
require("dotenv").config();

mongoose.connection.on("error", (err) => {
  console.log("Connection error ", err);
});
mongoose.connection.once("open", () => {
  console.log("Conect to mongodb at ", mongoose.connection.name);
});
const mongodbURL = process.env.MONGODB_URI;

mongoose.connect(mongodbURL);

module.export = mongoose.connection;
