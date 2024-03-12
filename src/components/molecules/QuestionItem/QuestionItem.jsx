import { useState } from "react";
import { Avatar, Divider } from "@mui/material";
import { Box, Stack, Typography, Button, TextField } from "components/atoms";
import { useTheme } from "@mui/material";
import CancelOutlinedIcon from "@mui/icons-material/CancelOutlined";

const QuestionItem = ({ comment, canReply = false }) => {
  const theme = useTheme();
  const [showReplyTextField, setshowReplyTextField] = useState(false);
  const { name, userId, reply, message } = comment;
  const handleSubmitReply = (event) => {
    event.preventDefault();
  };
  return (
    <Box>
      <Stack
        direction={"row"}
        sx={{ padding: "0.5rem 0" }}
        gap={1}
      >
        {/* Avatar and Name */}
        <Stack
          alignItems={"center"}
          gap={0.5}
          sx={{ minWidth: "60px" }}
        >
          <Avatar
            sx={{
              width: 24,
              height: 24,
              backgroundColor: theme.palette.primary.light,
            }}
          >
            R
          </Avatar>
          <Typography
            variant={"caption"}
            sx={{ fontSize: "0.7rem" }}
          >
            {name}
          </Typography>
        </Stack>
        <Box sx={{ flex: 1 }}>
          <Box>
            <Typography
              variant='body1'
              sx={{ fontSize: "0.9rem" }}
            >
              {message}
            </Typography>
          </Box>
          {reply && (
            <Stack
              direction='row'
              gap={1}
              sx={{ marginTop: "0.5rem" }}
            >
              <Avatar sx={{ height: 20, width: 20 }}>d</Avatar>
              <Typography sx={{ fontSize: "0.85rem" }}>{reply}</Typography>
            </Stack>
          )}
        </Box>
      </Stack>
      {canReply && !reply && (
        <Box
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          {/* Todo: Only task owner can reply */}
          <Box sx={{ padding: "1rem 1rem" }}>
            {" "}
            {showReplyTextField && (
              <Box>
                <form onSubmit={handleSubmitReply}>
                  <TextField
                    size='small'
                    required={true}
                  />
                  <Button
                    size='small'
                    variant='text'
                    onClick={() => setshowReplyTextField(!showReplyTextField)}
                  >
                    Cancel
                  </Button>
                  <Button
                    size='small'
                    variant='text'
                    type='submit'
                  >
                    Submit
                  </Button>
                </form>
              </Box>
            )}
          </Box>{" "}
          {/* Empty div to create space */}
          {!showReplyTextField && (
            <Button
              variant='text'
              size='small'
              onClick={() => {
                setshowReplyTextField((prev) => !prev);
              }}
            >
              Reply
            </Button>
          )}
        </Box>
      )}
      <Divider />
    </Box>
  );
};

export default QuestionItem;
