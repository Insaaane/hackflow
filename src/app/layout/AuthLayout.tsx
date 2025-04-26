import { Navigate, Outlet, useLocation } from "react-router-dom";

function AuthLayout() {
  const token = localStorage.getItem("token");
  const location = useLocation();

  if (token) {
    return <Navigate to="/" replace />;
  }

  if (location.pathname === "/auth") {
    return <Navigate to="/auth/login" replace />;
  }

  return (
    // <Flex align="center" justify="center" style={{ height: "100vh" }}>
    //   <div style={{ width: 316 }}>
    <Outlet />
    //   </div>
    // </Flex>
  );
}

export default AuthLayout;
