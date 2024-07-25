"use client";

import { useEffect, useState } from "react";

export default function PageUsers() {
  const [users, setUsers] = useState([]);

  const fetchUsers = async () => {
    const res = await fetch("http://localhost:3000/api/users");
    const users = await res.json();
    console.log(users);
    return users;
  };

  useEffect(() => {
    fetchUsers().then((users) => {
      setUsers(users);
    });
    return;
  }, []);
  //const users = await fetchUsers();

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
