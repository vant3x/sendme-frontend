import React, { useState, useEffect, useContext } from "react";
import axiosClient from "../../config/axios";
import authContext from "./../../context/auth/authContext";
import Layout from "../../components/Layout/Layout";
import Link from "next/link";
import FolderItem from "../../components/Folders/FolderItem";
import FolderFilesContainer from "../../components/Folders/FolderFilesContainer";
//import FilesInfoSidebar from "../../components/FilesInfoSidebar/FilesInfoSidebar";
import FolderPageOptions from "./../../components/Folders/FolderPageOptions";
import DeleteFolderModal from "../../components/Folders/DeleteFolderModal";
import RenameFolderModal from "../../components/Folders/RenameFolderModal";
import Router from 'next/router'
import { useRouter } from 'next/router'

export async function getServerSideProps({ params }) {
  const { folder } = params;
  const response = await axiosClient.get(`/api/folder/${folder}`);

  return {
    props: {
      folder: response.data,
    },
  };
}

const folder = ({ folder }) => {
  // definir el context
  const AuthContext = useContext(authContext);
  const { message, auth, user,  userOauth, login, errorSession } = AuthContext;
  const [deleteFolder, setDeleteFolder] = useState(false);
  const [renameFolder, setRenameFolder] = useState(false);
  const [updateFolders, setUpdateFolders] = useState(false);
  

  const router = useRouter()

  const folderById = folder.folder;
    console.log({user: user})
    console.log({folder: folder})
    console.log({folderAuthor: folder.author !== user?.id})
    console.log({folderAuthor: folderById.author})
    console.log({folderAuthor: user?.id})
    useEffect(() => {
      if (!user) {
          // Make sure we're in the browser
          if (typeof window !== 'undefined') {
            console.log(user)
            console.log(user)
            if (!user && folderById.privacy < 2) {

            router.push('/login')
    
          }
          
        }
      }
    } , [user])

  return (
    <Layout>
      <div className="py-12 bg-white mb-8 rounded-lg md:shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ">
          <div>
            {user && (
              <>
                {" "}
                <Link href="/folders">
                  <a className="text-red-400 font-bold">
                    {" "}
                    <i className="fas fa-arrow-left"></i> Volver
                  </a>
                </Link>
                <span className="ml-4"> |</span>{" "}
              </>
            )}
            <span className="text-gray-800 ml-4">
              {user && (
                <>
                  <span>
                    <i className="fas fa-home"></i>
                  </span>
                  /
                </>
              )}{" "}
              {!user && <i className="fas fa-folder text-red-500"></i>}{" "}
              {folderById.folderName}
            </span>

            {user && (
              <FolderPageOptions
                folder={folderById}
                showFolderDelete={setDeleteFolder}
                showFolderRename={setRenameFolder}
                deleteFolder={deleteFolder}
                renameFolder={renameFolder}
              />
            )}
          </div>

          <FolderFilesContainer files={folderById.files} />
          {/*  ---- arreglame <FilesInfoSidebar/>  */}
        </div>
      </div>
      {deleteFolder && (
        <DeleteFolderModal
          deleteFolder={deleteFolder}
          updateListFolders={setUpdateFolders}
          showFolderDelete={setDeleteFolder}
        />
      )}

      {renameFolder && (
        <RenameFolderModal
          renameFolder={renameFolder}
          updateListFolders={setUpdateFolders}
          showFolderRename={setRenameFolder}
        />
      )}
    </Layout>
  );
};

export default folder;