import { Container, Stack } from "components/atoms";
import PostTaskForm from "components/organisms/PostTaskForm/PostTaskForm";
const PostTask = () => {
  document.title = "Create Task";
  return (
    <Container
      sx={{ height: "100%", padding: "2rem 1rem 0rem" }}
      maxWidth={"sm"}
    >
      <Stack>
        <PostTaskForm />
      </Stack>
    </Container>
  );
};

export default PostTask;
