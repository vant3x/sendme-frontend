import React, { useState } from "react";
import Link from "next/link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import MenuFiles from "./../common/ContextMenu/MenuFiles";
import FileIconType from "../Files/FileIconType";

const FolderFileItem = ({
  styles,
  file,
  showFileInfo,
  setShowFileInfo,
  setFileMetadataInfo,
}) => {
  const { fileName, downloadLimit, originalName, url, _id } = file.file;
  let name = originalName.split(".");

  /*const { onMouseUp } = useContextMenu();

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
  };*/

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
    <>
      {/* <article className="flex flex-col mr-4 mt-5 ml-2 ">*/}
      <Box
        component="article"
        sx={{ flexDirection: "column", mt:1 }}
        onContextMenu={handleContextMenu}
        style={{ cursor: "context-menu" }}
      >
        <Link href={`/links/${url}`}>

          <a href="">
            <FileIconType originalName={originalName} textSize="text-5xl" />
          </a>
        </Link>
        <Link href={`/links/${url}`}>
          <a className="">
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
        {/*file._id === fileId ? (
          <MenuFiles
            file={file}
            showFileInfo={showFileInfo}
            setShowFileInfo={setShowFileInfo}
            setFileMetadataInfo={setFileMetadataInfo}
          />
        ) : null*/}

        <MenuFiles
          handleClose={handleClose}
          contextMenu={contextMenu}
          file={file.file}
          showFileInfo={showFileInfo}
          setShowFileInfo={setShowFileInfo}
          setFileMetadataInfo={setFileMetadataInfo}
        />
      </Box>
      {/* </article> */}
    </>
  );
};

export default FolderFileItem;
