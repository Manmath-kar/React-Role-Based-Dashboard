import { useLocation } from "react-router-dom";

export default function Welcome() {
  const { pathname } = useLocation();
  return <h2>Welcome to {pathname}</h2>;
}
