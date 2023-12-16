import { useState, useEffect } from "react";

const HookUseEffectValuedArray = () => {
  const [number, setNumber] = useState(1);
  const [anotherNumber, setAnotherNumber] = useState(0);

  useEffect(() => {
    anotherNumber > 0
      ? console.log("Sou executado se anotherNumber mudar!")
      : "";
  }, [anotherNumber]);

  const changeNumber = () => {
    setNumber(number + 1);
  };

  return (
    <div>
      <h2>useEffect com array de dependências com valores</h2>
      <p>{number}</p>
      <button onClick={() => changeNumber()}>Incrementar número</button>
      <p>Valor: {anotherNumber}</p>
      <button onClick={() => setAnotherNumber(Math.floor(Math.random() * 10))}>
        Mudar valor
      </button>
    </div>
  );
};

export default HookUseEffectValuedArray;
