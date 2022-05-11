import React, { useState } from "react";
import Link from "next/link";
import MenuFiles from "./../common/ContextMenu/MenuFiles";

import useContextMenu from "../hooks/useContextMenuClick";

const FolderFileItem = ({ styles, file, showFileInfo, setShowFileInfo, setFileMetadataInfo }) => {
  const { fileName, downloadLimit, originalName, url, _id } = file.file;
  let name = originalName.split(".");

  const { onMouseUp } = useContextMenu();

  const [fileOptions, setFileOptions] = useState(false);
  const [showFileOptons, setShowFileOptions] = useState(false);
  const [fileId, setFileId] = useState();

  const showFileOptions = () => {
    setFileOptions(true);
    setFileId(file._id);
  };

  const leaveFile = () => {
    setFileOptions(false);
    onMouseUp();
    setFileId(null);
  };

  return (
    <>
          <article
      className="flex flex-col mr-4 mt-5 ml-2 "
     
    >
      <Link href={`/links/${url}`}>
        <a className=""  onMouseEnter={() => showFileOptions(true)}
      onMouseLeave={() => leaveFile()}>
          {originalName.includes(".jpg") ||
          originalName.includes(".jpeg") ||
          originalName.includes(".jfif") ||
          originalName.includes(".png") ? (
            <i className=" my-2 text-5xl fas fa-images text-red-500 ml-2 hover:text-red-600"></i>
          ) : null}
          {originalName.includes(".svg") ? (
            <i className="text-5xl  fas fa-bezier-curve  text-red-500 ml-2"></i>
          ) : null}
          {originalName.includes(".mp4") ||
          originalName.includes(".MP4") ||
          originalName.includes(".mov") ? (
            <i className="my-2 text-5xl  fas fa-photo-video text-red-500 ml-2 hover:text-red-600"></i>
          ) : null}
          {originalName.includes(".mp3") ||
          originalName.includes(".wav") ||
          originalName.includes(".mid") ||
          originalName.includes(".ac3") ? (
            <i className="mt-2 text-5xl  fas fa-music text-red-500 mr-1 mb-2 hover:text-red-600"></i>
          ) : null}
          {originalName.includes(".pdf") || originalName.includes(".PDF") ? (
            <i className="my-2 text-5xl  far fa-file-pdf text-red-500 ml-2 hover:text-red-600"></i>
          ) : null}
          {originalName.includes(".mobi") || originalName.includes(".MOBI") ? (
            <i className="my-2 text-5xl  fas fa-book text-red-500 ml-2 hover:text-red-600"></i>
          ) : null}
          {originalName.includes(".zip") || originalName.includes(".rar") ? (
            <i className="my-2 text-5xl   fas fa-file-archive  text-red-500 ml-2 hover:text-red-600"></i>
          ) : null}
          {originalName.includes(".txt") ? (
            <i className="my-2 text-5xl   fas fa-file-alt  text-red-500 ml-2 hover:text-red-600"></i>
          ) : null}
          {originalName.includes("torrent") ? (
            <i className="my-2 text-5xl   fas fa-file-download  text-red-500 ml-2 hover:text-red-600"></i>
          ) : null}
        </a>
      </Link>
      <Link href={`/links/${url}`}>
        <a className=""  onMouseEnter={() => showFileOptions(true)}
      onMouseLeave={() => leaveFile()}>
          <span className="hover:text-red-500">
            {" "}
            {originalName.split(".")[0].slice(0, 30)}{" "}
            {originalName.split(".").length > 2 &&
              originalName.split(".")[1].slice(0, 30)}
          </span>
          <span className="text-red-500">
            .{originalName.split(".")[originalName.split(".").length - 1]}
          </span>
        </a>
      </Link>
      {file._id === fileId ? <MenuFiles file={file} showFileInfo={showFileInfo} setShowFileInfo={setShowFileInfo} setFileMetadataInfo={setFileMetadataInfo} /> : null}

    </article>

    </>
  );
};

export default FolderFileItem;
