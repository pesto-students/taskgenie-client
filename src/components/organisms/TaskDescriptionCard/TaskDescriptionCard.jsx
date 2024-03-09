import { useState } from "react";
import PropTypes from "prop-types";
import { IconButton } from "@mui/material";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Card,
  CardContent,
  Box,
  Typography,
} from "components/atoms";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessOutlinedIcon from "@mui/icons-material/ExpandLessOutlined";
import { useTheme } from "@mui/material";
const TaskDescriptionCard = ({ description = "" }) => {
  const [descriptionExpanded, setDescriptionExpanded] = useState(false);
  const theme = useTheme();
  return (
    <Card>
      <CardContent>
        <Typography
          variant='subtitle1'
          sx={{ color: theme.palette.textLight.main }}
        >
          Description
        </Typography>
        <Box sx={{ marginTop: "0.5rem" }}>
          {description.length <= 500 ? (
            <Box>
              <Typography variant='body1'>{description}</Typography>
            </Box>
          ) : (
            <Box>
              <Accordion
                expanded={descriptionExpanded}
                sx={{
                  "&.MuiAccordion-root": { border: "none", boxShadow: "none" },
                }}
              >
                <AccordionSummary
                  sx={{ display: descriptionExpanded ? "none" : "block" }}
                >
                  <Typography variant='body1'>
                    {description.substring(0, 500) + "..."}
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography variant='body1'>{description}</Typography>
                </AccordionDetails>
              </Accordion>
              <IconButton
                onClick={() => {
                  setDescriptionExpanded(!descriptionExpanded);
                }}
              >
                {!descriptionExpanded ? (
                  <ExpandMoreIcon />
                ) : (
                  <ExpandLessOutlinedIcon />
                )}
              </IconButton>
            </Box>
          )}
        </Box>
      </CardContent>
    </Card>
  );
};

TaskDescriptionCard.propTypes = {
  description: PropTypes.string,
};
export default TaskDescriptionCard;
