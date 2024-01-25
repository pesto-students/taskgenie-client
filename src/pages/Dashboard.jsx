import React from "react";
import  {Box, Button, Card, CardContent, Grid} from "@mui/material";
import {Typography} from "@mui/material";
import {TextField} from "@mui/material";
import DashboardCard from "../components/DashboardCard";
const Dashboard = () => {
  return (
    <>
        <Card style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', margin:'20px'}}>
            <CardContent>
                <Typography variant = "h3">Good Evening, Swastik!</Typography>
                <Typography>Submit a task, see it accomplished!</Typography>
                
                <div>
                <TextField label="Briefly explain what needs to be accomplished" id="fullWidth" />
                </div>
                <div style={{display: "flex", alignItems: 'center', justifyContent: 'center', margin:'10px'}}>
                    <Button onClick={() => {
                                    alert('clicked');
                                    }}>
                        <Typography>
                            Post Tax
                        </Typography>
                    </Button>
                </div>
                
            </CardContent>
           
        </Card>
    
            <Typography variant="h6">Explore Tasks</Typography>
            <DashboardCard/>
    
    </>
  )
}

export default Dashboard;