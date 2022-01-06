import React, { useContext, useEffect } from 'react';
import authContext from '../../context/auth//authContext';
import appContext from '../../context/app/appContext';
import styles from '../../styles/Alert.module.css';

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
        <div role="alert">
        <div className="bg-red-500 text-white font-bold rounded-t px-4 py-2">
          La sesión expiró
        </div>
        <div className="border border-t-0 border-red-400 rounded-b bg-red-100 px-4 py-3 text-red-700">
          <p>Tu sesión expiró, debes volver a iniciar sesión.</p>
        </div>
      </div>
    );
}

export default AlertExpired;