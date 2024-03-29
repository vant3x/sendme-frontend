import React, { useContext, useState, useEffect } from "react";
import Layout from "../components/Layout/Layout";
import FoldersItemsContainer from "../components/Folders/FoldersItemsContainern";
import FolderFilesContainer from "../components/Folders/FolderFilesContainer";
import DeleteFolderModal from "../components/Folders/DeleteFolderModal";
import RenameFolderModal from "../components/Folders/RenameFolderModal";
import InfoFolderDetailsModal from "../components/Folders/InfoFolderDetailsModal";
import InfoPrivacyFolderModal from "../components/Folders/InfoPrivacyFolderModal";

import Stack from "@mui/material/Stack";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";

import authContext from "../context/auth/authContext";
import axiosClient from "../config/axios";
import router from "next/router";

const Folders = () => {
  // Extraer el usuario autenticado del storage
  const AuthContext = useContext(authContext);
  const { user, auth, userAuthtenticate, logout } = AuthContext;
  const [files, setFiles] = useState([]);
  const [deleteFolder, setDeleteFolder] = useState(false);
  const [updateFolders, setUpdateFolders] = useState(false);
  const [renameFolder, setRenameFolder] = useState(false);
  const [infoFolderDetails, setInfoFolderDetails] = useState(false);
  const [infoFolderPrivacy, setInfoFolderPrivacy] = useState(false);
  const [updateFolderInfo, setUpdateFolderInfo] = useState({});

  useEffect(() => {
    userAuthtenticate();
  }, []);

  useEffect(() => {
    if (user) {
      console.log(user);
      getRootFiles(user?.id || user?._id);
    }
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
      <Stack direction="row" justifyContent="center" alignItems="center">
        <h2 className="font-bold text-2xl mb-4 text-gray-800 ">
          {/*  <i className="fas fa-folder  text-red-400 text-4xl mb-4 mr-2"></i> */}
          Mis Carpetas
        </h2>
      </Stack>

      <FoldersItemsContainer
        user={user}
        files={files}
        showFolderDelete={setDeleteFolder}
        showFolderRename={setRenameFolder}
        showInfoFolderDetailsModal={setInfoFolderDetails}
        showInfoFolderPrivacyModal={setInfoFolderPrivacy}
        updateListFolders={updateFolders}
      />
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

      {infoFolderDetails && (
        <InfoFolderDetailsModal
          infoFolder={infoFolderDetails}
          showInfoFolderDetailsModal={setInfoFolderDetails}
        />
      )}

      {infoFolderPrivacy && (
        <InfoPrivacyFolderModal
          infoFolderPrivacy={infoFolderPrivacy}
          showInfoFolderPrivacyModal={setInfoFolderPrivacy}
          setUpdateListFolders={setUpdateFolders}
        />
      )}
    </Layout>
  );
};

export default Folders;
