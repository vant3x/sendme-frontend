import React, { useState, useEffect } from "react";
import FolderItem from "./FolderItem";
import styles from "./../../styles/Folders.module.css";
import axiosClient from "../../config/axios";

const FoldersItemsContainer = ({ user }) => {
  const [foldersByUser, setFolders] = useState([]);

  useEffect(() => {
    fetchFolders(user);
  }, [user]);
  // todo revisar param usuario cambiar nombre y ver si es necesario
  const fetchFolders = async (usuario) => {
    try {
      const response = await axiosClient.get(`/api/folders/${usuario.id}`);
      setFolders(response.data.folders);
    } catch (error) {
      // console.error(error);
    }
  };

  return (
    <div className="py-12 bg-white mb-8 rounded-lg md:shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ">
        <div>
            <span className="text-gray-800 ml-4">
            <span><i className="fas fa-home"></i></span>  / 
            </span>
   
        </div>
        {foldersByUser.length < 1 ? (
          <p className="text-center py-4">Aún no tienes carpetas creadas</p>
        ) : (
          <div className="folder-container flex flex-row justify-start flex-wrap items-start">
            {foldersByUser.map((folder, index) => (
              <FolderItem key={index} folder={folder} styles={styles} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default FoldersItemsContainer;
