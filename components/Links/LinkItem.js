import React, { useState, useEffect, useContext } from "react";
import Link from "next/link";
import styles from "../../styles/LinkItem.module.css";
import LinkDropDown from "./Dropdowns/LinkDropDown";
import FileIconType from "../Files/FileIconType";

const LinkItem = ({ link, showLinkDropDown, setShowLinkDropdown, showDropDown, setShowDropDown }) => {

  const date = new Date(link.created_at);
  const options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };

  const dateFormat = date.toLocaleDateString("es-CO", options);
 

  


  const showLinkOptions = id => {
    setShowLinkDropdown(!showLinkDropDown);

    setShowDropDown(id);
    console.log(showDropDown);
    console.log(link)

  }
    

  return (
    <>

      <tr className="animate__animated animate__fadeIn">
        <td className="  px-6 py-4 whitespace-nowrap">
          <div className="flex items-center">
            <div className="flex-shrink-0 h-10 w-10">
              <span className="text-red-500">
                {" "}
                <i className="fas fa-link"></i>
              </span>
            </div>
            <div className="ml-4">
              <div className="text-sm font-medium text-gray-900">
                <FileIconType originalName={ link.originalName } textSize="text-xsl" />
              </div>
              <Link href={`/links/${link.url}`}>
                <a className="text-sm text-red-500 underline hover:text-blue-500">
                  {" "}
                  Ir al link
                </a>
              </Link>
            </div>
          </div>
        </td>
        <td className="px-6 py-4 whitespace-nowrap sm:visible invisible">
          <div className="text-sm text-gray-900">
            {/* Contraseña: <span> { link.password ? 'Sí' : 'No' }</span> */}
          </div>
          <div className="text-sm text-gray-500">
            {date.toLocaleDateString()}
          </div>
        </td>
        <td className="px-6 py-4 whitespace-nowrap text-left text-sm font-medium sm:visible invisible">
          {link.fileSize}
        </td>
        <td className="px-6 py-4 whitespace-nowrap sm:visible invisible">
          <span className="px-4 py-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
            {link.downloadLimit}
          </span>
        </td>

        <td className="z-0 px-6 py-4 whitespace-nowrap text-right text-sm font-medium sm:visible invisible">
          <a href="#" className="text-blue-400 hover:text-blue-500">
            Editar
          </a>
        </td>
        
        <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium sm:visible invisible">
          <a
            onClick={() =>  {showLinkOptions(link._id)} }
           
            className=" text-2xl px-2 outline-0	 font-bold text-gray-500 hover:text-gray-600"
            id="menu-options" aria-expanded="true" aria-haspopup="true"
          >
            ...

          </a>
          <div className="absolute">

          {showDropDown === link._id    ? (
                <LinkDropDown
                  showLinkDropDown={showLinkDropDown}
                  setShowLinkDropdown={setShowLinkDropdown}
                />
              ) : null} 
              </div>
        </td>
     
      </tr>


    </>
  );
};

export default LinkItem;