const db = require("../../lib/dbConnect");

import Trainings from "@/app/lib/models/trainings";
import { auth } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

import { connect } from "../../lib/dbConnect";

export async function GET() {
  const { userId } = auth();

  if (userId !== "user_2jvWsJw2lyHt7NWrC7aAmzmypXi") {
    return NextResponse.json({ message: 'No autenticado"' });
  }

  await connect();

  try {
    const trainings = await Trainings.find({});

    console.log(trainings);

    return NextResponse.json(trainings);
  } catch (err) {
    return NextResponse.json({ error: err.message });
  }
}

export async function POST(request) {
  const { userId } = auth();

  if (userId !== "user_2jvWsJw2lyHt7NWrC7aAmzmypXi") {
    return NextResponse.json({ message: 'No autenticado"' });
  }
  await connect();
  try {
    const { name, date, intensity, tags, exercises } = await request.json();

    if (!Array.isArray(exercises)) {
      return NextResponse.json({ error: "Exercises must be an array" });
    }

    const newTraining = await Trainings.create({
      name,
      date,
      intensity,
      tags,
      exercises,
    });

    return NextResponse.json(newTraining);
  } catch (err) {
    return NextResponse.json({ error: err.message });
  }
}
