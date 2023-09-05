import { useState } from "react";

function ListRender() {
  const [list] = useState(["Wagner", "Matheus", "Pedro"]);
  const [users, setUsers] = useState([
    {
      id: 1,
      name: "Wagner",
      age: 23,
    },
    {
      id: 2,
      name: "Matheus",
      age: 31,
    },
    {
      id: 3,
      name: "Pedro",
      age: 28,
    },
  ]);

  const deleteRandom = () => {
    const randomNumber = Math.floor(Math.random() * 4);
    setUsers((prevUsers) =>
      prevUsers.filter((user) => randomNumber !== user.id)
    );
  };
  return (
    <div>
      {/* Renderização sem key */}
      <ul>
        {list.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      {/* Renderização com key */}
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            Nome: {user.name} - Idade: {user.age}
          </li>
        ))}
      </ul>
      {/* previous state */}
      <button onClick={deleteRandom}>Delete random user</button>
    </div>
  );
}

export default ListRender;
