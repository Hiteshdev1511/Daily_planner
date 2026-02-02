import { useState, useEffect } from "react";

export const useIsUsernameUnique = (input) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {

    if (!input) return;

    async function checkUniqueness() {
      setLoading(true);
      setError(null);
      try {
        // backend api call simulating
        const random = Math.random();
        setTimeout(() => {
          if (random > 0.5) {
            setData(true);
          } else {
            setData(false);
          }
        }, 2000);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    }
    checkUniqueness();

    return;
  }, [input]);

  return { data, error, loading };
};
