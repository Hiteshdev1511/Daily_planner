import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useGetCurrentUserQuery } from "./features/auth/authApiSlice";

// eslint-disable-next-line react/prop-types
export default function App({ children }) {
  const { theme } = useSelector((state) => state.theme);

  useGetCurrentUserQuery();

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.remove("light");
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
      document.documentElement.classList.add("light");
    }
  }, [theme]);

  return <>{children}</>;
}
