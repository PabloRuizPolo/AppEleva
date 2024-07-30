"use server";

import User from "@/app/lib/models/User";
const connection = db.connection;

export async function createUser(user) {
  try {
    await connection;
    const newUser = await User.create(user);
    return JSON.parse(JSON.stringify(newUser));
  } catch (error) {
    console.log(error);
  }
}
