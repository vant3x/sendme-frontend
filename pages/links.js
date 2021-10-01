import React, { useContext, useState, useEffect } from "react";
import Link from "next/link";
import Layout from "./../components/Layout/Layout";
import MyLinksContainer from "../components/Links/MyLinksContainer";
import authContext from "../context/auth/authContext";
import NewFolderModal from "../components/Folders/NewFolderModal";
import { useRouter } from 'next/router';

const MyLinks = () => {
  // Extraer el usuario autenticado del storage
  const AuthContext = useContext(authContext);
  const { user, userOauth, auth, userAuthtenticate, logout } = AuthContext;
  
  const [newFolder, setNewFolder] = useState(false);
  const [oauth, setOauth] = useState(false);

  const router = useRouter();

  useEffect(() => {
    userAuthtenticate();
    userOauth();
 
  }, []);



  const ShowNewFolderModal = (value) => {
      setNewFolder(!newFolder);
  }

  return (
    <Layout>
      <div className="flex justify-end">
        <Link href="/folders">
          <a
            href=""
            className="float-right btn bg-red-500 text-white  p-2 mr-2 rounded-lg"
          >
            Ver Carpetas{" "}
            <span>
              <i className="fas fa-folder"></i>
            </span>
          </a>
        </Link>
        <button
          onClick={()=> ShowNewFolderModal(true)}
          className="float-right btn bg-red-500 text-white  p-2 rounded-lg"
        >
          Nueva Carpeta{" "}
          <span>
            <i className="fas fa-folder-plus"></i>
          </span>
        </button>
      </div>
      <MyLinksContainer user={user} />
      {
        newFolder && <NewFolderModal/>
      }
    </Layout>
  );
};

export default MyLinks;
