import React, { useState, useEffect } from "react";
import FolderItem from "./FolderItem";
import FolderFileItem from "../../components/Folders/FolderFileItem";
import styles from "./../../styles/Folders.module.css";
import MenuFolders from "../../components/common/ContextMenu/Menu";
import Toast from "../Toast/Toast";
import FileInfoMetadataSlide from "./../Files/FileInfoMetadataSlide";

import axiosClient from "../../config/axios";

const FoldersItemsContainer = ({
  showFolderDelete,
  showFolderRename,
  showInfoFolderDetailsModal,
  showInfoFolderPrivacyModal,
  user,
  updateListFolders,
  files,
}) => {
  const [foldersByUser, setFolders] = useState([]);
  const [copyLinkToast, setCopyLinkToast] = useState(false);
  const [folderZipDownloadToast, setFolderZipDownloadToast] = useState(false);
  const [showFileInfo, setShowFileInfo] = useState(false);
  const [fileInfo, setFileInfo] = useState({});

  useEffect(() => {
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
        <div className="folder-container flex flex-row justify-start flex-wrap items-start">
          {foldersByUser.length < 1 ? (
            <p className="text-center py-4 mr-4 mt-4">
              Aún no tienes carpetas creadas
            </p>
          ) : (
            <>
              {foldersByUser.map((folder, index) => (
                <FolderItem
                  key={index}
                  folder={folder}
                  showFolderDelete={showFolderDelete}
                  showFolderRename={showFolderRename}
                  showInfoFolderPrivacyModal={showInfoFolderPrivacyModal}
                  showInfoFolderDetailsModal={showInfoFolderDetailsModal}
                  styles={styles}
                  setCopyLinkToast={setCopyLinkToast}
                  setFolderZipDownloadToast={setFolderZipDownloadToast}
                />
              ))}
            </>
          )}
          {files
            ? files.map((file, index) => (
                <FolderFileItem
                  file={file}
                  setFileMetadataInfo={setFileInfo}
                  showFileInfo={showFileInfo}
                  setShowFileInfo={setShowFileInfo}
                  key={index}
                />
              ))
            : null}
        </div>
      </div>
      {/* <MenuFolders />*/}
      {copyLinkToast && (
        <div
          className={`mt-8 ml-4 ${
            !copyLinkToast
              ? "animate__animated animate__backOutRight"
              : "animate__delay-4s animate__animated animate__backOutLeft"
          }`}
        >
          <Toast
            theme="dark"
            text="Se copió el enlace"
            animationEffect="bounceIn"
            icon="fas fa-copy"
            closeBtn={setCopyLinkToast}
          />
        </div>
      )}

      {folderZipDownloadToast && (
        <div
          className={`mt-8 ml-4 ${
            !folderZipDownloadToast
              ? "animate__animated animate__backOutRight"
              : "animate__delay-4s animate__animated animate__backOutLeft"
          }`}
        >
          <Toast
            theme="dark"
            text={`Se comenzó la descarga de la carpeta como Zip`}
            animationEffect="bounceIn"
            icon="fas fa-cloud-download-alt"
            closeBtn={setFolderZipDownloadToast}
          />
        </div>
      )}
      <FileInfoMetadataSlide
        fileInfo={fileInfo}
        showFileInfo={showFileInfo}
        setShowFileInfo={setShowFileInfo}
      />
    </div>
  );
};

export default FoldersItemsContainer;
