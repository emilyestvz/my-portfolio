import { createTheme, responsiveFontSizes } from "@mui/material";

let theme = createTheme({
    palette: {
      primary: {
        main: '#232323',
      },
      secondary: {
        main: '#6D5D6E',
      },
    },
    typography: {
        fontFamily: 'Garamond'
    }
});

// Fontes responsivas conforme cada devices
theme = responsiveFontSizes(theme);

export default theme;