/**
 * Material UI Theming
 */

import { createTheme } from "@mui/material";

const theme = createTheme({
  typography: {
    fontFamily: "'Patrick Hand', cursive",
    h1: { fontSize: "34px" },
    h2: { fontSize: "28px" },
    h3: { fontSize: "24px" },
    h4: undefined,
    body: {
      fontSize: "18px",
    },
    bodyLg: {
      fontSize: "22px",
    },
    display: {
      fontSize: "48px",
    },
    displayLg: {
      fontSize: "64px",
    },
    caption: {
      fontSize: "16px",
    },
    tiny: {
      fontSize: "14px",
    },
    uppercaseLg: {
      fontSize: "20px",
      textTransform: "uppercase",
    },
    uppercase: {
      fontSize: "16px",
      textTransform: "uppecase",
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "none",
          padding: "12px 16px",
          background: "black",
          color: "white",
          fontSize: "large",
          borderRadius: "8px",
          ":hover": {
            boxShadow: "5px 5px 10px rgba(0, 0, 0, 0.3)",
            backgroundColor: "#333",
          },
        },
        outlined: {
          backgroundColor: "white",
          color: "black",
          border: "2px solid black",
          borderRadius: "8px",
          ":hover": {
            color: "white",
            backgroundColor: "black",
            borderColor: "#333",
            boxShadow: "0 0 10px rgba(0,0,0,0.5)",
          },
        },
      },
    },
      MuiInputLabel: {
      styleOverrides: {
        root: {
          fontSize: "24px",
          "&.Mui-focused": {
            color: "rgba(0, 0, 0, 0.6)",
          },
        },
      },
    },
    MuiInputBase: {
      root: {},
    },
    MuiOutlinedInput: {
      styleOverrides: {
        notchedOutline: {
          border: "2px solid black !important",
        },
      },
    },
    MuiInputBase: {
      styleOverrides: {
        notchedOutline: {
          border: "2px solid black !important",
        },
      },
    },

  },
});
export default theme;
