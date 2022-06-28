import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { Menu, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/solid";
//import FolderOptionsMenu from './FolderOptionsMenu';
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import MenuFolders from "./../common/ContextMenu/Menu";
import useContextMenu from "../hooks/useContextMenuClick";
import Typography from '@mui/material/Typography';

const FolderItem = ({ styles, folder, showFolderDelete, showFolderRename, showInfoFolderDetailsModal, showInfoFolderPrivacyModal, setCopyLinkToast, setFolderZipDownloadToast}) => {
  const { onMouseUp } = useContextMenu();

  const [folderOptions, setFolderOptions] = useState(false);
  const [showFolderOptons, setShowFolderOptions] = useState(false);
  const [folderId, setFolderId] = useState();
  const [folderHover, setFolderHover] = useState(false);

  const showFolderOptions = () => {
    setFolderOptions(true);
    setFolderId(folder._id);
  };

  const leaveFolder = () => {
    setFolderOptions(false);
    onMouseUp();
    setFolderId(null);
  };

  const [contextMenu, setContextMenu] = useState(null);

  const handleContextMenu = (event) => {
    event.preventDefault();
    setContextMenu(
      contextMenu === null
        ? {
            mouseX: event.clientX + 2,
            mouseY: event.clientY - 6,
          }
        : null
    );
  };

  const handleClose = () => {
    setContextMenu(null);
  };

  return (
    <Box component="article"  sx={{ flexDirection: 'column' }}       onMouseEnter={() => showFolderOptions(true)}
      onContextMenu={handleContextMenu}
    >

    {/*<article
      className="flex flex-col  hover:text-red-500 mb-4 mt-2 mr-2"

  >*/}
      <Link href={`/folders/${folder._id}`} >
        <a onMouseEnter={()=>setFolderHover(true)} onMouseLeave={()=>setFolderHover(false)}>
          <i
            className={`${styles.text10xl} fas fa-folder cursor-pointer text-red-400  hover:text-red-500   mx-4`}
          ></i>
        </a>
      </Link>
      <div>
        <p className="ml-4 cursor-pointer  hover:text-red-500 hover">
          <Link href={`/folders/${folder._id}`}>
            <Typography sx={{ color: folderHover ? "primary.main" : "",  "&:hover": {color:'primary.main' }}} component="a" variant="a">{folder.folderName}</Typography>
          </Link>
          {
            /* folderOptions ? (
          <FolderOptionsMenu folder={folder} setShowOptionFolder={setShowFolderOptions} />
        ) : null */
            // arreglame putito
          }
        </p>
      </div>
      {folder._id === folderId ? (
        <MenuFolders
          folder={folder}
          handleClose={handleClose}
          contextMenu={contextMenu}
          showFolderDelete={showFolderDelete}
          showFolderRename={showFolderRename}
          showInfoFolderDetailsModal={showInfoFolderDetailsModal}
          showInfoFolderPrivacyModal={showInfoFolderPrivacyModal}
          setCopyLinkToast={setCopyLinkToast}
          setFolderZipDownloadToast={setFolderZipDownloadToast}
        />
      ) : null}
   {/* </article>*/}
    </Box>  
  );
};

export default FolderItem;
