import { useState, useEffect } from "react";
import { authAPI } from "../services/apiEndpoints";

export const useIsUsernameUnique = (input) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!input) {
      setData(null);
      setLoading(false);
      return;
    }

    async function checkUniqueness() {
      setLoading(true);
      setError(null);
      try {
        const response = await authAPI.checkUsernameUnique(input);
        setData(response.data.data.isUnique);
      } catch (err) {
        setError(err?.response?.data?.message || err?.message || "Failed to check username");
        setData(null);
      } finally {
        setLoading(false);
      }
    }

    // Debounce the API call - wait 500ms after user stops typing
    const timer = setTimeout(() => {
      checkUniqueness();
    }, 500);

    return () => clearTimeout(timer);
  }, [input]);

  return { data, error, loading };
};
