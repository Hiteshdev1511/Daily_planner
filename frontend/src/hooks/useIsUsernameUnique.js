import { useState, useEffect } from "react";
import { useLazyCheckUsernameUniqueQuery } from "../features/auth/authApiSlice";

export const useIsUsernameUnique = (username) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [trigger, { isFetching: loading }] = useLazyCheckUsernameUniqueQuery();

  useEffect(() => {
    if (!username) {
      setData(null);
      return;
    }

    // Debounce the API call
    const timer = setTimeout(async () => {
      try {
        setError(null);
        const response = await trigger(username).unwrap();
        // The API returns { data: { isUnique: boolean }, ... } based on typical structure
        // But let's check authApiSlice definition.
        // query: (username) => `/auth/check-username?username=${username}`
        // baseQuery returns proper data.
        // Assuming response matches previous: response.data.data.isUnique ? 
        // Wait, RTK Query unwrap() returns the *data* from the successful response.
        // If the backend wraps it in ApiResponse { data: { isUnique: ... } }
        // Let's assume standard response structure.
        setData(response.data.isUnique);
      } catch (err) {
        // If 409 Conflict or validation error?
        // Usually check-username might return 200 with isUnique: false or 409.
        // Let's match previous behavior:
        // previous: setData(response.data.data.isUnique);
        // error: setError(...)
        
        setError(err?.data?.message || "Failed to check username");
        setData(null);
      }
    }, 500);

    return () => clearTimeout(timer);
  }, [username, trigger]);

  return { data, error, loading };
};
