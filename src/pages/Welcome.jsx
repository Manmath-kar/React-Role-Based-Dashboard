import { useParams, Navigate } from "react-router-dom";

const DISABLED = ["reports"];

export default function Welcome() {
  const { page } = useParams();

  if (DISABLED.includes(page)) {
    return <Navigate to="/403" replace />;
  }

  return <h2>{page} Page</h2>;
}
