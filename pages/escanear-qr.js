import React, { useContext, useEffect } from "react";
import Layout from "./../components/Layout/Layout";
import Alert from "./../components/Alerts/Alert";
import Dropzone from "./../components/Dropzone/Dropzone";
import Feature from "./../components/Feature";
import authContext from "../context/auth/authContext";
import appContext from "../context/app/appContext";
import Link from "next/link";
import QRCode from 'qrcode.react';

const ScanQR = () => {
  // Extraer el usuario autenticado del storage
  const AuthContext = useContext(authContext);
  const { userAuthtenticate, userOauth,  user } = AuthContext;

  // extraer el mensaje de error del archivo
  const AppContext = useContext(appContext);
  const { fileMessage, url } = AppContext;

  useEffect(() => {
    userOauth();

    const token = localStorage.getItem("token");
    if (token) {
      userAuthtenticate();

    }
   console.log(user);
  }, []);

  return (
    <Layout>
              <div className="flex justify-center">
          <div className=" bg-white rounded shadow-md px-8 pt-6 pb-8 mb-4 max-w-md mb-10">
        <h1>Aquí está tu QR</h1>
        <QRCode
          id='1'
          value="hola"
        />
        </div>
        </div>
      </Layout>
  );
};
export default ScanQR;
