import HookUseState from "../components/useState/HookUseState";
import HookUseStateInputs from "../components/useState/HookUseStateInputs";
import HookUseReducer from "../components/useReducer/HookUseReducer";
import HookUseReducerSwitch from "../components/useReducer/HookUseReducerSwitch";
import HookUseEffect from "../components/useEffect/HookUseEffect";
import HookUseEffectEmptyArray from "../components/useEffect/HookUseEffectEmptyArray";
import HookUseEffectValuedArray from "../components/useEffect/HookUseEffectValuedArray";
import HookUseEffectCleanUp from "../components/useEffect/HookUseEffectCleanUp";

const Home = () => {
  return (
    <div>
      <h1>Home</h1>
      <HookUseState />
      <HookUseStateInputs />
      <HookUseReducer />
      <HookUseReducerSwitch />
      <HookUseEffect />
      <HookUseEffectEmptyArray />
      <HookUseEffectValuedArray />
      <HookUseEffectCleanUp />
    </div>
  );
};

export default Home;
