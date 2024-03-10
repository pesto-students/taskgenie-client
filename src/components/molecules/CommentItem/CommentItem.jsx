import React from "react";
import { Avatar, Divider } from "@mui/material";
import { Box, Stack, Typography, Button } from "components/atoms";
import { useTheme } from "@mui/material";
const CommentAccordion = ({ comment, canReply = false }) => {
  const theme = useTheme();
  const { primary } = theme.palette;
  const { name, userId, replies, message } = comment;
  return (
    <Box>
      <Stack
        direction={"row"}
        sx={{ padding: "0.5rem 0" }}
        gap={1}
      >
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
        </Box>
      </Stack>
      {canReply && (
        <Box
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          {/* Todo: Only task owner can reply */}
          <div></div> {/* Empty div to create space */}
          <Button
            variant='text'
            size='small'
          >
            Reply
          </Button>
        </Box>
      )}
      <Divider />
    </Box>
  );
};

export default CommentAccordion;
