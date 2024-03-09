import React from "react";
import { Avatar, Divider } from "@mui/material";
import { Box, Stack, Typography, Button } from "components/atoms";
import { useTheme } from "@mui/material";
const CommentAccordion = ({ comment }) => {
  const theme = useTheme();
  const { primary } = theme.palette;
  const { name, userId, replies, message } = comment;
  console.log(replies);
  return (
    <Box>
      <Stack
        direction={"row"}
        sx={{ padding: "0.5rem 0.5rem" }}
        gap={1}
      >
        <Stack
          alignItems={"center"}
          gap={0.5}
          sx={{ minWidth: "70px" }}
        >
          <Avatar sx={{ width: 32, height: 32 }}>R</Avatar>
          <Typography variant={"caption"}>{name}</Typography>
        </Stack>
        <Box sx={{ flex: 1 }}>
          <Box>
            <Typography sx={{ fontSize: "0.9rem" }}>{message}</Typography>
          </Box>
          <Box></Box>
        </Box>
      </Stack>
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
      <Divider />
    </Box>
  );
};

export default CommentAccordion;
