import { Container, Stack } from "components/atoms";
import EditTaskForm from "../organisms/PostTaskForm/EditTaskForm";
const PostTask = () => {
	document.title = "Create Task";
	return (
		<Container
			sx={{ height: "100%", padding: "2rem 1rem" }}
			maxWidth={"sm"}
		>
			<Stack>
				<EditTaskForm />
			</Stack>
		</Container>
	);
};

export default PostTask;
