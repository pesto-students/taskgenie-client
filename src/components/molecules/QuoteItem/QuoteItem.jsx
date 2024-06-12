import React from "react";
import {
  Box,
  Button,
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Stack,
  Avatar,
  Chip,
  Typography,
} from "components/atoms";
import { AccordionActions } from "@mui/material";
import { useTheme, Skeleton } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useGetUserByIdQuery } from "/src/store/apiSlice";
import { formatAmount } from "/src/utils.jsx";
const QuoteItem = ({ quote }) => {
  const { data, isLoading } = useGetUserByIdQuery(quote.userId);
  const theme = useTheme();
  return (
    <Box>
      {isLoading ? (
        <Skeleton height={"80px"} />
      ) : (
        <Accordion
          sx={{
            boxShadow: "none",
            "&.Mui-expanded": {
              boxShadow: `0px 0px 2px 2px ${theme.palette.primary.light}`,
              borderRadius: "12px",
              marginBottom: "8px !important",
            },
          }}
        >
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Stack
              direction='row'
              alignItems='center'
              gap={2}
              sx={{ width: "100%" }}
            >
              <Stack
                direction='column'
                sx={{ minWidth: "60px" }}
              >
                <Avatar
                  sx={{
                    backgroundColor: theme.palette.primary.light,
                    height: "30px",
                    width: "30px",
                  }}
                >
                  {data.name?.charAt(0)}
                </Avatar>

                <Typography
                  sx={{ flex: 1 }}
                  variant='caption'
                >
                  {data.name}
                </Typography>
              </Stack>
              <Typography sx={{ flex: 1 }}>
                {formatAmount(quote.price)}
              </Typography>
              <Chip
                label='4.3'
                size='small'
              />
            </Stack>
          </AccordionSummary>
          <AccordionDetails>
            <Typography variant='body2'>{quote.message}</Typography>
          </AccordionDetails>
          <AccordionActions>
            <Button size='small'>Accept Quote</Button>
          </AccordionActions>
        </Accordion>
      )}
    </Box>
  );
};

export default QuoteItem;
