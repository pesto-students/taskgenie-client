import {
  Button,
  Container,
  Stack,
  TextField,
  InputAdornment,
  InputLabel,
  Autocomplete,
  Link,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Tabs,
  Tab,
  Switch,
  ToggleButtonGroup,
  ToggleButton,
  Card,
  RadioGroup,
  FormControl,
  FormLabel,
  FormControlLabel,
  Radio,
} from '@mui/material'
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import React, { useState } from 'react'

const Home = () => {
  const options = [
    { label: "delhi", id: 1 },
    { label: "mumbai", id: 2 },
    { label: "chennai", id: 3 },
    { label: "kolkata", id: 4 },
    { label: "dehradun", id: 5 },
  ]

  return (
    <Container sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%' }}>
      <Stack rowGap={'20px'} sx={{ padding: '10px 50px', width: '400px', textAlign: 'center' }}>
        <div sx={{ width: '100%' }}>
          {/* Button */}
          <div>
            <h3>Contained Button</h3>
            <Button variant='contained' sx={{ width: '100%' }} >Sign Up</Button>
            <h3>Outlined Button</h3>
            <Button variant='contained' sx={{ width: '100%' }} >Sign Up</Button>
          </div>
          {/* Email */}
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
          {/* Password */}
          <InputLabel sx={{ textAlign: 'left', mt: '20px' }}>Password</InputLabel>
          <TextField placeholder='Enter password' InputProps={{
            startAdornment: (
              <InputAdornment position='start'>
                <LockOutlinedIcon />
              </InputAdornment>
            )
          }}
            sx={{ width: '100%' }}
          />


          {/* Autocomplete */}
          <Autocomplete sx={{ mt: '20px' }} options={options} renderInput={(params) => <TextField placeholder='eg. Delhi' {...params} />} />
        </div>
        {/* Card */}
        <div>
          <Card>
            <p>This is a dummy paragraph within the Card component.</p>
          </Card>
        </div>
        {/* Link */}
        <div>
          This is a link to <Link to='/about' underline='none'>About</Link>
        </div>

        {/* Tabs */}
        <Tabs value={'poster'} >
          <Tab label='As a Poster' />
          <Tab label='As a Tasker' />
        </Tabs>

        {/* Accordion */}
        <div>
          <Accordion>
            <AccordionSummary>This is title 1</AccordionSummary>
            <AccordionDetails>Some content for accordion 1</AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary>This is title 2</AccordionSummary>
            <AccordionDetails>Some content for accordion 2</AccordionDetails>
          </Accordion>
        </div>
        {/* Switch */}
        <div>
          <Switch>hello</Switch>
        </div>
        {/* Image Picker */}
        <div>
          <Button>

          </Button>
        </div>
        {/* Toggle Group - Toggle Button */}
        <div>
          <ToggleButtonGroup value={'tasker'}>
            <ToggleButton value={'poster'}>Post Task</ToggleButton>
            <ToggleButton value={'tasker'}>Find Task</ToggleButton>
          </ToggleButtonGroup>
        </div>
        {/* Radio Button Group - Radio button */}
        <div>
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
      </Stack>
    </Container>
  )
}
export default Home