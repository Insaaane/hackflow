import { Suspense } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { GlobalLayout } from "../layout";
import { EventsPage } from "@/pages/EventsPage";
import { ParticipatePage } from "@/pages/ParticipatePage";
import { TeamPage } from "@/pages/TeamPage";
import { EventPage } from "@/pages/EventPage";
import LoginPage from "@/pages/LoginPage/ui/LoginPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <GlobalLayout />,
    children: [
      {
        path: "events",
        element: <EventsPage />,
      },
      {
        path: "events/:eventId",
        element: <EventPage />,
      },
      {
        path: "events/:eventId/participate",
        element: <ParticipatePage />,
      },
      {
        path: "events/:eventId/team",
        element: <TeamPage />,
      },
    ],
  },

  {
    path: "auth",
    element: <LoginPage />,
  },

  { path: "*", element: <>Пусто</> },
]);

export const AppRouter = () => {
  return (
    <Suspense fallback={<>Загрузка</>}>
      <RouterProvider router={router} />
    </Suspense>
  );
};
