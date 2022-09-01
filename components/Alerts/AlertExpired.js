import React, { useContext, useEffect } from 'react';
import authContext from '../../context/auth//authContext';
import appContext from '../../context/app/appContext';
import styles from '../../styles/Alert.module.css';
import Alert from "@mui/material/Alert";
import Stack from "@mui/material/Stack";

const AlertExpired = ({statusCode}) => {
  // extraer mensaje de error para usuarios
    const AuthContext = useContext(authContext);
    const { message } = AuthContext;

  // extraer el mensaje de error del archivo
  const AppContext = useContext(appContext);
  const { fileMessage } = AppContext;

  useEffect(() => {
      if (statusCode && statusCode === 401) {
        localStorage.removeItem('token');
      }
   }, []);
  
    return (
      <Stack sx={{ width: "100%" }} spacing={2}>
      <Alert severity="error">
        {" "}
        <h5> La sesión expiró</h5>
        Tu sesión expiró, debes volver a iniciar sesión.
      </Alert>
    </Stack>
    );
}

export default AlertExpired;