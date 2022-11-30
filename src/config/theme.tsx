import { createTheme } from "@mui/material/styles";
import { red } from "@mui/material/colors";
// Create a theme instance.
const theme = createTheme({
  palette: {
    primary: {
      main: "#6200ea",
    },
    secondary: {
      main: "#19857b",
    },
    error: {
      main: red.A400,
    },
  },
  typography: {
    // subtitle1: {
    //   fontSize: 12,
    //   textTransform: "capitalize",
    // },
    // button: {
    //   fontSize: 15,
    //   fontWeight: 400,
    //   color: "#F3F3F3",
    // },
    // body1: {
    //   fontSize: 18,
    //   fontWeight: 400,
    // },

    // h6: {
    //   fontSize: 6,
    //   fontWeight: 500,
    // },
    // h5: {
    //   fontSize: 8,
    //   fontWeight: 400,
    // },
    // h4: {
    //   fontSize: 10,
    //   fontWeight: 400,
    // },
    // h3: {
    //   fontSize: 16,
    //   fontWeight: 400,
    // },
    // h2: {
    //   fontSize: 20,
    //   opacity: 1,
    //   fontWeight: 600,
    // },

    h1: {
      fontSize: 18,
      color: "#FFFFFF",
      opacity: 1,
      fontWeight: 500,
    },

    fontFamily: [
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(","),
  },
});
export default theme;
