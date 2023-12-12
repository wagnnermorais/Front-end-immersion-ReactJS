// 3 - alterando valor do contexto
// import { useContext } from "react";
// import { CounterContext } from "../context/CounterContext";
// 4 - refatorando com hook
import { useCounterContext } from "../hooks/useCounterContext";
import ChangeCounter from "../components/ChangeCounter";
// 5 - contexto com useReducer
import { useTitleColorContext } from "../hooks/useTitleColorContext";

const Home = () => {
  // 3 - alterando valor do contexto
  // const { counter } = useContext(CounterContext);

  // 4 - refatorando com hook
  const { counter } = useCounterContext();
  const { color } = useTitleColorContext();

  return (
    <div>
      <h1 style={{ color: color }}>Home</h1>
      <p>Valor do contador: {counter}</p>
      <ChangeCounter />
    </div>
  );
};

export default Home;
