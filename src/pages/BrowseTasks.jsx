import React from 'react'
import Box from '../components/Box';
import Stack from '../components/Stack';
import TaskList from '../components/TaskList';
const BrowseTasks = () => {
  const tasks = [
    {
      id: 1,
      title: 'Need social media marketer for a restaurant',
      location: 'Electronic City, Bangalore',
      dateType: 'on',
      date: Date.now(),
      postedBy: 'Anuraja',
      budget: 5000,
      status: 'open'
    },
    {
      id: 2,
      title: 'Resume and cover letter',
      location: 'Remote',
      dateType: 'before',
      date: '2024-02-22',
      postedBy: 'Manoj',
      budget: 1000,
      status: 'open'
    },
    {
      id: 3,
      title: 'Hi just need some parcels picked up',
      location: 'Whitefield, Bangalore',
      dateType: 'on',
      date: '2024-02-01',
      postedBy: 'Deepak',
      budget: 250,
      status: 'assigned'
    },
    {

      id: 4,
      title: 'Help clean my car',
      location: 'Kodegehalli, Bangalore',
      dateType: 'on',
      date: Date.now(),
      budget: 500,
      postedBy: 'Chau',
      status: 'open',
    }, {
      id: 5,
      title: 'Need a driver for a day to drive us around the market',
      location: 'JP Nagar, Bangalore',
      dateType: 'on',
      date: Date.now(),
      postedBy: 'Shivam',
      budget: 1200,
      status: 'open',
    }

  ]
  return (
    <>
      <Stack component='section'>
        {/* Filter Section */}

        <Box>
          {/* Location */}

        </Box>
        <Box>
          {/* Search field */}
        </Box>
        <Box>
          {/* filter button */}
        </Box>
      </Stack>
      <Box component='section'>
        <TaskList tasks={tasks} />
      </Box>
    </>
  )
}

export default BrowseTasks