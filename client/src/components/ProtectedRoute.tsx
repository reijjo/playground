import { Navigate, Outlet } from "react-router";

import { useAppSelector } from "../store/hooks";
import { RootState } from "../store/store";

export const ProtectedRoute = () => {
  const { isAuthenticated } = useAppSelector((state: RootState) => state.auth);

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  return <Outlet />;
};
