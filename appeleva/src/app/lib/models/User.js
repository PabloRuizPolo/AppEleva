import { Schema, model, models } from "mongoose";

const userSchema = new Schema({
  clerkId: {
    type: String,
    required: true,
    unique: true,
  },
  email: { type: String, required: true },
  username: { type: String, unique: true, required: true },
  password: { type: String },
});

const User = models.User || model("User", userSchema);

export default User;
