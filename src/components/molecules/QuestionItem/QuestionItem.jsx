import { useState } from "react";
import { Avatar, Divider } from "@mui/material";
import { Box, Stack, Typography, Button, TextField } from "components/atoms";
import { useTheme } from "@mui/material";
import CancelOutlinedIcon from "@mui/icons-material/CancelOutlined";

const QuestionItem = ({ question, canReply = false }) => {
  const theme = useTheme();
  const [showReplyTextField, setshowReplyTextField] = useState(false);
  const { name, userId, reply, message } = question;
  const handleSubmitReply = (event) => {
    event.preventDefault();
  };
  return (
    <Box
      sx={{
        padding: "0.5rem",
        borderBottom: "1px solid #dee1e6",
        "&:not(:last-child)": {
          marginBottom: "1rem",
        },
      }}
    >
      {/* Question line 1 */}
      <Stack
        direction='row'
        alignItems='center'
      >
        {/* Avatar and Name */}
        <Stack
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
            {"Ravi"}
          </Typography>
        </Stack>

        {/* Message */}
        <Box sx={{ flexGrow: 1 }}>
          <Typography variant='body2'>{message}</Typography>
        </Box>

        {/* Reply Button */}
        {!showReplyTextField && !reply && (
          <Box>
            <Button
              variant='text'
              size='small'
              onClick={() => {
                setshowReplyTextField((prev) => !prev);
              }}
            >
              Reply
            </Button>
          </Box>
        )}
      </Stack>

      {canReply && !reply && showReplyTextField && (
        <Box sx={{ padding: "1rem 0" }}>
          <Box>
            <form onSubmit={handleSubmitReply}>
              <TextField
                size='small'
                required={true}
                fullWidth
              />
              <Stack
                direction='row'
                gap={0.5}
                sx={{ marginTop: "0.5rem" }}
              >
                <Button
                  size='small'
                  variant='outlined'
                  onClick={() => setshowReplyTextField(!showReplyTextField)}
                  color='error'
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
              </Stack>
            </form>
          </Box>
        </Box>
      )}

      {reply && (
        <Box sx={{ textAlign: "right" }}>
          <Divider variant='inset' />
          <Box sx={{ padding: "1rem" }}>
            <Typography
              variant='body2'
              sx={{ fontSize: "0.85rem" }}
            >
              {reply}
            </Typography>
          </Box>
        </Box>
      )}
    </Box>
  );
};

export default QuestionItem;
