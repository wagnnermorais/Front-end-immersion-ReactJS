import { useState } from "react";
import { CustomHookUsePrevious } from "../../hooks/CustomHookUsePrevious";

const CustomHook = () => {
  const [number, setNumber] = useState(0);
  const previousNumber = CustomHookUsePrevious(number);
  return (
    <div>
      <h2>Custom Hook</h2>
      <p>Valor Atual: {number}</p>
      <p>Valor Anterior: {previousNumber}</p>
      <button onClick={() => setNumber(Math.floor(Math.random() * 1001))}>
        Alterar
      </button>
    </div>
  );
};

export default CustomHook;
