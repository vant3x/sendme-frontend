import React, { useState, useContext } from "react";
import Link from "next/link";
//import appContext from "./../../context/app/appContext";

const LinkDropdown = ({showLinkDropDown, setShowLinkDropdown}) => {
 // const AppContext = useContext(appContext);
  console.log(showLinkDropDown)
  return (
<>        


      {showLinkDropDown && (
        <div className="absolute z-30">
        <div
          className="animate__animated animate__fadeIn animate__faster origin-top-left relative z-50 right-0 mt-2 w-56   rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 divide-y divide-gray-100"
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="options-menu"
          tabIndex={-1}
        >
          <div className="py-1">
    
              <Link href="/links">
              <a
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                role="menuitem"
              >
                <i className="fas fa-link"></i> Ver mis enlaces
              </a>
            </Link>
            <Link href="/folders">
              <a
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                role="menuitem"
              >
                <i className="fas fa-folder"></i> Ver Carpetas
              </a>
            </Link>

            <button
              className="block px-4 py-2 text-sm   text-gray-700 hover:bg-gray-100 hover:text-gray-900"
              role="menuitem"
            >
              <i className="fas fa-folder-plus"></i> Nueva Carpeta
            </button>
          </div>
  
        </div>
        </div>
      )}
      </>
  );
};

export default LinkDropdown;
