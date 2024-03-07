import ErrorPage from "src/components/pages/ErrorPage.jsx";
import Layout from "components/organisms/Layout/Layout.jsx";
import BrowseTasks from "components/pages/BrowseTasks.jsx";
import Home from "components/pages/Home.jsx";
import MyTasks from "components/pages/MyTasks.jsx";
import SignUp from "components/pages/SignUp.jsx";
import SignIn from "components/pages/SignIn.jsx";
import PostTask from "components/pages/PostTask.jsx";
import ProtectedRoutes from "components/templates/ProtectedRoutes.jsx";

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
      {
        path: "/posttask",
        element: <PostTask />,
        errorElement: <ErrorPage />,
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
