import { createBrowserRouter } from "react-router";
import Root from "../Pages/Root/Root.jsx";
import Error from "../Pages/Error/Error.jsx";
import Home from "../Pages/Home/Home.jsx";
import Apps from "../Pages/Apps/Apps.jsx";
import AppDetails from "../Components/AppDetails/AppDetails.jsx";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    errorElement: <Error />,
    children: [
      {
        index: true,
        path: "/",
        Component: Home,
      },
      {
        path: "/apps",
        Component: Apps,
        loader: () => fetch('apps.json'),
      },
      {
        path:"apps/:id",
        Component: AppDetails,
        loader: async ({ params }) => {
          const res = await fetch("/apps.json");
          const apps = await res.json();
          const app = apps.find((a) => String(a.id) === String(params.id));
          return app;
        },
      }
    ],
  },
]);