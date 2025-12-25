import { Routes, Route } from "react-router-dom";
import Layout from "./components/layout/Layout";
import Welcome from "./pages/Welcome";
import Forbidden from "./pages/Forbidden";
import NotFound from "./pages/NotFound";
import ProtectedRoute from "./components/routing/ProtectedRoute";
import permissions from "./config/permissions.json";

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        {permissions.permissions.map(menu =>
          menu.children.map(child => (
            <Route
              key={child.path}
              path={child.path}
              element={
                <ProtectedRoute path={child.path}>
                  <Welcome />
                </ProtectedRoute>
              }
            />
          ))
        )}
        <Route path="/403" element={<Forbidden />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}
