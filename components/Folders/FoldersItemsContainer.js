import React, { useState, useEffect } from "react";
import FolderItem from "./FolderItem";
import FolderFileItem from "../../components/Folders/FolderFileItem";
import styles from "./../../styles/Folders.module.css";
import axiosClient from "../../config/axios";
import MenuFolders from "../../components/common/ContextMenu/Menu";

const FoldersItemsContainer = ({
  showFolderDelete,
  showFolderRename,
  user,
  updateListFolders,
  files,
}) => {
  const [foldersByUser, setFolders] = useState([]);

  useEffect(() => {
    console.log(user);
    fetchFolders(user);
  }, [user, updateListFolders]);
  // todo revisar param usuario cambiar nombre y ver si es necesario
  const fetchFolders = async (usuario) => {
    try {
      const response = await axiosClient.get(
        `/api/folders/${usuario.id ? usuario.id : usuario._id}`
      );
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
            <span>
              <i className="fas fa-home"></i>
            </span>{" "}
            /
          </span>
        </div>
        {foldersByUser.length < 1 ? (
          <p className="text-center py-4">Aún no tienes carpetas creadas</p>
        ) : (
          <div className="folder-container flex flex-row justify-start flex-wrap items-start">
            {foldersByUser.map((folder, index) => (
              <FolderItem
                key={index}
                folder={folder}
                showFolderDelete={showFolderDelete}
                showFolderRename={showFolderRename}
                styles={styles}
              />
            ))}
            {files
              ? files.map((file, index) => (
                  <FolderFileItem file={file} key={index} />
                ))
              : null}
          </div>
        )}
      </div>
      {/* <MenuFolders />*/}
    </div>
  );
};

export default FoldersItemsContainer;
