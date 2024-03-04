import ErrorPage from "./pages/ErrorPage.jsx";
import Layout from "./components/Layout.jsx";
import BrowseTasks from "./pages/BrowseTasks.jsx";
import Home from "./pages/Home.jsx";
import MyTasks from "./pages/MyTasks.jsx";
import SignUp from "./pages/SignUp.jsx";
import SignIn from "./pages/SignIn.jsx";
import ProtectedRoutes from "./components/ProtectedRoutes.jsx";

const routes = [
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
      // Make MyTasks page protected
      {
        path: "/mytasks",
        element: <ProtectedRoutes element={<MyTasks />} />,
      },
    ],
  },
  {
    path: "/signup",
    element: <SignUp />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/signin",
    element: <SignIn />,
    errorElement: <ErrorPage />,
  },
];

export default routes;
