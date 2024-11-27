import { createBrowserRouter, generatePath, Navigate } from "react-router";

import AuthGuard from "@/routes/guards/AuthGuard";

import { APP_ROUTE_PATHS } from "@/routes/route-path";
import { Characters, Character, Favourites, Login } from "@/pages/index";
import AuthLayout from "@/layouts/AuthLayout";
import DashboardLayout from "@/layouts/DashboardLayout";

const router = createBrowserRouter([
  {
    element: <AuthGuard />,
    children: [
      {
        element: <DashboardLayout />,
        children: [
          {
            path: "/",
            index: true,
            element: <Navigate to={APP_ROUTE_PATHS.CHARACTERS} replace />,
          },
          {
            path: APP_ROUTE_PATHS.CHARACTERS,
            element: <Characters />,
          },
          {
            path: generatePath(APP_ROUTE_PATHS.CHARACTER, { id: ":id" }),
            element: <Character />,
          },
          {
            path: APP_ROUTE_PATHS.FAVOURITES,
            element: <Favourites />,
          },
        ],
      },
    ],
  },
  {
    element: <AuthLayout />,
    children: [
      {
        path: APP_ROUTE_PATHS.LOGIN,
        element: <Login />,
      },
    ],
  },
]);

export default router;
