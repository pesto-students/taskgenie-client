import ErrorPage from "./pages/ErrorPage.jsx";
import Layout from "./components/Layout.jsx";
import TaskBrowse from "./pages/TaskBrowse.jsx";
import Home from "./pages/Home.jsx";
import { createBrowserRouter } from "react-router-dom";
import MyTasks from "./pages/MyTasks.jsx";
import SignIn from "./pages/SignIn.jsx";

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
      {
        path: "mytasks/:id",
        element: <MyTasks />,
      },
    ],
  },
  {
    path: '/signin',
    element: <SignIn/>,
    errorElement: <ErrorPage/>,
  }

]);

export default router;
