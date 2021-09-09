import React, { useState, useContext } from "react";
import Layout from "../../components/Layout/Layout";
import axiosClient from "../../config/axios";
import authContext from "./../../context/auth/authContext";
import Link from "next/link";
import FolderItem from "../../components/Folders/FolderItem";
import FolderFilesContainer from "../../components/Folders/FolderFilesContainer";
//import FilesInfoSidebar from "../../components/FilesInfoSidebar/FilesInfoSidebar";

export async function getServerSideProps({ params }) {
  const { folder } = params;
  const response = await axiosClient.get(`/api/folder/${folder}`);
  return {
    props: {
      folder: response.data,
    },
  };
}

export default ({ folder }) => {
  const folderById = folder.folder;
  //console.log(folderById);
  return (
    <Layout>
      <div className="py-12 bg-white mb-8 rounded-lg md:shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ">
          <div>
            <Link href="/folders">
              <a className="text-red-400 font-bold">
                {" "}
                <i className="fas fa-arrow-left"></i> Volver
              </a>
            </Link>
            <span className="ml-4"> |</span>
            <span className="text-gray-800 ml-4">
              <span>
                <i className="fas fa-home"></i>
              </span>{" "}
              / {folderById.folderName}
            </span>

            <div className="md:float-right sm:text-center">
              <button className="ml-4 btn bg-gray-400 px-2 py-1 rounded">
                <i className="fas fa-pen mr-2"></i>
                Editar Carpeta
              </button>
              <button className="ml-4 btn bg-red-400 text-white px-2 py-1 rounded">
                <i className="fas fa-trash  mr-2 "></i>
                Eliminar Carpeta
              </button>
            </div>
          </div>

          <FolderFilesContainer files={folderById.files} />
          {/*  ---- arreglame putita  <FilesInfoSidebar/>  */}
        </div>
      </div>
    </Layout>
  );
};
