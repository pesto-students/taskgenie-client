import ErrorPage from "src/components/pages/ErrorPage.jsx";
import Layout from "components/organisms/Layout/Layout.jsx";
import BrowseTasks from "components/pages/BrowseTasks.jsx";
import Home from "components/pages/Home.jsx";
import MyTasks from "components/pages/MyTasks.jsx";
import SignUp from "components/pages/SignUp.jsx";
import SignIn from "components/pages/SignIn.jsx";
import SetupProfile from "components/pages/SetupProfile";
import TaskDetails from "components/pages/TaskDetails.jsx";
import PostTask from "components/pages/PostTask.jsx";
import ProtectedRoutes from "components/templates/ProtectedRoutes.jsx";
import EditTask from "./components/pages/EditTask";
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
				path: "/myTasks",
				element: <ProtectedRoutes element={<MyTasks />} />,
			},
			{
				path: "/myTasks/:taskId",
				element: <ProtectedRoutes element={<TaskDetails />} />,
			},
			{
				path: "/postTask",
				element: <ProtectedRoutes element={<PostTask />} />,
			},
			{
				path: "/myTasks/:taskId/edit",
				element: <ProtectedRoutes element={<EditTask />} />,
			},
		],
	},
	{
		path: "/signUp",
		element: <SignUp />,
		errorElement: <ErrorPage />,
	},
	{
		path: "/signIn",
		element: <SignIn />,
		errorElement: <ErrorPage />,
	},
	{
		path: "/setup-profile",
		element: <SetupProfile />,
		errorElement: <ErrorPage />,
	},
	{
		path: "*",
		element: <ErrorPage />,
	},
];

export default routes;
