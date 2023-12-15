import HookUseState from "../components/useState/HookUseState";
import HookUseStateInputs from "../components/useState/HookUseStateInputs";
import HookUseReducer from "../components/useReducer/HookUseReducer";
import HookUseReducerSwitch from "../components/useReducer/HookUseReducerSwitch";

const Home = () => {
  return (
    <div>
      <h1>Home</h1>
      <HookUseState />
      <HookUseStateInputs />
      <HookUseReducer />
      <HookUseReducerSwitch />
    </div>
  );
};

export default Home;
