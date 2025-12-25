import { Routes, Route, Navigate } from "react-router-dom";
import Layout from "./components/layout/Layout";
import Welcome from "./pages/Welcome";
import Forbidden from "./pages/Forbidden";
import NotFound from "./pages/NotFound";

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Navigate to="/crm/leads" />} />
        <Route path="/crm/:page" element={<Welcome />} />
        <Route path="/settings/:page" element={<Welcome />} />
        <Route path="/403" element={<Forbidden />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}
