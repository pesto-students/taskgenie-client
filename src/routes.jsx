import ErrorPage from "src/components/pages/ErrorPage.jsx";
import Layout from "components/organisms/Layout/Layout.jsx";
import BrowseTasks from "components/pages/BrowseTasks.jsx";
import Home from "components/pages/Home.jsx";
import MyTasks from "components/pages/MyTasks.jsx";
import SignUp from "components/pages/SignUp.jsx";
import SignIn from "components/pages/SignIn.jsx";
import SetupProfile from "components/pages/SetupProfile";
import UserProfile from "components/pages/UserProfile";
import TaskDetails from "components/pages/TaskDetails.jsx";
import MyTaskDetails from "components/pages/MyTaskDetails";
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
      {
        path: "tasks/:taskId",
        element: <TaskDetails />,
      },
      {
        path: "/mytasks",
        element: <ProtectedRoutes element={<MyTasks />} />,
      },
      {
        path: "/mytasks/:taskId",
        element: <ProtectedRoutes element={<MyTaskDetails />} />,
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
  {
    path: '/setup-profile',
    element: <SetupProfile />,
    errorElement: <ErrorPage />
  },
  {
    path: '/user-profile',
    element: <UserProfile />,
    errorElement: <ErrorPage />
  },
  {
    path: "/error",
    element: <ErrorPage />,
  },
];

export default routes;
