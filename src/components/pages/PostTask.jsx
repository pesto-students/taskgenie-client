import { Container } from "components/atoms/Container";
import PostTaskForm from "components/organisms/PostTaskForm/PostTaskForm";

const PostTask = () => {
  const handleSubmitData = (data) => {};
  return (
    <Container>
      <PostTaskForm onSubmit={handleSubmitData} />
    </Container>
  );
};

export default PostTask;
