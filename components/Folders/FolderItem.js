import React from "react";
import Link from "next/link";

const FolderItem = ({ styles, folder }) => {
  return (
    <article className="flex flex-col ">
      <Link href={`/folders/${folder._id}`}>
        <a>
          <i
            className={`${styles.text10xl} fas fa-folder cursor-pointer text-red-400  hover:text-red-500   mx-4`}
          ></i>
        </a>
      </Link>
      <Link href={`/folders/${folder._id}`}>
        <a>
          <p className="ml-4 cursor-pointer">{folder.folderName}</p>
        </a>
      </Link>
    </article>
  );
};

export default FolderItem;
