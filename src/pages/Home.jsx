import { Button, Container, Stack, TextField, InputAdornment, InputLabel, Autocomplete, Link } from '@mui/material'
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import React from 'react'

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
        <div>
          <Button variant='contained' sx={{ width: '100%' }} >Sign Up</Button>
        </div>
        <div>
          This is a link to <Link to='/about' underline='none'>About</Link>
        </div>
      </Stack>
    </Container>
  )
}

export default Home