import { useState } from "react";

const HookUseState = () => {
  const [age, setAge] = useState(18);

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(age);
  };
  return (
    <div>
      <h2>useState em inputs:</h2>
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
          value={age}
          onChange={(e) => setAge(e.target.value)}
        />
        <input type="submit" value="Enviar" />
      </form>
      <p>Idade informada: {age} anos.</p>
    </div>
  );
};

export default HookUseState;
