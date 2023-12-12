// 3 - alterando valor do contexto
import { useContext } from "react";
import { CounterContext } from "../context/CounterContext";

const Contact = () => {
  const { counter } = useContext(CounterContext);
  return (
    <div>
      <h1>Contact</h1>
      <p>Valor do contador: {counter}</p>
    </div>
  );
};

export default Contact;
