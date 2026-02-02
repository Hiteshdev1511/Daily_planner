// src/hooks/useDetectOutsideClick.js

import { useEffect } from "react";

export const useDetectOutsideClick = (ref, handler) => {
  useEffect(() => {
    const listener = (event) => {
      // Do nothing if clicking ref's element or descendent elements
      if (!ref.current || ref.current.contains(event.target)) {
        return;
      }
      handler(event);
    };

    // Use mousedown to catch the click before other events might fire
    document.addEventListener("mousedown", listener);
    document.addEventListener("touchstart", listener);

    return () => {
      // Cleanup the event listeners on component unmount
      document.removeEventListener("mousedown", listener);
      document.removeEventListener("touchstart", listener);
    };
  }, [ref, handler]); // Rerun the effect if ref or handler changes
};