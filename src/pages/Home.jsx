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
  Slider,
  Modal,
  Box,
  Typography,
  Dialog,
  DialogActions,
  DialogTitle,DialogContent
} from '@mui/material'
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import React, { useState } from 'react';

const Home = () => {
  const options = [
    { label: "delhi", id: 1 },
    { label: "mumbai", id: 2 },
    { label: "chennai", id: 3 },
    { label: "kolkata", id: 4 },
    { label: "dehradun", id: 5 },
  ];

  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <Container sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%' , height: '100%'}}>
      <Stack rowGap={'20px'} sx={{ padding: '10px 50px', width: '400px', textAlign: 'center' }}>
        <div className={{ width: '100%' }}>
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
        {/* Slider - Distance */}
        <div>
          <Slider defaultValue={50} aria-label="Distance" valueLabelDisplay="off"/>
        </div>
       
       {/* Modal */}
        {/* <div>
          <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
          >
            <Box sx={style}>
              <Button onClick={handleOpen}>Open modal</Button>
              <Typography id="modal-modal-title" variant="h6" component="h2">
                Make a Quote
              </Typography>
              <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
              </Typography>
            </Box>
          </Modal>
        </div> */}

        {/* Dialogue - Cancel Task */}
        <div>
          <Button onClick={handleOpen}>Cancel Task</Button>
          <Dialog open={open} onClose={handleClose}>
          <DialogTitle sx={{textAlign: 'center'}}><InfoOutlinedIcon/></DialogTitle>
          <DialogContent>
            <Typography variant="body1" textAlign="center">The task has been assigned to you. </Typography>
            <Typography>Do you wish to cancel and confirm that you are unable to do it?</Typography>
          </DialogContent>
          <DialogActions sx={{ justifyContent: 'center'}}>
            <Button variant='outlined' onClick={handleClose} sx={{ marginRight: '20px', minWidth: '10rem' }}>No</Button>
            <Button variant='contained' onClick={handleClose} sx={{ marginLeft: '20px', minWidth: '10rem' }}>Yes</Button>
          </DialogActions>
          </Dialog>
        </div>
      </Stack>
    </Container>
  )
}
export default Home