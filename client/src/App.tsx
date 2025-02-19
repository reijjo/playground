import { useEffect } from "react";

import { Navigate, Route, Routes } from "react-router";

import { Layout } from "./components/Layout";
import { ProtectedRoute } from "./components/ProtectedRoute";
import { useGetSessionUserQuery } from "./features/api/authApi";
import { loginUser } from "./features/slices/authSlice";
import { Landing } from "./pages/landing-page/Landing";
import { Login } from "./pages/login-register/Login";
import { Register } from "./pages/login-register/Register";
import { OnlyUsers } from "./pages/only-users/OnlyUsers";
import { useAppDispatch } from "./store/hooks";

function App() {
  const { data, isSuccess, isError, error } = useGetSessionUserQuery();
  const dispatch = useAppDispatch();

  useEffect(() => {
    if ((isSuccess && data?.success, data?.data)) {
      dispatch(loginUser(data.data));
    }
  }, [isSuccess, data, dispatch]);

  console.log("isError", isError);
  console.log("error", error);

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Landing />} />
        <Route path="register" element={<Register />} />
        <Route path="login" element={<Login />} />

        <Route element={<ProtectedRoute />}>
          <Route path="/users" element={<OnlyUsers />} />
        </Route>

        <Route path="*" element={<Navigate to="/" replace />} />
      </Route>
    </Routes>
  );
}

export default App;
