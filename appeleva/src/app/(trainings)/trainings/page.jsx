"use client";

import { useEffect, useState } from "react";
import { getTrainings } from "./service";
import AdminHeader from "@/app/admin/components/AdminHeader";

export default function PageUsers() {
  let key = 1;
  const [trainings, setTrainings] = useState([]);

  useEffect(() => {
    getTrainings().then((trainings) => {
      setTrainings(trainings);
    });
    return;
  }, []);

  return (
    <div>
      <AdminHeader />
      <h1>Entrenos</h1>
      {trainings.length === 0 ? (
        <p>Cargando entrenos...</p>
      ) : (
        trainings.map((training) => (
          <div key={training._id}>
            <h2>Nombre del entreno: {training.name}</h2>
            <p>Nivel de intensidad: {training.intensity}</p>

            {training.exercises &&
              (Array.isArray(training.exercises) ? (
                training.exercises.map((exercise) => (
                  <li key={key++}>
                    {" "}
                    <p>Nombre del ejercicio: {exercise.nameEx}</p>
                    <p>Descripción: {exercise.description}</p>
                    {exercise.videoUrl && <p>Video: {exercise.videoUrl}</p>}
                  </li>
                ))
              ) : (
                <li key={key++}>
                  {" "}
                  <p>Nombre del ejercicio: {training.exercises.nameEx}</p>
                  <p>Descripción: {training.exercises.description}</p>
                  {training.exercises.videoUrl && (
                    <p>Video: {training.exercises.videoUrl}</p>
                  )}
                </li>
              ))}

            <br />
          </div>
        ))
      )}
    </div>
  );
}
