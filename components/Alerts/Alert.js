import React, { useContext } from 'react';
import authContext from '../../context/auth//authContext';
import appContext from '../../context/app/appContext';
import styles from '../../styles/Alert.module.css';

const Alert = () => {
  // extraer mensaje de error para usuarios
    const AuthContext = useContext(authContext);
    const { message } = AuthContext;

  // extraer el mensaje de error del archivo
  const AppContext = useContext(appContext);
  const { fileMessage } = AppContext;
  
    return (
        <div className={`${styles.alertContainer} bg-red-500 py-2 px-3 w-full my-3 max-w-lg text-center text-white mx-auto animate__animated animate__bounceIn`}>
            {message  || fileMessage }
        </div>
    );
}

export default Alert;