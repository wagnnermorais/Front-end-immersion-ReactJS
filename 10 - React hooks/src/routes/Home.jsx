import HookUseState from "../components/useState/HookUseState";
import HookUseStateInputs from "../components/useState/HookUseStateInputs";
import HookUseReducer from "../components/useReducer/HookUseReducer";
import HookUseReducerSwitch from "../components/useReducer/HookUseReducerSwitch";
import HookUseEffect from "../components/useEffect/HookUseEffect";
import HookUseEffectEmptyArray from "../components/useEffect/HookUseEffectEmptyArray";
import HookUseEffectValuedArray from "../components/useEffect/HookUseEffectValuedArray";
import HookUseEffectCleanUp from "../components/useEffect/HookUseEffectCleanUp";
import { useContext } from "react";
import { SomeContext } from "../components/useContext/HookUseContext";
import HookUseRef from "../components/useRef/HookUseRef";
import HookUseRefDOM from "../components/useRef/HookUseRefDOM";
import HookUseCallback from "../components/useCallback/HookUseCallback";
import HookUseMemo from "../components/useMemo/HookUseMemo";
import HookUseLayoutEffect from "../components/useLayoutEffect/HookUseLayoutEffect";
import HookUseImpHandle from "../components/useImperativeHandle/HookUseImpHandle";

const Home = () => {
  const { contextValue } = useContext(SomeContext);
  return (
    <div>
      <h1>Home</h1>
      {/* <HookUseState />
      <HookUseStateInputs />
      <HookUseReducer />
      <HookUseReducerSwitch />
      <HookUseEffect />
      <HookUseEffectEmptyArray />
      <HookUseEffectValuedArray />
      <HookUseEffectCleanUp />
      <h2>useContext:</h2>
      <p>Valor do contexto: {contextValue}</p>
      <HookUseRef />
      <HookUseRefDOM />
      <HookUseCallback />
      <HookUseMemo /> */}
      {/* <HookUseLayoutEffect /> */}
      <HookUseImpHandle />
    </div>
  );
};

export default Home;
