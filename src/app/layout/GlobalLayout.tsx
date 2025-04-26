import { GlobalHeader } from "@/widgets/GlobalHeader";
import { useEffect } from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";

function GlobalLayout() {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (
      location.pathname.endsWith("/") &&
      location.pathname.split("/").length === 2
    ) {
      navigate("/events");
    }
  }, [location.pathname, navigate]);

  if ("auth" in location.pathname.split("/")) {
    return;
  }
  
  return (
    <>
      <GlobalHeader />
      <div style={{ backgroundColor: "#f4f4f4" }}>
        <Outlet />
      </div>
    </>
  );
}

export default GlobalLayout;
