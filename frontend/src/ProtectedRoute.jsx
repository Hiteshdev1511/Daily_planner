import { useSelector } from "react-redux";
import { Navigate, Outlet, useLocation } from "react-router-dom";

export default function ProtectedRoute() {
  const { user, status } = useSelector((state) => state.user);
  const location = useLocation();

  if (status === "loading" || status === "idle") {
    return <div className="text-center mt-20">Loading...</div>;
  }

  // Redirect to login if auth failed (token refresh failed) or user doesn't exist
  if (!user || status === "failed") {
    return <Navigate to="/auth/login" state={{ from: location }} replace />;
  }

  return <Outlet />;
}
