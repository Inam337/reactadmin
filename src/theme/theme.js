// theme.js
import { createTheme } from "@mui/material/styles";
import { grey } from "@mui/material/colors";

const theme = createTheme({
  palette: {
    primary: {
      main: "#2196f3", // Customize primary color
    },
    secondary: {
      main: "#f50057", // Customize secondary color
    },
  },
  typography: {
    fontFamily: "Roboto", // Customize default font
  },
  customStyles: {
    customButton: {
      borderRadius: 8,
      padding: "12px 24px",
      fontSize: "1.2rem",
    },
    customCard: {
      backgroundColor: grey[100],
      boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
      padding: 16,
      borderRadius: 12,
    },
  },
});

export default theme;
