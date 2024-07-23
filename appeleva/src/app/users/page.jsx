export default async function PageUsers() {
  const fetchUsers = async () => {
    const res = await fetch("http://localhost:3000/api/users");
    const users = await res.json();
    console.log(users); // Verifica que el array contiene todos los usuarios
    return users; // Devuelve todo el array
  };

  const users = await fetchUsers();

  return (
    <div>
      <h1>users</h1>
      {users.map((user) => (
        <div key={user._id}>
          <h2>{user.name}</h2>
          <p>{user.club}</p>
        </div>
      ))}
    </div>
  );
}
