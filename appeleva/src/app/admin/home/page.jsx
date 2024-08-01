import { currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import { NextResponse } from "next/server";
import React from "react";

export default async function AdminPage({}) {
  const user = await currentUser();

  if (!user || user.id !== process.env.USERELEVAID) {
    return redirect("/");
  }

  // User is authorized, render the page content
  return <p>Hola Pablo</p>;
}
