import React from 'react';
import AuthState from '../context/auth/authState';
import AppState from '../context/app/appState';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { green, pink } from '@mui/material/colors';

import './../styles/globals.css';


import '@fortawesome/fontawesome-free/css/all.css';

const theme = createTheme({
  palette: {
    primary: {
      main: pink[500],
    },
    secondary: {
      main: green[500],
    },
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