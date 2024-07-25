"use client";

import { useEffect, useState } from "react";
import { getTrainings } from "./service";

export default function PageUsers() {
  const [trainings, setTrainings] = useState([]);

  useEffect(() => {
    getTrainings().then((trainings) => {
      setTrainings(trainings);
    });
    return;
  }, []);

  return (
    <div>
      <h1>Entrenos</h1>
      {trainings.length === 0 ? (
        <p>Cargando entrenos...</p>
      ) : (
        trainings.map((training) => (
          <div key={training._id}>
            <h2>{training.name}</h2>
            <p>{training.intensity}</p>
          </div>
        ))
      )}
    </div>
  );
}
