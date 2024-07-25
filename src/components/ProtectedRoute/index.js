import { Navigate } from "react-router-dom";
import Cookies from "js-cookie";

const ProtectedRoute = ({ element }) => {
  const jwtToken = Cookies.get("jwt_token");
  const isAuthenticated = !!jwtToken;

  return isAuthenticated ? element : <Navigate to="/login" />;
};

export default ProtectedRoute;
