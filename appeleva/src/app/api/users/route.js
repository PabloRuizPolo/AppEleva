import dbConnect from "@/app/lib/dbConnect";
const db = require("../../lib/dbConnect");
import User from "@/app/lib/models/User";
import { NextResponse } from "next/server";

const connection = db.connection;

export async function GET() {
  await connection;

  try {
    const users = await User.find({});

    console.log(users);

    return NextResponse.json(users);
  } catch (err) {
    return NextResponse.json({ error: err.message });
  }
}
