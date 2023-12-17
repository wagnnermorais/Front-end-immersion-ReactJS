import { useEffect, useRef } from "react";

export const CustomHookUsePrevious = (value) => {
  const ref = useRef;

  useEffect(() => {
    ref.current = value;
  });

  return ref.current;
};
