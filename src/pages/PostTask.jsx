import { Container } from "../components/UI";
import PostTaskForm from "../components/PostTaskForm/PostTaskForm";

const PostTask = () => {
  const handleSubmitData = (data) => {
  };
  return (
    <Container>
      <PostTaskForm onSubmit={handleSubmitData} />
    </Container>
  );
};

export default PostTask;
