import ErrorPage from "./pages/ErrorPage.jsx";
import Layout from "./components/Layout.jsx";
import BrowseTasks from "./pages/BrowseTasks.jsx";
import Home from "./pages/Home.jsx";
import { createBrowserRouter } from "react-router-dom";
import MyTasks from "./pages/MyTasks.jsx";
import SignUp from "./pages/SignUp.jsx";
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
        element: <BrowseTasks />,
      },
      {
        path: "mytasks/:id",
        element: <MyTasks />,
      },
    ],
  },
  {
    path: '/signup',
    element: <SignUp />,
    errorElement: <ErrorPage />,
  }

]);

export default router;
