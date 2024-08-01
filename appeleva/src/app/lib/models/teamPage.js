import { Schema, model, models } from "mongoose";
import mongoose from "mongoose";

const trainingUrlSchema = new Schema({
  links: [String],
});

const trainingCalendarSchema = new Schema({
  day: Number,
  trainings: [trainingUrlSchema],
});

const teamPageSchema = new Schema({
  comments: String,
  intensity: Number,
  trainingCalendar: [trainingCalendarSchema],
  calendarImage: String, // URL o referencia a la imagen
  graphImage: String, // URL o referencia a la imagen
  mesocycleComment: String,
});

const TeamPage = models.TeamPage || model("TeamPage", teamPageSchema);

export default TeamPage;
