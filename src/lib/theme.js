import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  typography: {
    fontFamily: "Gotham-Light",
  },
  palette: {
    type: "dark",
    primary: {
      main: "#1976d2",
    },
    secondary: {
      main: "#888888",
    },
    background: {
      main: "#e7f3f",
    },
  },
});
