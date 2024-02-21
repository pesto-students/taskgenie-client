import React from 'react';
import Card from '../Card';
import CardContent from '../CardContent';
import Typography from '../Typography';
import Chip from '../Chip';
import Box from '../Box';
import Stack from '../Stack';
import { Divider } from '@mui/material';
import Avatar from '@mui/material/Avatar';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import CalendarMonthOutlinedIcon from '@mui/icons-material/CalendarMonthOutlined';
import { useTheme } from '@mui/material/styles';
import { formatDate } from '../../utils';

// TaskItem component
const TaskItem = ({ task }) => {
    const theme = useTheme();
    return (
        <>
            <Card>
                <CardContent>
                    <Stack direction="row" spacing={1}>
                        {/* Task Title */}
                        <Typography variant='body' component='span' sx={{ fontWeight: 500, flexGrow: 1 }}>{task.title}</Typography>
                        <Box>
                            {/* Task Status */}
                            <Chip label={task.status} sx={{ textTransform: 'capitalize', flexGrow: 0 }} size="small" />
                        </Box>
                    </Stack>
                    <Box sx={{ paddingTop: '0.7rem' }}>
                        {/* Task Location */}
                        <Stack direction="row" alignItems="center" color="secondary">
                            <LocationOnOutlinedIcon sx={{ color: theme.palette.textLight.main, fontSize: '16px', marginRight: "6px" }} />
                            <Typography variant='caption' component='span'>{task.location}</Typography>
                        </Stack>
                        {/* Date */}
                        <Stack direction="row" alignItems="center">
                            <CalendarMonthOutlinedIcon sx={{ color: theme.palette.textLight.main, fontSize: '16px', marginRight: "6px" }} />
                            <Typography variant='caption' component='span'>{formatDate(task.date)}</Typography>
                        </Stack>
                    </Box>
                    <Divider sx={{ margin: '1rem 0' }} />
                    <Stack direction="row">
                        {/* Task Budget */}
                        <Typography variant="h6" component='span' sx={{ flexGrow: 1 }}>{`₹${task.budget}`}</Typography>
                        {/* Posted Avatar */}
                        <Avatar sx={{ backgroundColor: theme.palette.primary.light, width: '30px', height: "30px" }}>{task.postedBy.charAt(0)}</Avatar>
                    </Stack>
                </CardContent>
            </Card >
        </>
    );
}

export default TaskItem;
