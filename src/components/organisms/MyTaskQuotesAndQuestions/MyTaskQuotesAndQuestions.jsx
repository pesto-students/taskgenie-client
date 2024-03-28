import { useState } from "react";
import PropTypes from "prop-types";
import QuestionItem from "components/molecules/QuestionItem";
import TabPanel from "components/molecules/TabPanel/TabPanel";
import { Card, CardContent, Typography, Box, Tab, Tabs } from "@mui/material";
import { useTheme } from "@mui/material";
import QuoteItem from "../../molecules/QuoteItem/QuoteItem";

function MyTaskQuotesAndQuestions({ questions = [], quotes = [], ownerId }) {
  //  Hooks
  const [currentTab, setCurrentTab] = useState(0);
  //Variables

  const handleReply = (commentId) => {
    // Implement reply functionality here
  };

  const handleTabChange = (_, newValue) => {
    setCurrentTab(newValue);
  };
  return (
    <Card sx={{ borderRadius: "12px" }}>
      <CardContent>
        <Box>
          <Tabs
            value={currentTab}
            onChange={handleTabChange}
          >
            {true && (
              <Tab
                value={0}
                label='Quotes'
              />
            )}
            <Tab
              value={1}
              label='Questions'
            />
          </Tabs>
          <TabPanel
            value={currentTab}
            index={0}
          >
            {/* show quotes here */}
            {quotes.length === 0 ? (
              <Box sx={{ textAlign: "center", marginTop: "20px" }}>
                <Typography variant='body1'>No quotes yet</Typography>
              </Box>
            ) : (
              quotes.map((quote) => (
                <QuoteItem
                  key={quote._id}
                  quote={quote}
                />
              ))
            )}
          </TabPanel>
          <TabPanel
            value={currentTab}
            index={1}
          >
            {questions.length === 0 ? (
              <Box sx={{ textAlign: "center", marginTop: "20px" }}>
                <Typography variant='body1'>No questions yet</Typography>
              </Box>
            ) : (
              questions.map((question) => (
                <QuestionItem
                  key={question._id}
                  canReply={true}
                  question={question}
                />
              ))
            )}
          </TabPanel>
        </Box>
      </CardContent>
    </Card>
  );
}

MyTaskQuotesAndQuestions.propTypes = {
  questions: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      message: PropTypes.string.isRequired,
      reply: PropTypes.string,
    })
  ),
  quotes: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
      message: PropTypes.string.isRequired,
    })
  ),
  currentUser: PropTypes.string.isRequired,
  ownerId: PropTypes.string.isRequired,
};

export default MyTaskQuotesAndQuestions;
