import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { Menu, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/solid";
//import FolderOptionsMenu from './FolderOptionsMenu';
import MenuFolders from "./../common/ContextMenu/Menu";
import useContextMenu from "../hooks/useContextMenuClick";

const FolderItem = ({ styles, folder, showFolderDelete, showFolderRename, showInfoFolderDetailsModal, showInfoFolderPrivacyModal }) => {
  const { onMouseUp } = useContextMenu();

  const [folderOptions, setFolderOptions] = useState(false);
  const [showFolderOptons, setShowFolderOptions] = useState(false);
  const [folderId, setFolderId] = useState();

  const showFolderOptions = () => {
    setFolderOptions(true);
    setFolderId(folder._id);
  };

  const leaveFolder = () => {
    setFolderOptions(false);
    onMouseUp();
    setFolderId(null);
  };

  return (
    <article
      className="flex flex-col  hover:text-red-500 mb-4 mt-2 mr-2"
      onMouseEnter={() => showFolderOptions(true)}
      onMouseLeave={() => leaveFolder()}
    >
      <Link href={`/folders/${folder._id}`}>
        <a>
          <i
            className={`${styles.text10xl} fas fa-folder cursor-pointer text-red-400  hover:text-red-500   mx-4`}
          ></i>
        </a>
      </Link>
      <div>
        <p className="ml-4 cursor-pointer  hover:text-red-500 hover">
          <Link href={`/folders/${folder._id}`}>
            <a>{folder.folderName}</a>
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
          showFolderDelete={showFolderDelete}
          showFolderRename={showFolderRename}
          showInfoFolderDetailsModal={showInfoFolderDetailsModal}
          showInfoFolderPrivacyModal={showInfoFolderPrivacyModal}
        />
      ) : null}
    </article>
  );
};

export default FolderItem;
