import { useEffect, useState } from "react";

const HookUseEffectEmptyArray = () => {
  const [number, setNumber] = useState(1);

  useEffect(() => {
    console.log("Serei executado apenas uma vez.");
  }, []);

  const changeNumber = () => {
    setNumber(number + 1);
  };

  return (
    <div>
      <h2>useEffect com array vazio</h2>
      <p>{number}</p>
      <button onClick={() => changeNumber()}>Incrementar número</button>
    </div>
  );
};

export default HookUseEffectEmptyArray;
