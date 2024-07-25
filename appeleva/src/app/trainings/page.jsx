"use client";

import { useEffect, useState } from "react";

export default function PageUsers() {
  const [trainings, setTrainings] = useState([]);

  const fetchUsers = async () => {
    const res = await fetch("http://localhost:3000/api/trainings");
    const trainings = await res.json();
    return trainings;
  };

  useEffect(() => {
    fetchUsers().then((trainings) => {
      setTrainings(trainings);
    });
    return;
  }, []);

  return (
    <div>
      <h1>Usuarios</h1>
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
