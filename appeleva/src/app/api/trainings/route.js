const db = require("../../lib/dbConnect");

import Trainings from "@/app/lib/models/trainings";
import { NextResponse } from "next/server";

const connection = db.connection;

export async function GET() {
  await connection;

  try {
    const trainings = await Trainings.find({});

    console.log(trainings);

    return NextResponse.json(trainings);
  } catch (err) {
    return NextResponse.json({ error: err.message });
  }
}

export async function POST(request) {
  await connection;

  try {
    const data = request.data;
    const training = new Trainings(data);
    const newTraining = await training.save();

    return NextResponse.json(newTraining);
  } catch (err) {
    return NextResponse.json({ error: err.message });
  }
}
