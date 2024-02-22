import React from 'react';
import {Container, Box, Button, InputAdornment, Stack, Input, Typography} from '@mui/material';
import { EmailOutlined } from '@mui/icons-material';
import {FormControl, InputLabel, TextField} from '@mui/material';
import { useState } from 'react';

function SignIn() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
   
    const handleSubmit = (e) => {
        e.preventDefault();
    }

  return (
    <>
        <Container>
            <Box>
                <Typography>TaskGenie</Typography>
            </Box>
            <Box component={'section'}>
                <Card>
                    <Box component={'header'}>
                        <h4>Hello</h4>
                        <h5>Welcome Back</h5>
                    </Box>
                    <Box component={'main'}>
                        {/* form */}
                        <form>
                            <InputLabel htmlFor=''>Email</InputLabel>
                            <TextField                               >
                    
                                </TextField>
                        </form>                        
                    </Box>
                </Card>
                
            </Box>
        </Container>
    </>
      
    
  );
}

export default SignIn;