import { Schema, model, models } from "mongoose";

const exerciseSchema = new Schema({
  name: String,
  description: String,
  videoUrl: String,
});

const trainingsSchema = new Schema({
  name: { type: String, index: true, required: true },
  date: { type: Date },
  intensity: { type: Number, index: true },
  tags: { type: [String] },
  exercises: [exerciseSchema],
});

const Trainings = models.Trainings || model("Trainings", trainingsSchema);

export default Trainings;
