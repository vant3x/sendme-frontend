import React, { useState } from "react";
import Link from "next/link";
import MenuFiles from "./../common/ContextMenu/MenuFiles";
import FileIconType from "../Files/FileIconType";

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
          <FileIconType originalName={originalName} textSize="text-5xl" />
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
