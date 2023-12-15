import { useReducer } from "react";

const HookUseReducer = () => {
  // - useReducer
  const [number, dispatch] = useReducer((state, action) => {
    return Math.floor(Math.random(state) * 11);
  });
  return (
    <div>
      <h2>Número definido por useReducer:</h2>
      <p>Número: {number || 1}</p>
      <p>
        O botão abaixo irá gerar um número aleatório via <em>dispatch</em> do
        useReducer
      </p>
      <button onClick={dispatch}>Alterar número</button>
    </div>
  );
};

export default HookUseReducer;
