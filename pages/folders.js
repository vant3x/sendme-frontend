import React, { useContext, useState, useEffect } from "react";
import Layout from "../components/Layout/Layout";
import FoldersItemsContainer from "../components/Folders/FoldersItemsContainer";
import FolderFilesContainer from "../components/Folders/FolderFilesContainer";
import authContext from "../context/auth/authContext";
import axiosClient from "../config/axios";

const Folders = () => {
  // Extraer el usuario autenticado del storage
  const AuthContext = useContext(authContext);
  const { user, auth, userAuthtenticate, logout } = AuthContext;
  const [files, setFiles] = useState([]);

  useEffect(() => {
    userAuthtenticate();
  }, []);

  useEffect(() => {
    getRootFiles(user?.id);
  }, [user]);

  /*| useEffect(() => {
      getRootFiles(user?.id);
    }, [user]);*/

  const getRootFiles = async (id) => {
    const filesRoot = await axiosClient.get(`/api/folder/root/${user?.id}`);
    console.log(filesRoot.data.folder);

    const filesRootFormated = filesRoot.data.folder.map((file) => {
      let fileRoot = {};
      fileRoot["file"] = file;
      return fileRoot;
    });
    console.log(filesRootFormated);
    setFiles(filesRootFormated);
  };

  return (
    <Layout>
      <div className="flex justify-center">
        <h2 className="font-bold text-2xl mb-4 text-gray-800 ">
          {/*  <i className="fas fa-folder  text-red-400 text-4xl mb-4 mr-2"></i> */}
          Mis Carpetas
        </h2>
      </div>
          <FoldersItemsContainer user={user} files={files} />
         {/* <FolderFilesContainer files={files} /> */}
    
    </Layout>
  );
};

export default Folders;
