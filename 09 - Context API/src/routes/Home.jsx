// 3 - alterando valor do contexto
// import { useContext } from "react";
// import { CounterContext } from "../context/CounterContext";
// 4 - refatorando com hook
import { useCounterContext } from "../hooks/useCounterContext";
import ChangeCounter from "../components/ChangeCounter";

const Home = () => {
  // 3 - alterando valor do contexto
  // const { counter } = useContext(CounterContext);
  // 4 - refatorando com hook
  const { counter } = useCounterContext();
  return (
    <div>
      <h1>Home</h1>
      <p>Valor do contador: {counter}</p>
      <ChangeCounter />
    </div>
  );
};

export default Home;
