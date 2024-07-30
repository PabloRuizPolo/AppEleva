import React from "react";
import TeamNavbar from "./components/TeamNavbar";

export default function TeamLayout({ children }) {
  return (
    <div>
      <TeamNavbar />
      {children}
    </div>
  );
}
