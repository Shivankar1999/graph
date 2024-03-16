import "../styles/globals.css";

import "@fontsource/ibm-plex-sans"; // Defaults to weight 400
import "@fontsource/ibm-plex-sans/400.css"; // Specify weight
import "@fontsource/ibm-plex-sans/400-italic.css"; // Specify weight and style

import {
  createTheme,
  ThemeProvider,
  responsiveFontSizes,
} from "@mui/material/styles";





let theme = createTheme({


  typography: {
    fontFamily: "ibm-plex-sans",
    Heading5: {
    fontSize:" 25px",
    fontWeight: "400",
    lineHeight: "72px",
    letterSpacing: "0em",
    textAlign:" left",

    },
    peraG: {
    fontSize:" 16px",
    display: "block",
    fontWeight: "400",
   
    textAlign:" left",

    },
   
  },
});

let theme1 = responsiveFontSizes(theme);

theme1.typography.heading = {
  fontSize: "23px",
  fontWeight: "600",
  fontFamily: "inter",
  [theme.breakpoints.down("lg")]: {
    fontSize: "18px",
    fontWeight: "500",
  },


};



function MyApp({ Component, pageProps }) {
 
  return (
   
      <ThemeProvider theme={theme1}>
        <Component {...pageProps} />
       
      </ThemeProvider>
 
  );
}

export default MyApp;
