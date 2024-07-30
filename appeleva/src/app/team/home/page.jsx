"use client";
import { useUser } from "@clerk/nextjs";
import React from "react";

export default function HomeTeamPage() {
  const { isLoaded, isSignedIn, user } = useUser();

  if (!isLoaded || !isSignedIn) {
    return null;
  }

  return (
    <main className="flex flex-col space-y-5 justify-center justify-items-center items-center	">
      <section>
        <h2>Preparación Física del </h2>
        <h1>{user?.firstName}</h1>
      </section>
      <section className="flex flex-col space-y-5 justify-center justify-items-center items-cente">
        <h4>COMENTARIO DE LA SEMANA</h4>
        <div className="basis-6 w-4/6">
          <p>
            Semana de ESTABILIZACIÓN. Queremos asimilar la intensidad que de ese
            mesociclo. Para ello vamos a subir intensidad de nuevo, a 8/10, y
            vamos a bajar volumen para que nos permita aguantar tales niveles de
            intensidad. El volumen se queda en 5/10. Entreno del jueves un poco
            más "normal" en cuanto a tiempos e intensidades.
          </p>
        </div>
      </section>
    </main>
  );
}
