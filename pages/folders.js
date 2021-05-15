import React, { useContext, useState, useEffect } from "react";
import Layout from "../components/Layout/Layout";
import FoldersItemsContainer from '../components/Folders/FoldersItemsContainer';
import authContext from "../context/auth/authContext";

const Folders = () => {
    // Extraer el usuario autenticado del storage
    const AuthContext = useContext(authContext);
    const { user, auth, userAuthtenticate, logout } = AuthContext;

    const [authv, setAuth] = useState();
    useEffect(() => {
      userAuthtenticate();
      setAuth(user);

    }, []);
  


  return (
    <Layout>
      <div className="flex justify-center">
        <h2 className="font-bold text-2xl mb-4 text-gray-800 ">
        {/*  <i className="fas fa-folder  text-red-400 text-4xl mb-4 mr-2"></i> */}
          Mis Carpetas
        </h2>
        
      </div>

      <FoldersItemsContainer user={user} />

    </Layout>
  );
};

export default Folders;
