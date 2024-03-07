import { Container } from "components/atoms/Container";
import PostTaskForm from "components/organisms/PostTaskForm/PostTaskForm";

const PostTask = () => {
  document.title = "Create Task";

  return (
    <Container>
      <PostTaskForm />
    </Container>
  );
};

export default PostTask;
