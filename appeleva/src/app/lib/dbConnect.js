/*import mongoose from "mongoose";

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
*/

import mongoose from "mongoose";

const mongodbURL = process.env.MONGODB_URI;

let cached = global.mongoose;

if (!cached) {
  cached = global.mongoose = {
    conn: null,
    promise: null,
  };
}

export const connect = async () => {
  if (cached.conn) return cached.conn;

  cached.promise =
    cached.promise ||
    mongoose.connect(mongodbURL, {
      dbName: "test",
      bufferCommands: false,
      connectTimeoutMS: 3000,
    });

  cached.conn = await cached.promise;
};
