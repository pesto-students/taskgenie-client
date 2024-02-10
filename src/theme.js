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
          borderRadius: '12px',
          padding: '1px',
          backgroundColor: '#8659d3',
        }
      }
    },
    MuiToggleButton: {
      styleOverrides: {
        root: {
          borderRadius: 12,
          color: 'white'
        }
      }
    }
  },
});
export default theme;
