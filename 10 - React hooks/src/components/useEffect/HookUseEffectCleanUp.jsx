import { useState, useEffect } from "react";

const HookUseEffectCleanUp = () => {
  const [number, setNumber] = useState(1);
  const [anotherNumber, setAnotherNumber] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      console.log("Atualizou!");
      setAnotherNumber(anotherNumber + 1);
    }, 500);
    return () => clearTimeout(timer);
  }, [anotherNumber]);

  const changeNumber = () => {
    setNumber(number + 1);
  };

  return (
    <div>
      <h2>useEffect CleanUp</h2>
      <p>{number}</p>
      <button onClick={() => changeNumber()}>Incrementar número</button>
      <p>Valor: {anotherNumber}</p>
      <button onClick={() => setAnotherNumber(Math.floor(Math.random() * 10))}>
        Mudar valor
      </button>
    </div>
  );
};

export default HookUseEffectCleanUp;
