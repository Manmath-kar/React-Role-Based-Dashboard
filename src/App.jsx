import { Routes, Route, Navigate } from "react-router-dom";
import Layout from "./components/layout/Layout";
import Welcome from "./pages/Welcome";
import Forbidden from "./pages/Forbidden";
import NotFound from "./pages/NotFound";
import ProtectedRoute from "./components/routing/ProtectedRoute";
import permissions from "./config/permissions.json";

export default function App() {
  // get first enabled route dynamically
  const firstEnabledPath =
    permissions.permissions
      .flatMap(menu => menu.children)
      .find(child => child.enabled)?.path || "/403";

  return (
    <Routes>
      <Route element={<Layout />}>
        
        {/* ROOT REDIRECT */}
        <Route
          path="/"
          element={<Navigate to={firstEnabledPath} replace />}
        />

        {/* DYNAMIC ROUTES */}
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
