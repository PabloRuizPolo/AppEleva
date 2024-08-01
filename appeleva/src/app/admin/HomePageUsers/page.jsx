"use client";

import { useState, useEffect } from "react";
import axios from "axios"; // Assuming you're using Axios for API calls
import FormField from "@/app/(trainings)/newTraining/components/FormField";
import { useRouter } from "next/navigation";

function HomePageUsers() {
  const [homePageUsers, setHomePageUsers] = useState([]);
  const [newTeamPage, setNewTeamPage] = useState({
    comments: "",
    intensity: "",
    trainingCalendar: [], // Array of training day objects
    calendarImage: "",
    graphImage: "",
    mesocycleComment: "",
  });

  const [newTrainingDay, setNewTrainingDay] = useState({
    day: "",
    trainings: [],
  });

  const [isEditing, setIsEditing] = useState(false);
  const [editingId, setEditingId] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  const router = useRouter();

  const {
    comments,
    intensity,
    trainingCalendar,
    calendarImage,
    graphImage,
    mesocycleComment,
  } = newTeamPage;

  const { day, trainings } = newTrainingDay;

  useEffect(() => {
    const fetchHomePageUsers = async () => {
      try {
        const response = await axios.get("/api/TeamPage"); // Using GET to fetch TeamPages
        setHomePageUsers(response.data);
      } catch (error) {
        console.error("Error al obtener TeamPages:", error);
      } finally {
        setIsLoading(false); // Set loading to false after API call (success or failure)
      }
    };
    fetchHomePageUsers();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewTeamPage({ ...newTeamPage, [name]: value });
  };

  const handleChangeDay = (e) => {
    const { name, value } = e.target;
    setNewTrainingDay({ ...newTrainingDay, [name]: value }); // Update newTrainingDay state with day number
  };

  const addDay = () => {
    const updatedTrainingCalendar = [
      ...newTeamPage.trainingCalendar,
      newTrainingDay,
    ]; // Add newTrainingDay object
    setNewTeamPage({
      ...newTeamPage,
      trainingCalendar: updatedTrainingCalendar,
    });
    setNewTrainingDay({ day: "", trainings: [] }); // Reset newTrainingDay state
  };

  const handleAddTrainingLink = (dayIndex) => {
    const updatedTrainingCalendar = [...newTeamPage.trainingCalendar];
    updatedTrainingCalendar[dayIndex].trainings.push({ link: "" }); // Add empty link object
    setNewTeamPage({
      ...newTeamPage,
      trainingCalendar: updatedTrainingCalendar,
    });
  };

  const handleRemoveTrainingLink = (dayIndex, linkIndex) => {
    const updatedTrainingCalendar = [...newTeamPage.trainingCalendar];
    updatedTrainingCalendar[dayIndex].trainings.splice(linkIndex, 1); // Remove link at index
    setNewTeamPage({
      ...newTeamPage,
      trainingCalendar: updatedTrainingCalendar,
    });
  };

  const handleCreate = async (event) => {
    const {
      comments,
      intensity,
      trainingCalendar, // Training calendar with links
      calendarImage,
      graphImage,
      mesocycleComment,
    } = newTeamPage;

    const newTeamPageReal = {
      comments,
      intensity,
      trainingCalendar,
      calendarImage,
      graphImage,
      mesocycleComment,
    };
    event.preventDefault();
    console.log("New TeamPage data:", newTeamPageReal);
    try {
      await axios.post("/api/TeamPage", newTeamPageReal);

      router.refresh();
    } catch (error) {
      console.error("Error al crear TeamPage:", error);
    }
  };

  const handleDelete = async (id) => {
    if (window.confirm("¿Estás seguro de eliminar este elemento?")) {
      try {
        console.log("He pasado por awui");
        await axios.delete(`/api/TeamPage?id=${id}`); // Using DELETE for removal
        console.log("He pasado por awui tbn");
        setHomePageUsers(
          homePageUsers.filter((teamPage) => teamPage._id !== id)
        );
      } catch (error) {
        console.error("Error al eliminar TeamPage:", error);
      }
    }
  };

  return (
    <div>
      {isEditing ? <h3>Editar TeamPage</h3> : <h3>Crear TeamPage</h3>}
      {/* Formulario para crear o editar */}
      <form onSubmit={isEditing ? handleUpdate : handleCreate}>
        <FormField
          type="text"
          name="comments"
          label="Comentario Semana"
          value={comments}
          onChange={handleChange}
          className={"newAdd - formField"}
        />
        <FormField
          type="number"
          name="intensity"
          label="Intensidad Semana"
          value={intensity}
          onChange={handleChange}
          className={"newAdd - formField"}
        />
        <FormField
          type="text"
          name="mesocycleComment"
          label="Comentario Meociclo"
          value={mesocycleComment}
          onChange={handleChange}
          className={"newAdd - formField"}
        />
        <h2>Días Añadidos</h2>
        {trainingCalendar && trainingCalendar.length > 0 && (
          <ul>
            {trainingCalendar.map((day) => (
              <li key={day._id || Math.random()}>
                <p>Día: {day.day}</p>
                {/* Assuming 'links' field exists within each 'day' object */}
                <p>Link: {day.links}</p>
              </li>
            ))}
          </ul>
        )}
        <h2>Días de Entrenamiento</h2>
        <div>
          <FormField
            type="number"
            name="day"
            label="Día"
            value={day} // Use the value from newTrainingDay state
            onChange={handleChangeDay}
            className={"newAdd - formField"}
          />
          <button type="button" onClick={addDay}>
            Agregar Día de Entrenamiento
          </button>
        </div>
        {newTeamPage.trainingCalendar.map((trainingDay, dayIndex) => (
          <div key={dayIndex} className="training-day-container">
            <p>Día: {trainingDay.day}</p>
            {trainingDay.trainings.map((training, linkIndex) => (
              <div key={linkIndex}>
                <FormField
                  type="text"
                  name={`link-${dayIndex}-${linkIndex}`}
                  label="Enlace"
                  value={training.link}
                  onChange={(e) => {
                    const updatedTrainingCalendar = [
                      ...newTeamPage.trainingCalendar,
                    ];
                    updatedTrainingCalendar[dayIndex].trainings[
                      linkIndex
                    ].link = e.target.value;
                    setNewTeamPage({
                      ...newTeamPage,
                      trainingCalendar: updatedTrainingCalendar,
                    });
                  }}
                />
                <button
                  type="button"
                  onClick={() => handleRemoveTrainingLink(dayIndex, linkIndex)}
                >
                  Eliminar Enlace
                </button>
              </div>
            ))}
            <button
              type="button"
              onClick={() => handleAddTrainingLink(dayIndex)}
            >
              Agregar Enlace
            </button>
            <button type="button" onClick={() => handleRemoveDay(dayIndex)}>
              Eliminar Día
            </button>
          </div>
        ))}
        <button type="submit" onClick={handleCreate}>
          Crear{" "}
        </button>{" "}
      </form>

      {/* Lista de TeamPages */}
      <h2>Lista de TeamPages</h2>
      {isLoading ? (
        <p>Cargando TeamPages...</p>
      ) : homePageUsers.length > 0 ? (
        <ul>
          {homePageUsers.map((teamPage) => (
            <li key={teamPage._id}>
              <p>Comentario semana: {teamPage.comments}</p>
              <p>Intensidad: {teamPage.intensity}</p>
              <p>Comentario Mesociclo: {teamPage.mesocycleComment}</p>
              <button onClick={() => handleEdit(teamPage._id)}>Editar</button>
              <button onClick={() => handleDelete(teamPage._id)}>
                Eliminar
              </button>
            </li>
          ))}
        </ul>
      ) : (
        <p>No hay TeamPages disponibles.</p>
      )}
    </div>
  );
}

export default HomePageUsers;
