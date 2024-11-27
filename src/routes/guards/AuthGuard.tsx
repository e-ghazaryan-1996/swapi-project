import { useEffect } from "react";
import { Outlet, useNavigate } from "react-router";
import { APP_ROUTE_PATHS } from "@/routes/route-path";
import useAuthStore from "@/hooks/useAuthStore";

const AuthGuard = () => {
  const navigate = useNavigate();
  const { token } = useAuthStore();

  useEffect(() => {
    if (!token) {
      navigate(APP_ROUTE_PATHS.LOGIN);
    }
  }, [token, navigate]);

  return <Outlet />;
};

export default AuthGuard;
