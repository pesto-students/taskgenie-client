import { Container } from "../components/UI";
import PostTaskForm from "../components/organisms/PostTaskForm/PostTaskForm";

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
