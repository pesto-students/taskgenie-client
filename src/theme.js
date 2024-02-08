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
          textTransform: 'none',
        },
      },
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
    }
  },
});
export default theme;
