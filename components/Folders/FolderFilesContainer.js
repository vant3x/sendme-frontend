import React from "react";
import Link from "next/link";
import FolderFileItem from "../../components/Folders/FolderFileItem";

const FolderFilesContainer = ({ styles, files }) => {
    
    return (
      <div className="folder-container flex flex-row justify-start flex-wrap items-start mt-8">
      {
        files.map((file, index) => (
          <FolderFileItem  file={file} key={index} />
        )) 
      }
      </div>
  );
};

export default FolderFilesContainer;
