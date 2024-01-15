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
        },
      },
    },
    MuiInputLabel: {
      styleOverrides: {
        root: {
          fontSize: "24px",
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          border: "solid 2px black",
          borderRadius: "8px",
        },
      },
    },
  },
});
export default theme;
