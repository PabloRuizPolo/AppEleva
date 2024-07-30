const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  clerkId: {
    type: String,
    required: true,
    unique: true,
  },
  email: { type: String, required: true },
  username: { type: String, unique: true, required: true },
  password: { type: String, required: true },
});

const User = mongoose.models.User || mongoose.model("User", userSchema);

export default User;
