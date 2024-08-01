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
    trainingCalendar: [], // Ensure this is an array
    calendarImage: "",
    graphImage: "",
    mesocycleComment: "",
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
  } = homePageUsers;

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
    setHomePageUsers({ ...homePageUsers, [name]: value });
  };

  const handleCreate = async (event) => {
    const {
      comments,
      intensity,
      trainingCalendar,
      calendarImage,
      graphImage,
      mesocycleComment,
    } = homePageUsers;

    const newTeamPage = {
      comments,
      intensity,
      trainingCalendar,
      calendarImage,
      graphImage,
      mesocycleComment,
    };
    event.preventDefault();
    console.log("New TeamPage data:", newTeamPage);
    try {
      await axios.post("/api/TeamPage", newTeamPage);
      /*setHomePageUsers([...homePageUsers, response.data]); // Update local state
      setNewTeamPage({
        // Reiniciar el formulario
        comments: "",
        intensity: "",
        // ... otros campos
      });*/
      router.push("/");
    } catch (error) {
      console.error("Error al crear TeamPage:", error);
    }
  };

  const handleEdit = (id) => {
    const teamPageToEdit = homePageUsers.find(
      (teamPage) => teamPage._id === id
    );
    setNewTeamPage(teamPageToEdit);
    setIsEditing(true);
    setEditingId(id);
  };

  const handleUpdate = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.put(
        `/api/TeamPage/${editingId}`,
        newTeamPage
      ); // Using PUT for update
      const updatedHomePageUsers = homePageUsers.map((teamPage) =>
        teamPage._id === editingId ? response.data : teamPage
      );
      setHomePageUsers(updatedHomePageUsers);
      setIsEditing(false);
      setEditingId("");
    } catch (error) {
      console.error("Error al actualizar TeamPage:", error);
    }
  };

  const handleDelete = async (id) => {
    if (window.confirm("¿Estás seguro de eliminar este elemento?")) {
      try {
        await axios.delete(`/api/TeamPage/${id}`); // Using DELETE for removal
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

        <button type="submit">{isEditing ? "Actualizar" : "Crear"}</button>
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
