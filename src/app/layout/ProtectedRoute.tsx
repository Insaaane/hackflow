import { Navigate, Outlet } from "react-router-dom";

interface Props {
  allowedRoles: string[];
}

function ProtectedRoute({ allowedRoles }: Props) {
  const token = localStorage.getItem("token");
  // const location = useLocation();
  // const { role } = useAppSelector(getUserInfo);

  if (!token) {
    return <Navigate to="/auth/login" replace />;
  }

  if (!allowedRoles.includes("role")) {
    return <Navigate to="/" replace />;
  }

  // if (
  //   location.pathname === "/" ||
  //   location.pathname === `/${role.toLowerCase()}`
  // ) {
  //   switch (role) {
  //     case Roles.ADMIN:
  //       return <Navigate to="/admin/students" replace />;
  //     case Roles.USER:
  //       return <Navigate to="/user/workspace" replace />;
  //     default:
  //       return <Navigate to="/" replace />;
  //   }
  // }

  return <Outlet />;
}

export default ProtectedRoute;
