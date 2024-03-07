/**
 * Material atoms Theming
 */

import { createTheme } from "@mui/material";

const lexendFont = "'Lexend', sans-serif";
const encodeSansFont = "'Encode Sans', sans-serif";
const textDark = "#061257";
const textLight = "#6A719A";

const theme = createTheme({
  htmlFontSize: 16,
  typography: {
    fontFamily: [lexendFont, encodeSansFont].join(","),
    body: {
      color: textDark,
    },
    h6: {
      color: textDark,
    },
    caption: {
      color: textLight,
    },
  },
  palette: {
    primary: {
      main: "#8659d3",
      light: "#b396e3",
      dark: "#5d3e93",
    },
    accordionBorder: "#dee1e6",
    textDark: {
      main: textDark,
    },
    textLight: {
      main: textLight,
    },
  },

  components: {
    MuiInputBase: {
      styleOverrides: {
        root: {
          borderRadius: "12px!important",
        },
      },
    },
    MuiToggleButtonGroup: {
      styleOverrides: {
        root: {
          display: "flex",
          flexDirection: "row",
        },
      },
    },
    MuiToggleButton: {
      styleOverrides: {
        root: {
          flex: 1,
          borderRadius: "12px",
          "&.Mui-selected": {
            backgroundColor: "#f6f3fc",
            fontWeight: "bold",
            color: "#8659d3",
            border: "1px solid #8659d3",
            "&:hover": {
              backgroundColor: "#d9d6e9",
            },
          },
        },
      },
    },
  },
});

export default theme;
