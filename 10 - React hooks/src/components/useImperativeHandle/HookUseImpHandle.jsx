import { useRef } from "react";
import RefComponent from "./RefComponent";

const HookUseImpHandle = () => {
  const componentRef = useRef();
  return (
    <div>
      <h2>useImperativeHandle</h2>
      <RefComponent ref={componentRef} />
      <button onClick={() => componentRef.current.validate()}>Validar</button>
      <hr />
    </div>
  );
};

export default HookUseImpHandle;
