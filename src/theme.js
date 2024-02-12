/**
 * Material UI Theming
 */

import { createTheme } from "@mui/material";

const theme = createTheme({
  palette: {
    primary: {
      main: '#8659d3',
      light: '#9e7adb',
      dark: '#5d3e93'
    },
  },

  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 12,
          lineHeight: 3,
          fontSize: '1rem',
          textTransform: 'none',
        },
      },
    },
    MuiSvgIcon: {
      styleOverrides: {
        root: {
          color: 'black'
        }
      }
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          borderRadius: 12,
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          borderRadius: 12,
        }
      }
    },
    MuiInputLabel: {
      styleOverrides: {
        root: {
          color: '#000',
          fontWeight: 'bold'
        }
      }
    },
    MuiToggleButtonGroup: {
      styleOverrides: {
        root: {
          display: 'flex',
          gap: '1rem',
          height: '80px'
        },
        firstButton: {
          borderRadius: '12px'
        },
        middleButton: {
          borderRadius: '12px'
        },
        lastButton: {
          borderLeft: '1px solid rgba(0,0,0,0.1)',
          borderRadius: '12px'
        }
      },
    },
    MuiToggleButton: {
      styleOverrides: {
        root: {
          borderRadius: '12px',
          '&.Mui-selected': {
            backgroundColor: '#f6f3fc',
            fontWeight: 'bold',
            color: '#8659d3',
            border: '2px solid #8659d3',
            '&:hover': {
              // Add your hover styles here
              backgroundColor: '#d9d6e9'
            }
          },
        },
      },
    }, 
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 12,
          boxShadow: "0px 1px 7px -4px #000000",
          background: "#FFFFFF",
        }
      }
    },
    MuiRadio: {
      styleOverrides: {
        root: {
          '& svg': {
            color: '#8659d3',
            borderRadius: '4px',
            width: '16px', // Set icon width
            height: '16px', // Set icon height
          },
          '&.Mui-checked': {
            color: '#8659d3', // Color when radio is checked
          }, 
        },
      },
    },
    MuiPaper:{
      styleOverrides:{
        root:{
          borderRadius: '12px',
        }
      }
    },

    MuiDialog:{
      styleOverrides:{
        root:{
          '& svg':{
            color: '#9e7adb',
          },
          width: '50rem',
        }
      }
    }
  },
});

export default theme;
