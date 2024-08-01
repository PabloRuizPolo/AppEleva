import { Schema, model, models } from "mongoose";
import mongoose from "mongoose";

const teamPageSchema = new Schema({
  comments: String,
  intensity: Number,
  trainingCalendar: [
    {
      day: Number,
      trainings: [
        {
          link: String,
        },
      ],
    },
  ],
  calendarImage: String, // URL o referencia a la imagen
  graphImage: String, // URL o referencia a la imagen
  mesocycleComment: String,
});

const TeamPage = models.TeamPage || model("TeamPage", teamPageSchema);

export default TeamPage;
