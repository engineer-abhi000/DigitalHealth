import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children, role }) => {
  const token = localStorage.getItem("token");

  if (!token) {
    return <Navigate to="/" />;
  }

  try {
    const payload = JSON.parse(atob(token.split(".")[1]));

    if (role && payload.role?.toLowerCase() !== role.toLowerCase()) {
        return <Navigate to="/" />;
    }

    return children;

  } catch (error) {
    console.log("TOKEN:", token);
    return <Navigate to="/" />;
  }
};

export default ProtectedRoute;