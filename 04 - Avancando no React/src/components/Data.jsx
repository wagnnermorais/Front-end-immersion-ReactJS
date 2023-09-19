import { useState } from "react";

const Data = () => {
  let [anotherNumber, setAnotherNumber] = useState(1);
  return (
    <div>
      <p>Valor: {anotherNumber}</p>
      <button onClick={() => setAnotherNumber((anotherNumber += 1))}>
        Mudar valor
      </button>
    </div>
  );
};

export default Data;
