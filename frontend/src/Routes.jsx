/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-key */
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Navigate,
} from "react-router-dom";
import {
  ErrorPage,
  Home,
  Login,
  Signup,
  Todos,
  Inbox,
  Today,
  Upcoming,
  Completed,
  Projects,
  Project,
  VerifyEmail,
  ForgetPassword,
} from "./pages/index.js";
import { useSelector } from "react-redux";

// Protected Route component
const ProtectedRoute = ({ children }) => {
  const user = useSelector((state) => state.user);
  if (!user.id) {
    return <Navigate to="/login" replace />;
  }
  return children;
};

const router = createBrowserRouter(
  createRoutesFromElements([
    <Route path="" element={<Home />} errorElement={<ErrorPage />} />,
    <Route
      path="app"
      element={
        <ProtectedRoute>
          <Todos />
        </ProtectedRoute>
      }
    >
      <Route index element={<Navigate to="inbox" replace />} />
      <Route path="inbox" element={<Inbox />} />
      <Route path="today" element={<Today />} />
      <Route path="upcoming" element={<Upcoming />} />
      <Route path="completed" element={<Completed />} />
      <Route path="projects" element={<Projects />} />
      <Route path="projects/:projectName" element={<Project />} />
    </Route>,
    <Route path="login" element={<Login />} />,
    <Route path="signup" element={<Signup />} />,
    <Route path="verify-email" element={<VerifyEmail/>}/>,
    <Route path="forget-password" element={<ForgetPassword/>}/>,
    <Route path="*" element={<ErrorPage />} />,
  ])
);

export default function Routes() {
  return <RouterProvider router={router} />;
}
