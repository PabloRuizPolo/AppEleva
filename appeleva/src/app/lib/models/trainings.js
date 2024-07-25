const mongoose = require("mongoose");

const trainingsSchema = mongoose.Schema({
  name: { type: String, index: true, required: true },
  date: { type: Date },
  intensity: { type: Number, index: true },
  tags: { type: [String] },
});

const Trainings =
  mongoose.models.Trainings || mongoose.model("Trainings", trainingsSchema);

export default Trainings;
