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
  UpdateProfile,
  Todos,
  Inbox,
  Today,
  Upcoming,
  Completed,
  Projects,
  Project,
  VerifyEmail,
  ChangePassword,
  ForgotPassword,
  ResetPassword,
  About,
  Contact,
} from "./pages/index.js";
import AuthLayout from "./components/Layout/AuthLayout.jsx";
import RootLayout from "./components/Layout/RootLayout.jsx";
import ProtectedRoute from "./ProtectedRoute.jsx";

const router = createBrowserRouter(
  createRoutesFromElements([
    <Route element={<RootLayout />} errorElement={<ErrorPage />}>
      <Route index element={<Home />} />,
      <Route path="about" element={<About />} />,
      <Route path="contact" element={<Contact />} />,
    </Route>,
    <Route element={<ProtectedRoute />}>
      <Route path="update-profile" element={<UpdateProfile/>}/>
      <Route path="app" element={<Todos />}>
        <Route index element={<Navigate to="inbox" replace />} />,
        <Route path="inbox" element={<Inbox />} />
        <Route path="today" element={<Today />} />
        <Route path="upcoming" element={<Upcoming />} />
        <Route path="completed" element={<Completed />} />
        <Route path="projects" element={<Projects />} />
        <Route path="projects/:projectName" element={<Project />} />
      </Route>
    </Route>,
    <Route path="auth" element={<AuthLayout />}>
      <Route path="login" element={<Login />} />,
      <Route path="signup" element={<Signup />} />,
      <Route path="verify-email" element={<VerifyEmail />} />,
      <Route path="forgot-password" element={<ForgotPassword />} />,
      <Route path="reset-password" element={<ResetPassword />} />,
      <Route path="change-password" element={<ChangePassword />} />
    </Route>,
    <Route path="*" element={<ErrorPage />} />,
  ]),
);

export default function Routes() {
  return <RouterProvider router={router} />;
}
