"use client";

import { useEffect, useState } from "react";
import { getUsers } from "./service";

export default function PageUsers() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    getUsers().then((users) => {
      setUsers(users);
    });
    return;
  }, []);

  return (
    <div>
      <h1>Usuarios</h1>
      {users.length === 0 ? (
        <p>Cargando usuarios...</p>
      ) : (
        users.map((user) => (
          <div key={user._id}>
            <h2>{user.name}</h2>
            <p>{user.club}</p>
          </div>
        ))
      )}
    </div>
  );
}
