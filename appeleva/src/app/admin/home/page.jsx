import { Protect } from "@clerk/nextjs";
import { auth } from "@clerk/nextjs/server";
import React from "react";

export default function AdminPage({}) {
  //const { userId } = auth().protect({ permission: "org:admin" });
  return <p>Hola PAblo</p>;
}
