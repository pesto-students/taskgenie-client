import React from "react";
import PropTypes from "prop-types";
import { Card, CardContent, Box, Tabs, Tab } from "components/atoms";
import CommentItem from "components/molecules/CommentItem";
import { Typography } from "@mui/material";
function TaskCommentsOffersCard({ comments }) {
  const [value, setValue] = React.useState("questions");
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const CommentsWrapper = (
    <Box sx={{}}>
      <Box sx={{ padding: "1rem 0.5rem" }}>
        <Typography>No Question yet!</Typography>
      </Box>
      {comments.map((comment) => (
        <CommentItem
          key={comment.id}
          comment={comment}
        />
      ))}
    </Box>
  );
  const QuotesWrapper = <Box>quotes</Box>;
  return (
    <Card>
      <CardContent>
        <Box sx={{ width: "100%" }}>
          <Tabs
            value={value}
            onChange={handleChange}
            textColor='secondary'
            indicatorColor='secondary'
            aria-label='secondary tabs example'
          >
            <Tab
              value='quotes'
              label='Quotes'
            />
            <Tab
              value='questions'
              label='Questions'
            />
          </Tabs>

          {value === "quotes" ? QuotesWrapper : CommentsWrapper}
        </Box>
      </CardContent>
    </Card>
  );
}

TaskCommentsOffersCard.propTypes = {
  comments: PropTypes.array,
};
TaskCommentsOffersCard.defaultProps = {
  comments: [],
};

export default TaskCommentsOffersCard;
