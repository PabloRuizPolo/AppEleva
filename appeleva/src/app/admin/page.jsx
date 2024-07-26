"use client";
import React, { useState } from "react";
import FormField from "./newTraining/components/FormField";
import Button from "@/app/shared/components/Button";
import { postTraining } from "./service";

export default function TrainingForm() {
  const [trainingData, setTrainingData] = useState({
    name: "",
    date: new Date(),
    intensity: 0,
    tags: [],
    exercises: [],
  });

  const [exerciseData, setExerciseData] = useState({
    name: "",
    description: "",
    videoUrl: "",
  });

  const { name, date, intensity, tags, exercises } = trainingData;

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
    setExerciseData({ name: "", description: "", videoUrl: "" });
  };

  const handleSubmit = async (event) => {
    const { name, date, intensity, tags, exercises } = trainingData;

    const newTraining = { name, date, intensity, tags, exercises };
    event.preventDefault();

    try {
      await postTraining(newTraining);
    } catch (error) {}
  };

  const disabledButton = !name || !intensity || !tags;

  return (
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
      {/* Campos para los datos de un ejercicio */}
      <button type="button" onClick={addExercise}>
        Agregar Ejercicio
      </button>
      <Button type="submit" $variant="main" disabled={disabledButton}>
        Crear Entreno
      </Button>
      {/* Botón para enviar el formulario */}
    </form>
  );
}
