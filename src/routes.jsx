import ErrorPage from "./pages/ErrorPage.jsx";
import Layout from "./components/Layout.jsx";
import TaskBrowse from "./pages/TaskBrowse.jsx";
import Home from "./pages/Home.jsx";
import AuthPage from "./pages/AuthPage.jsx";
import { createBrowserRouter } from "react-router-dom";
import Dashboard from "./pages/Dashboard.jsx";
import MyTasks from "./pages/MyTasks.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "tasks",
        element: <TaskBrowse />,
      },
    ],
  },
  {
    path: "auth",
    element: <AuthPage />,
  },
  {
    path: "dashboard",
    element: <Dashboard />,
  },
  {
    path: "mytasks",
    element: <MyTasks />,
  },
]);

export default router;
