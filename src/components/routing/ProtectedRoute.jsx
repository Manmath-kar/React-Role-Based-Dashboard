import { Navigate } from "react-router-dom";
import permissions from "../../config/permissions.json";
import { getEnabledPaths } from "../../utils/routeUtils";

export default function ProtectedRoute({ path, children }) {
  const allowed = getEnabledPaths(permissions.permissions);

  if (!allowed.includes(path)) {
    return <Navigate to="/403" replace />;
  }

  return children;
}
