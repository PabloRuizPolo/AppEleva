"use server";

import User from "@/app/lib/models/User";
import { connect } from "@/app/lib/dbConnect";

export async function createUser(user) {
  try {
    await connect();
    const newUser = await User.create(user);
    return JSON.parse(JSON.stringify(newUser));
  } catch (error) {
    console.log(error);
  }
}
