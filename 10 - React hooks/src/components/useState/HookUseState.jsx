import { useState } from "react";

const HookUseState = () => {
  // 1 - useState
  let username = "Matheus";
  const [name, setName] = useState("Wagner");

  const changeNames = () => {
    username = "João da Silva";
    setName("Kiwi");
  }; // Somente o nome por useState irá mudar, uma vez que, o useState consegue re-renderizar onde o valor é alterado, mas, as variáveis não.
  return (
    <div>
      <h4>Nome definido por useState:</h4>
      <p>Nome por variável normal: {username}</p>
      <p>Nome por useState: {name}</p>
      <button onClick={changeNames}>Mudar nomes</button>
    </div>
  );
};

export default HookUseState;
