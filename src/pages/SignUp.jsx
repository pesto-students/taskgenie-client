import React from 'react'
import { Container, Box } from '@mui/material/';
import Card from '../components/Card/Card';
const SignUp = () => {
    return (
        <>
            <Container>
                <Box>
                    {/* Header */}
                    <h3>TaskGenie</h3>
                </Box>
                <Box>
                    <Card>
                        This is card
                    </Card>
                </Box>
            </Container>
        </>
    )
}

export default SignUp