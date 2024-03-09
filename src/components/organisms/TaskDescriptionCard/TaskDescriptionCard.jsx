import { useState } from "react";
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
const TaskDescriptionCard = () => {
  const [descriptionExpanded, setDescriptionExpanded] = useState(false);
  const description =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus non tincidunt nunc. In hac habitasse platea dictumst. Quisque eu nisl non ipsum ullamcorper rhoncus. Suspendisse et est eu lectus venenatis malesuada nec vel leo. Sed non augue in sapien facilisis placerat nec a lorem. In hac habitasse platea dictumst. Integer a vehicula orci. Suspendisse congue justo vel odio efficitur, quis vehicula sem suscipit. Mauris scelerisque risus ut tortor dictum, sed varius ipsum tincidunt. Donec id tortor quis purus lobortis laoreet id sed tellus. Curabitur a arcu ut leo luctus sollicitudin sit amet sit amet magna. Nam vel sapien nec eros laoreet aliquam. Integer nec justo volutpat, suscipit magna sit amet, rhoncus urna. Nam efficitur lorem libero, eu egestas orci sollicitudin in. Duis tincidunt risus nec felis vestibulum tincidunt. Curabitur feugiat lorem magna, nec molestie dui gravida id. Nullam in urna sit amet ligula dictum tincidunt. Quisque ac nibh in mauris dignissim ultricies vel sit amet quam. Nullam tempus, sapien sit amet viverra suscipit, metus ligula vestibulum dolor, nec fringilla sem magna ut risus.mi. ";

  return (
    <Card>
      <CardContent>
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
              <Typography>{description.substring(0, 500) + "..."}</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>{description}</Typography>
            </AccordionDetails>
          </Accordion>
          <IconButton
            onClick={() => {
              setDescriptionExpanded(!descriptionExpanded);
            }}
          >
            <ExpandMoreIcon />
          </IconButton>
        </Box>
      </CardContent>
    </Card>
  );
};

export default TaskDescriptionCard;
