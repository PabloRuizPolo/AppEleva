import React from "react";
import Header from "./components/header";

export default function TeamLayout({ children }) {
  return (
    <body>
      <Header />
      {children}
    </body>
  );
}
