import { useParams, Navigate } from "react-router-dom";

const DISABLED_PAGES = ["reports"];

export default function Welcome() {
  const { page } = useParams();

  if (DISABLED_PAGES.includes(page)) {
    return <Navigate to="/403" replace />;
  }

  return <h2>{page} Page</h2>;
}
