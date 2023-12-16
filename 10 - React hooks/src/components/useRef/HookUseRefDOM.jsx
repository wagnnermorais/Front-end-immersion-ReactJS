import { useRef, useState, useEffect } from "react";

const HookUseRefDOM = () => {
  const inputRef = useRef();
  const [text, setText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    setText("");

    inputRef.current.focus();
  };

  return (
    <div>
      <h2>useRef no DOM</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          ref={inputRef}
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <input type="text" />
        <input type="text" />
        <input type="submit" value={"Enviar"} />
      </form>
    </div>
  );
};

export default HookUseRefDOM;
