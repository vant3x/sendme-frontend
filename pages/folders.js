import React, { useContext, useState, useEffect } from "react";
import Layout from "../components/Layout/Layout";
import FoldersItemsContainer from "../components/Folders/FoldersItemsContainer";
import FolderFilesContainer from "../components/Folders/FolderFilesContainer";
import DeleteFolderModal from "../components/Folders/DeleteFolderModal";
import RenameFolderModal from "../components/Folders/RenameFolderModal";

import authContext from "../context/auth/authContext";
import axiosClient from "../config/axios";

const Folders = () => {
  // Extraer el usuario autenticado del storage
  const AuthContext = useContext(authContext);
  const { user, auth, userAuthtenticate, logout } = AuthContext;
  const [files, setFiles] = useState([]);
  const [deleteFolder, setDeleteFolder] = useState(false);
  const [updateFolders, setUpdateFolders] = useState(false);
  const [renameFolder, setRenameFolder] = useState(false);

  useEffect(() => {
    userAuthtenticate();
  }, []);

  useEffect(() => {
    getRootFiles(user?.id || user?._id);
  }, [user]);

  /*| useEffect(() => {
      getRootFiles(user?.id);
    }, [user]);*/

  const getRootFiles = async (id) => {
    const filesRoot = await axiosClient.get(
      `/api/folder/root/${user?.id || user?._id}`
    );

    const filesRootFormated = filesRoot.data.folder.map((file) => {
      let fileRoot = {};
      fileRoot["file"] = file;
      return fileRoot;
    });
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

      <FoldersItemsContainer
        user={user}
        files={files}
        showFolderDelete={setDeleteFolder}
        showFolderRename={setRenameFolder}
        updateListFolders={updateFolders}
      />
      {/* <FolderFilesContainer files={files} /> */}
      {deleteFolder && (
        <DeleteFolderModal
          deleteFolder={deleteFolder}
          updateListFolders={setUpdateFolders}
          showFolderDelete={setDeleteFolder}
        />
      )}

      {renameFolder && (
        <RenameFolderModal
          renameFolder={renameFolder}
          updateListFolders={setUpdateFolders}
          showFolderRename={setRenameFolder}
        />
      )}
    </Layout>
  );
};

export default Folders;
