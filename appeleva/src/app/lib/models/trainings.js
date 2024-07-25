const mongoose = require("mongoose");

const exerciseSchema = new mongoose.Schema({
  name: String,
  description: String,
  videoUrl: String,
});

const trainingsSchema = mongoose.Schema({
  name: { type: String, index: true, required: true },
  date: { type: Date },
  intensity: { type: Number, index: true },
  tags: { type: [String] },
  exercises: [exerciseSchema],
});

const Trainings =
  mongoose.models.Trainings || mongoose.model("Trainings", trainingsSchema);

export default Trainings;
