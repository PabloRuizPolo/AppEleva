/*
import mongoose, { Document, Schema } from "mongoose";

const userSchema = new mongoose.Schema({
  email: { type: String, unique: true },
  name: { type: String, unique: false },
  club: { type: String, unique: false },
  password: String,
});

const User = mongoose.model.User || mongoose.model("User", userSchema);

export default User;
*/
const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  email: { type: String, unique: true },
  password: String,
});

const User = mongoose.models.User || mongoose.model("User", userSchema);

export default User;
