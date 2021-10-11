import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, Transition } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/solid'
//import FolderOptionsMenu from './FolderOptionsMenu';
import MenuFolders from './../common/ContextMenu/Menu';

const FolderItem = ({ styles, folder }) => {

  const [folderOptions, setFolderOptions] = useState(false);
  const [showFolderOptons, setShowFolderOptions] = useState(false);

  const showFolderOptions = () => {
    setFolderOptions(true);
    console.log('funciona')
  }


  return (
    <article className="flex flex-col  hover:text-red-500 mb-4 mt-2 mr-2" 
      onMouseEnter={()=> showFolderOptions(true)} 
      onMouseLeave={()=> setFolderOptions(false)} 
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
        <a>
        {folder.folderName}
        </a>
      </Link>
      {
       /* folderOptions ? (
          <FolderOptionsMenu folder={folder} setShowOptionFolder={setShowFolderOptions} />
        ) : null */ 
        // arreglame putito
      }
      </p>
      </div>
      <MenuFolders/>
    </article>

  );
};

export default FolderItem;
