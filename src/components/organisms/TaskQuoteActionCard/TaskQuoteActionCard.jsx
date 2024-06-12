import { useState } from "react";
import { useSnackbar } from "notistack";
import { useAddQuoteMutation } from "/src/store/apiSlice";
import MakeQuoteModal from "components/molecules/MakeQuoteModal/MakeQuoteModal";
import { Card, CardActions, Button, Box } from "components/atoms";
import PropTypes from "prop-types";
import { CardContent, Divider, Typography } from "@mui/material";
import { useTheme } from "@mui/material";
import { formatAmount } from "/src/utils.jsx";
import { useNavigate } from "react-router-dom";

/**
 * TaskQuoteActionCard
 */
function TaskQuoteActionCard({
  taskId,
  userId,
  quotes = [],
  acceptedQuote,
  budget,
}) {
  // State
  const [dialogOpen, setDialogOpen] = useState(false);
  // Hooks
  const theme = useTheme();
  const { enqueueSnackbar } = useSnackbar();
  const [addQuote, { addQuoteLoading }] = useAddQuoteMutation();
  const navigate = useNavigate();
  //   Variables
  const isAuthenticated = Boolean(userId);
  const hasQuotedAlready = quotes.some((quote) => quote.userId === userId);
  const quote = quotes.find((quote) => quote.userId === userId);
  const isGenie = userId === acceptedQuote;
  const isAssigned = Boolean(acceptedQuote);
  const showMakeOfferButton =
    !isAssigned && (!isAuthenticated || (!hasQuotedAlready && !isGenie));
  const showInfoBox = (isAssigned && !isGenie) || hasQuotedAlready;
  //   Functions
  const handleDialogOpen = () => {
    if (isAuthenticated) {
      setDialogOpen(true);
    } else {
      navigate("/signin");
    }
  };
  const handleSubmitQuote = async (formData) => {
    if (formData.message) {
      const response = await addQuote({ taskId, body: formData });
      if (response.error) {
        enqueueSnackbar("Unable to Process! Please wait", { variant: "error" });
      } else {
        enqueueSnackbar("Quote Submitted", { variant: "info" });
      }
    }
    setDialogOpen(false);
  };
  //   JSX
  return (
    <div>
      <MakeQuoteModal
        open={dialogOpen}
        onDialogClose={handleSubmitQuote}
        budget={budget}
      />{" "}
      <Card>
        {/* Conditional rendering based on assignment and quote */}
        {isAssigned ? (
          <>
            <CardContent>
              <Box
                sx={{
                  backgroundColor: theme.palette.primary.light,
                  borderRadius: "12px",
                  padding: "1.5rem 1rem",
                  color: "white",
                }}
              >
                <Typography variant='body2'>You have already quoted</Typography>
              </Box>
            </CardContent>
            {/* Render details of the assigned user */}
          </>
        ) : (
          hasQuotedAlready && (
            <>
              <CardContent>
                <Box
                  sx={{
                    backgroundColor: theme.palette.primary.light,
                    borderRadius: "12px",
                    padding: "1.5rem 1rem",
                    color: "white",
                  }}
                >
                  <Typography variant='body1'>Your Quote</Typography>
                  <Divider sx={{ margin: "0.5rem 0" }} />
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "row",
                      gap: 1,
                      alignItems: "center",
                    }}
                  >
                    <Typography variant='body2'>Price</Typography>
                    <Typography variant='h5'>
                      {formatAmount(quote.price)}
                    </Typography>
                  </Box>
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "row",
                      gap: 1,
                      alignItems: "center",
                    }}
                  >
                    <Typography variant='body2'>message</Typography>
                    <Typography variant='body1'>{quote.message}</Typography>
                  </Box>
                </Box>
              </CardContent>
              {/* Render details of the user's quote */}
            </>
          )
        )}
        {
          // Show Make a quote if unauthenticated or task not assigned
          showMakeOfferButton && (
            <CardActions sx={{ padding: "1rem" }}>
              <Button
                sx={{ margin: "0 auto" }}
                onClick={handleDialogOpen}
                loading={addQuoteLoading}
              >
                Make a Quote
              </Button>
            </CardActions>
          )
        }
      </Card>
    </div>
  );
}

TaskQuoteActionCard.propTypes = {
  taskId: PropTypes.string,
};

export default TaskQuoteActionCard;
