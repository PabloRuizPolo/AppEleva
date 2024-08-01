import TeamPage from "@/app/lib/models/teamPage"; // Assuming your TeamPage model is in models/teamPage
import { connect } from "../../lib/dbConnect"; // Assuming your connection function is in lib/dbConnect
import { NextResponse } from "next/server";

export async function GET() {
  await connect();
  try {
    const teamPage = await TeamPage.find();
    console.log(teamPage);
    return NextResponse.json(teamPage);
  } catch (error) {
    return NextResponse.json({ error: error.message });
  }
}

export async function POST(request) {
  await connect();
  console.log("He pasado por aqwui");
  try {
    const {
      comments,
      intensity,
      trainingCalendar, // Remove 'data.'
      calendarImage,
      graphImage,
      mesocycleComment,
    } = await request.json();
    console.log("Received data:", { comments, intensity, trainingCalendar }); // Log only relevant data

    /*
    if (!Array.isArray(trainingCalendar)) {
      return NextResponse.json({ error: "trainingCalendar must be an array" });
    }
      */

    const newTeamPage = new TeamPage({
      comments,
      intensity,
      trainingCalendar,
      calendarImage,
      graphImage,
      mesocycleComment,
    });

    try {
      const savedTeamPage = await newTeamPage.save();
      console.log("TeamPage creado:", savedTeamPage);
      return NextResponse.json(savedTeamPage);
    } catch (error) {
      console.error("Error al guardar TeamPage:", error);
      return NextResponse.json({ error: error.message });
    }
  } catch (error) {
    console.error("Error en la petición POST:", error);
    return NextResponse.json({ error: error.message });
  }
}
export async function PUT(request) {
  await connect();
  try {
    const { id } = request.url.searchParams;
    const data = await request.json();
    const updatedTeamPage = await TeamPage.findByIdAndUpdate(id, data, {
      new: true,
    });
    if (!updatedTeamPage) {
      return NextResponse.json(
        { error: "TeamPage not found" },
        { status: 404 }
      );
    }
    return NextResponse.json(updatedTeamPage);
  } catch (error) {
    return NextResponse.json({ error: error.message });
  }
}

export async function DELETE(request) {
  await connect();
  try {
    const { id } = request.url.searchParams;
    await TeamPage.findByIdAndDelete(id);
    return NextResponse.json({ message: "TeamPage deleted" });
  } catch (error) {
    return NextResponse.json({ error: error.message });
  }
}
