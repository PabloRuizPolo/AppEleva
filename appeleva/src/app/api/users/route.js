import { connect } from "../../lib/dbConnect";
import User from "@/app/lib/models/User";
import { auth } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

export async function GET() {
  const { userId } = auth();

  if (userId !== "user_2jvWsJw2lyHt7NWrC7aAmzmypXi") {
    return NextResponse.json({ message: 'No autenticado"' });
  }
  await connect();

  try {
    const users = await User.find({});

    console.log(users);

    return NextResponse.json(users);
  } catch (err) {
    return NextResponse.json({ error: err.message });
  }
}
