"use client";
import React, { useState } from "react";
import FormField from "./components/FormField";
import Button from "@/app/shared/components/Button";
import { postTraining } from "./service";
import { useRouter } from "next/navigation";
import AdminHeader from "@/app/admin/components/AdminHeader";

export default function TrainingForm() {
  const [trainingData, setTrainingData] = useState({
    name: "",
    date: new Date(),
    intensity: 0,
    tags: [],
    exercises: [],
  });

  const [exerciseData, setExerciseData] = useState({
    nameEx: "",
    description: "",
    videoUrl: "",
  });

  const router = useRouter();

  const { name, date, intensity, tags, exercises } = trainingData;
  const { nameEx, description, videoUrl } = exerciseData;

  // Función para manejar los cambios en el formulario
  const handleChange = (e) => {
    const { name, value } = e.target;
    setTrainingData({ ...trainingData, [name]: value });
  };

  // Función para manejar los cambios en los datos de un ejercicio
  const handleExerciseChange = (e) => {
    const { name, value } = e.target;
    setExerciseData({ ...exerciseData, [name]: value });
  };

  // Función para agregar un nuevo ejercicio al entrenamiento
  const addExercise = () => {
    setTrainingData({
      ...trainingData,
      exercises: [...trainingData.exercises, exerciseData],
    });
    setExerciseData({ nameEx: "", description: "", videoUrl: "" });
  };

  const handleSubmit = async (event) => {
    const { name, date, intensity, tags, exercises } = trainingData;

    // Verify that exercises is an array before sending
    if (!Array.isArray(exercises) || exercises.length === 0) {
      console.error("Error: No hay ejercicios para guardar");
      return;
    }

    const newTraining = { name, date, intensity, tags, exercises };
    event.preventDefault();

    try {
      const res = await postTraining(newTraining);
      if (res) {
        router.push("/trainings");
      } else {
        throw new Error("Failed to create a training");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const disabledButton = !name || !intensity || !tags;

  return (
    <div>
      <AdminHeader />
      <form onSubmit={handleSubmit}>
        <FormField
          type="text"
          name="name"
          label="Nombre Entreno"
          value={name}
          onChange={handleChange}
          className="newAdd-formField"
        />

        <FormField
          type="number"
          name="intensity"
          label="Intensidad"
          value={intensity}
          onChange={handleChange}
          className="newAdd-formField"
        />

        <FormField
          type="text"
          name="tags"
          label="Etiquetas"
          value={tags}
          onChange={handleChange}
          className="newAdd-formField"
        />

        {/* Display existing exercises */}
        <h2>Ejercicios Añadidos</h2>
        {exercises.length > 0 && (
          <ul>
            {exercises.map((exercise) => (
              <li key={exercise._id || Math.random()}>
                <p>Nombre ejercicio: {exercise.nameEx}</p>
                <p>Descripción: {exercise.description}</p>
                {exercise.videoUrl && <p>Video: {exercise.videoUrl}</p>}
              </li>
            ))}
          </ul>
        )}

        <FormField
          type="text"
          name="nameEx"
          label="nameEx"
          value={nameEx}
          onChange={handleExerciseChange}
          className="newAdd-formField"
        />
        <FormField
          type="text"
          name="description"
          label="description"
          value={description}
          onChange={handleExerciseChange}
          className="newAdd-formField"
        />
        <FormField
          type="text"
          name="videoUrl"
          label="videoUrl"
          value={videoUrl}
          onChange={handleExerciseChange}
          className="newAdd-formField"
        />
        <button type="button" onClick={addExercise}>
          Agregar Ejercicio
        </button>
        <Button type="submit" $variant="main" disabled={disabledButton}>
          Crear Entreno
        </Button>
      </form>
    </div>
  );
}
