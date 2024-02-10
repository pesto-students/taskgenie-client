import {
  Button,
  Container,
  Stack,
  TextField,
  InputAdornment,
  InputLabel,
  Autocomplete,
  Link,
  ToggleButton,
  ToggleButtonGroup,
  Tabs,
  Tab
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
  const tabs = [{ title: 'As a poster', name: 'poster' }, { title: 'As a Tasker', name: 'tasker' }]
  const [isTasker, setIsTasker] = useState('poster')
  const handleUserType = (event) => {
    setIsTasker(event.target.value)
  }
  return (
    <Container sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%' }}>
      <Stack rowGap={'20px'} sx={{ padding: '10px 50px', width: '400px', textAlign: 'center' }}>
        <div sx={{ width: '100%' }}>
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
        {/* Button */}
        <div>
          <Button variant='contained' sx={{ width: '100%' }} >Sign Up</Button>
        </div>
        {/* Link */}
        <div>
          This is a link to <Link to='/about' underline='none'>About</Link>
        </div>
        {/* Toggle Button */}
        <div>
          <ToggleButtonGroup value={isTasker} exclusive={true} onChange={handleUserType}>
            <ToggleButton value='poster'>Post Task</ToggleButton>
            <ToggleButton value='tasker'>Earn Money</ToggleButton>
          </ToggleButtonGroup>
        </div>
        {/* Tabs */}
        <Tabs tabs={tabs} >
          <Tab label='As a Poster' />
          <Tab label='As a Tasker' />
        </Tabs>
      </Stack>
    </Container>
  )
}

export default Home