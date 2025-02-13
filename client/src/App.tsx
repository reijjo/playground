import { Navigate, Route, Routes } from "react-router";

import { Layout } from "./components/Layout";
import { Landing } from "./pages/landing-page/Landing";
import { Register } from "./pages/login-register/Register";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Landing />} />
        <Route path="register" element={<Register />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Route>
    </Routes>
  );
}

export default App;
