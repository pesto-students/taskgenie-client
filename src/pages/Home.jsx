import {
  Button,
  Container,
  Stack,
  TextField,
  InputAdornment,
  InputLabel,
  Autocomplete,
  ToggleButtonGroup,
  ToggleButton,
  Card,
  RadioGroup,
  FormControl,
  FormLabel,
  FormControlLabel,
  Radio,
  Accordion,
  AccordionDetails,
  AccordionSummary,
} from '@mui/material'
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import React, { useState } from 'react'

const Home = () => {
  const options = [
    { label: "delhi", id: 1 },
    { label: "mumbai", id: 2 },
    { label: "chennai", id: 3 },
    { label: "kolkata", id: 4 },
    { label: "dehradun", id: 5 },
  ]
  const [userType, setUserType] = useState('tasker');
  const handleUserType = (event, newUserType) => {
    setUserType(newUserType);
  };
  return (
    <Container sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%' }}>
      <Stack rowGap={'20px'} sx={{ padding: '10px 50px', width: '400px', textAlign: 'center' }}>
        <div sx={{ width: '100%' }}>
          {/* Button */}
          <div>
            <h3>Contained Button</h3>
            <Button variant='contained' sx={{ width: '100%' }} >Finish setting up!</Button>
            <h3>Outlined Button</h3>
            <Button variant='outlined' sx={{ width: '100%' }} >Reset</Button>
          </div>
          {/* Email */}
          <h3>TextField</h3>
          <InputLabel sx={{ textAlign: 'left' }}>Email</InputLabel>
          <TextField placeholder='Enter email' InputProps={{
            startAdornment: (
              <InputAdornment position='start'>
                <EmailOutlinedIcon />
              </InputAdornment>
            )
          }}
            sx={{ width: '100%' }}
          />
          {/* Autocomplete */}
          <Autocomplete sx={{ mt: '20px' }} options={options} renderInput={(params) => <TextField placeholder='eg. Delhi' {...params} />} />
        </div>
        {/* Toggle Group - Toggle Button */}
        <div>
          <h3>Toggle Button Group</h3>
          <ToggleButtonGroup value={userType} exclusive onChange={handleUserType}>
            <ToggleButton value={'poster'}>Post Task</ToggleButton>
            <ToggleButton value={'tasker'}>Find Task</ToggleButton>
          </ToggleButtonGroup>
        </div>
        {/* Search TextField */}
        <div>
          <h3>Search TextField</h3>
          <TextField type="search" />
        </div>
        {/* Card */}
        <div>
          <h3>Card</h3>
          <Card>
            <p>This is a dummy paragraph within the Card component.</p>
          </Card>
        </div>

        {/* Radio Button Group - Radio button */}
        <div>
          <h3>Radio Button</h3>
          <FormControl>
            <FormLabel id="demo-radio-buttons-group-label">Location Type</FormLabel>
            <RadioGroup
              aria-labelledby="demo-radio-buttons-group-label"
              defaultValue="inPerson"
              name="radio-buttons-group"
            >
              <FormControlLabel value="inPerson" control={<Radio />} label="In-Person" />
              <FormControlLabel value="remote" control={<Radio />} label="Remote" />
            </RadioGroup>
          </FormControl>
        </div>
        {/* Accordion */}
        <div>
          <h3>Accordion</h3>
          <Accordion elevation={0}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1-content"
              id="panel1-header"
            >
              Accordion 1
            </AccordionSummary>
            <AccordionDetails>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
              malesuada lacus ex, sit amet blandit leo lobortis eget.
            </AccordionDetails>
          </Accordion>
          <Accordion elevation={0}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2-content"
              id="panel2-header"
            >
              Accordion 2
            </AccordionSummary>
            <AccordionDetails>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
              malesuada lacus ex, sit amet blandit leo lobortis eget.
            </AccordionDetails>
          </Accordion>
        </div>
      </Stack>
    </Container >
  )
}
export default Home