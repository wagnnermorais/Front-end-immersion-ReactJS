import React, { useState } from "react";

const CountDownContext = React.createContext(null);

const CountDownProvider = ({ children }) => {
  const [event, setEvent] = useState(null);
  return (
    <CountDownContext.Provider value={{ event, setEvent }}>
      {children}
    </CountDownContext.Provider>
  );
};

export { CountDownContext };
