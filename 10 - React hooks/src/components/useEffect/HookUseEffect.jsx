import { useEffect, useState } from "react";

const HookUseEffect = () => {
  const [number, setNumber] = useState(1);

  // 1 - useEffect sem array de dependências
  // sempre que o componente for renderizado, o useEffect será disparado.
  useEffect(() => {
    console.log("Estou sendo executado.");
  });

  const changeNumber = () => {
    setNumber(number + 1);
  };

  return (
    <div>
      <h2>useEffect</h2>
      <p>{number}</p>
      <button onClick={() => changeNumber()}>Incrementar número</button>
    </div>
  );
};

export default HookUseEffect;
