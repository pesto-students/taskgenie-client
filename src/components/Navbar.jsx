import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import Drawer from '@mui/material/Drawer';
import { useMediaQuery } from '@mui/material';
import { useEffect } from 'react';

const NavBar = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const isDesktop = useMediaQuery('(min-width:600px)');

  const handleMenuToggle = () => {
    setMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    // Close the menu when switching to desktop view
    if (isDesktop) {
      setMenuOpen(false);
    }
  }, [isDesktop]);

  return (
    <>
      <AppBar position="static" style={{ background: 'white', color: 'black' }}>
        <Toolbar style={{ justifyContent: 'space-between', alignItems: 'center' }}>
          {/* Hamburger or Close Icon for Mobile */}
          <IconButton color="inherit" onClick={handleMenuToggle}>
            {isMenuOpen ? <CloseIcon /> : <MenuIcon />}
          </IconButton>

          {/* Logo */}
          <Typography variant="h6" style={{ textAlign: isDesktop ? 'center' : 'center', flex: 1 }}>
            TaskGenie
          </Typography>

          {/* Profile Picture for Mobile */}
          {isDesktop && (
            <div>
              <IconButton color="inherit">
                <Avatar alt="Profile Pic" src="user1.jpeg" />
              </IconButton>
            </div>
          )}
        </Toolbar>
      </AppBar>

      {/* Drawer for Navigation Buttons */}
      <Drawer anchor="left" open={isMenuOpen} onClose={handleMenuToggle} variant="temporary">
        <div style={{ width: '100vw', padding: '16px' }}>
          <ul style={{ listStyle: 'none', padding: 0 }}>
            <li><Button style={{ background: 'white', color: 'black' }} onClick={handleMenuToggle}>Post Tasks</Button></li>
            <li><Button style={{ background: 'white', color: 'black' }} onClick={handleMenuToggle}>All Tasks</Button></li>
            <li><Button style={{ background: 'white', color: 'black' }} onClick={handleMenuToggle}>My Task</Button></li>
            <li><Button style={{ background: 'white', color: 'black' }} onClick={handleMenuToggle}>Profile</Button></li>
            <li><Button style={{ background: 'white', color: 'black' }} onClick={handleMenuToggle}>Contact Us</Button></li>
            <li><Button style={{ background: 'white', color: 'black' }} onClick={handleMenuToggle}>FAQs</Button></li>
          </ul>
        </div>
      </Drawer>
    </>
  );
};

export default NavBar;
