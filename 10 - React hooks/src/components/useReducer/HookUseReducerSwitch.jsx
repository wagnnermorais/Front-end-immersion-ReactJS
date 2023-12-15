import { useReducer, useState } from "react";

const HookUseReducer = () => {
  // criando estado para já atribuir um valor inicial ao reducer.
  const [taskText, setTaskText] = useState("");

  const initialTasks = [
    { id: 1, text: "Stark" },
    { id: 2, text: "Lannister" },
  ];

  const taskReducer = (state, action) => {
    switch (action.type) {
      case "ADD": {
        const newTask = {
          id: Math.floor(Math.random() * 11),
          text: taskText,
        };

        setTaskText("");
        return [...state, newTask];
      }

      case "DELETE":
        return state.filter((task) => task.id !== action.id);

      default:
        return state;
    }
  };

  // criando state para re-renderizar quando precisar ser feito alguma alteração
  const [tasks, dispatchTasks] = useReducer(taskReducer, initialTasks);

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatchTasks({ type: "ADD" });
  };

  const removeTask = (id) => {
    dispatchTasks({ type: "DELETE", id });
  };

  return (
    <div>
      <h3>Tarefas:</h3>
      <form
        onSubmit={handleSubmit}
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "1rem",
          margin: "2rem 0 0",
        }}
      >
        <input
          type="text"
          onChange={(e) => setTaskText(e.target.value)}
          value={taskText}
        />
        <input type="submit" value="Enviar" />
      </form>
      {tasks.map((task) => (
        <li key={task.id} onDoubleClick={() => removeTask(task.id)}>
          {task.text}
        </li>
      ))}
    </div>
  );
};

export default HookUseReducer;
