import React from 'react';
import AuthState from '../context/auth/authState';
import AppState from '../context/app/appState';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { pink, blueGrey, blue } from '@mui/material/colors';

import './../styles/globals.css';


import '@fortawesome/fontawesome-free/css/all.css';

const theme = createTheme({
  palette: {
    primary: {
      main: pink[500],
    },
    secondary: {
      main: blueGrey[50],
    },
    pinkLight: {
      main: pink[400],

    },
    customc: {
      main: blue[700],
      
    }
  },
});


const MyApp = ({ Component, pageProps }) => {
    return (
      <ThemeProvider theme={theme}>

        <AuthState>
          <AppState>
            <Component {...pageProps} />   
          </AppState>
        </AuthState>
        </ThemeProvider>
    );
}
export default MyApp;