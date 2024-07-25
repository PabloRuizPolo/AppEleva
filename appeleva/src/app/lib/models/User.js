const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  email: { type: String, unique: true },
  password: String,
});

const User = mongoose.models.User || mongoose.model("User", userSchema);

export default User;
