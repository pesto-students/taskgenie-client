import { useState } from "react";
import { Container } from "components/atoms/Container";
import PostTaskForm from "components/organisms/PostTaskForm/PostTaskForm";

const PostTask = () => {
  document.title = "Create Task";
  const handleSubmitData = (formData) => {};
  return (
    <Container>
      <PostTaskForm
        onSubmit={handleSubmitData}
        onSubmitData={handleSubmitData}
      />
    </Container>
  );
};

export default PostTask;
