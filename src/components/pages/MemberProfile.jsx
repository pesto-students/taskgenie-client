import React, { useState } from "react";
import FmdGoodOutlinedIcon from '@mui/icons-material/FmdGoodOutlined';
import GradeOutlinedIcon from '@mui/icons-material/GradeOutlined';
import GradeIcon from '@mui/icons-material/Grade';


import {
    Card,
    Box,
    Avatar,
    Typography,
    Container,
    Stack,
    Tabs,
    Chip,
    AccordionSummary,
} from '../components/UI';



function MemberProfile() {

    const userTypes = [
        {value: "as-poster", label: "As Poster"},
        {value: "as-taskGenie", label: "As TaskGenie"}
    ];

    const [userType, setUserType] = useState('as-poster');
    
    const handleUserTypeChange = (userType) => {
        setUserType(userType)
    }   

  return (
    <>
    {/* Name/Place */}
    <Card sx={{width: '70%', margin: 'auto', height: '10rem'}}>
        <Box sx={{ mt: '1rem' }}>
            <Stack direction='column' alignItems='center' justifyContent='center' spacing={2} >
                
                <Avatar>h</Avatar>            
                <Typography variant='h5'>Saksham</Typography>
                
                <Box sx={{display:'flex', justifyContent:'space-between'}}>
                    <FmdGoodOutlinedIcon/>
                    <Typography variant= 'subtitle1'>Delhi</Typography>
                </Box>
            </Stack>
        </Box>
    </Card>

    {/* Rating/Reviews */}
    <Card sx={{ width: '80%', margin: '1rem auto', height: '10rem'}}>
        <Tabs
         value={userType}
         label={userType.label}
        //  defaultValue={tab}
         options={userTypes}
         onChange={handleUserTypeChange}
         sx={{justifyContent:'center', mt:'1rem'}}
         />

        <Box sx={{mt: '1rem', display:'flex', justifyContent:'space-around'}}>
            <Box sx={{mt: '1rem', display:'flex', justifyContent:'space-around'}}>
                <Typography variant='subtitle2'>Rating</Typography>
                <Chip label='4.2' sx={{ml: '0.5rem'}} icon={
                    <GradeIcon/>
                }
                />
            </Box>

            <Box sx={{mt: '1rem', display:'flex', justifyContent:'space-around'}}>
                <Typography variant='subtitle2'>Reviews</Typography>
                <Chip label='92 %' sx={{ml: '0.5rem'}}/>
            </Box>
            
            
        </Box>
         
    </Card>

    {/* Reviews-comments */}

    <Card sx={{width: '90%', margin: 'auto', height: '10rem'}}>
        <Typography variant='h5'>Reviews</Typography>
        <Tabs
         value={userType}
         label={userType.label}
        //  defaultValue={tab}
         options={userTypes}
         onChange={handleUserTypeChange}
         sx={{justifyContent:'center', mt:'1rem'}}
         />
         <AccordionSummary/>
    </Card>
    </>
  );
}

export default MemberProfile;