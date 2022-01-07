import React, { useContext, useEffect } from "react";
import Layout from "./../components/Layout/Layout";
import Alert from "./../components/Alerts/Alert";
import Dropzone from "./../components/Dropzone/Dropzone";
import Feature from "./../components/Feature";
import authContext from "../context/auth/authContext";
import appContext from "../context/app/appContext";
import Link from "next/link";
import QRCode from 'qrcode.react';
import { useRouter  } from 'next/router';

const ScanQR = () => {
  // Extraer el usuario autenticado del storage
  const AuthContext = useContext(authContext);
  const { userAuthtenticate, userOauth,  user } = AuthContext;

  // extraer el mensaje de error del archivo
  const AppContext = useContext(appContext);
  const { fileMessage, url } = AppContext;

  const router = useRouter();
  useEffect(() => {
    userOauth();

    const token = localStorage.getItem("token");
    if (token) {
      userAuthtenticate();

    }
  }, []);
  
  


  return (  
    <Layout>
              <div className="flex justify-center">
          <div className=" text-center bg-white rounded shadow-md px-8 pt-6 pb-8 mb-4 max-w-md mb-10">
        <h1 className="mb-4 ">Aquí está tu QR</h1>
        <QRCode
          id='1'
          value={ process.env.frontendUrl+'/links/'+router.query.link}
          size={240}
          className='mb-2'
        />
        <button className=" btn btn text-center bg-red-500 text-white mt-4 py-2 px-4 mr-2"><i className="fas fa-share-alt"></i> Compartir </button>
        <button className="btn btn text-center bg-red-500 text-white mt-4 py-2 px-4">Descargar</button>
        </div>
        </div>
      </Layout>
  );
};
export default ScanQR;
