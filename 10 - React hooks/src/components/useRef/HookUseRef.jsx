import { useRef, useState, useEffect } from "react";

const HookUseRef = () => {
  // 1 - useRef
  const numberRef = useRef(0);
  const [counter, setCounter] = useState(0);
  const [counterB, setCounterB] = useState(0);

  useEffect(() => {
    numberRef.current += 1;
  });
  return (
    <div>
      <h2>useRef</h2>
      <p>O componente renderizou: {numberRef.current}</p>
      <p>Counter 1: {counter}</p>
      <button onClick={() => setCounter(counter + 1)}>Incrementar</button>
      <p>Counter 2: {counterB}</p>
      <button onClick={() => setCounterB(counterB + 1)}>Incrementar</button>
    </div>
  );
};

export default HookUseRef;
