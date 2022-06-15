import React, { useContext, useState, useEffect } from "react";
import Link from "next/link";
import Layout from "./../components/Layout/Layout";
import MyLinksContainer from "../components/Links/MyLinksContainer";
import authContext from "../context/auth/authContext";
import appContext from "../context/app/appContext";
import NewFolderModal from "../components/Folders/NewFolderModal";
import { useRouter } from "next/router";
import Button from "@mui/material/Button";
import AddIcon from "@mui/icons-material/Add";
import FolderIcon from '@mui/icons-material/Folder';
import CreateNewFolderIcon from '@mui/icons-material/CreateNewFolder';
import Box from '@mui/material/Box';


const MyLinks = () => {
  // Extraer el usuario autenticado del storage
  const AuthContext = useContext(authContext);
  const { user, userOauth, auth, userAuthtenticate, logout } = AuthContext;

  const AppContext = useContext(appContext);
  const { setFolderModal, folderModal } = AppContext;

  const [oauth, setOauth] = useState(false);

  const router = useRouter();

  useEffect(() => {
    userAuthtenticate();
    userOauth();
  }, []);

  useEffect(() => {
    if (!user && !localStorage.getItem("token")) {
      console.log({user: user});
      router.push("/login");
    }
  }, [user]);
  

  return (
    <Layout>
      <Box sx={{ mb: 2}}>
      <div className="flex justify-end">
        <Link href="/folders">
          <Button variant="contained" color="primary" endIcon={<FolderIcon />} sx={{mr:2}}>
            Ver Carpetas
          </Button>
        </Link>
        <Button
          variant="contained"
          color="primary"
          endIcon={<CreateNewFolderIcon />}
          onClick={() => setFolderModal(true)}
        >
          Nueva Carpeta{" "}
   
        </Button>
      </div>
      </Box>
      <MyLinksContainer user={user} />
      {folderModal && <NewFolderModal />}
    </Layout>
  );
};

export default MyLinks;
