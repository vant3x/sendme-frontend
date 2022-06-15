import React, { useState, useContext } from "react";
import Head from "next/head";
import Link from "next/link";
import { useRouter } from 'next/router';
//mui
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Fab from "@mui/material/Fab";
import AddIcon from "@mui/icons-material/Add";
import Toolbar from '@mui/material/Toolbar';

//import Header from "./../Header";
import Header from "./../HeaderM";
import NewFolderModal from "../Folders/NewFolderModal";
import SideBarMenuComponent from "../SideBarMenu/SideBarMenuComponent";
import appContext from "../../context/app/appContext";
import authContext from "./../../context/auth/authContext";

const Layout = ({ children }) => {
  const AppContext = useContext(appContext);
  const AuthContext = useContext(authContext);
  const { user, auth } = AuthContext;
  const { setFolderModal, folderModal } = AppContext;
  const [open, setOpen] = useState(user ? true : false);
  const toggleDrawer = () => {
    setOpen(!open);
  };

  const router = useRouter();


  return (
    <>
      <Head>
        <title>SendMe - Comparte archivos facilmente</title>
        <link
          href="https://unpkg.com/tailwindcss@^1.0/dist/tailwind.min.css"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Lobster&family=Megrim&family=Permanent+Marker&family=Roboto:wght@100;300;400;700&display=swap"
          rel="stylesheet"
        />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"
        />

        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/assets/logo-icon/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/assets/logo-icon/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/assets/logo-icon/favicon-16x16.png"
        />
        <link rel="manifest" href="/assets/logo-icon/site.webmanifest" />

        <meta
          name="description"
          content="Comparte tus archivos de forma fácil, segura y privada, tambien puedes agregar una contraseña y un limite de descargas a tus enlaces"
        />
        <meta
          name="keywords"
          content="Sendme, Sendmefiles, www.sendmefiles.cloud, sendmefiles.cloud, sendme cloud, SendMe, send-me, send-files, Send-Me, Send Me, Send Files, Compartir archivos, nube privada, compartir archivos privados, archivos seguros, limite de descarga, archivos, archivos encriptados"
        />
        <meta name="viewport" content="initial-scale=1, width=device-width" />

        {/* OG for Facebook  */}
        <meta property="og:url" content="https://sendmefiles.cloud" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="SendMe" />
        <meta
          property="og:description"
          content="Comparte tus archivos de forma fácil, segura y privada, tambien puedes agregar una contraseña y un limite de descargas a tus enlaces"
        />
        <meta
          property="og:image"
          content="https://sendmefiles.cloud/assets/img/landing-playa-screen.png"
        />

        {/* -Twitter card */}
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content="@semdmefiles" />
        <meta name="twitter:creator" content="@salevant3X" />
        <meta
          name="twitter:title"
          content="SendMe - una plataforma para compartir archivos"
        />
        <meta
          name="twitter:description"
          content="Comparte tus archivos de forma fácil, segura y privada, tambien puedes agregar una contraseña y un limite de descargas a tus enlaces"
        />
        <meta
          name="twitter:image"
          content="https://sendmefiles.cloud/assets/img/landing-playa-screen.png"
        />
      </Head>
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        <Header open={open} toggleDrawer={toggleDrawer} />
       { user && <>
        <SideBarMenuComponent  open={open} toggleDrawer={toggleDrawer} />
       </>}<Box
          component="main"
          sx={{
            backgroundColor: (theme) =>
              theme.palette.mode === "light"
                ? theme.palette.grey[100]
                : theme.palette.grey[900],
            flexGrow: 1,
            marginTop: "36px",
            height: "100%",
            overflow: "visible",
          }}
        >
          <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }} disableGutters={true}>
            <Grid container spacing={3}>
              <div className="containers mx-auto">
                {/* --- original  <Header newFolder={showNewFolderModal} /> */}
                <div className="mt-20">{children}</div>
              </div>
            </Grid>
            {/*router.pathname !== "/" &&  user ? ( 
   <Stack
              direction="row"
              justifyContent="flex-end"
              alignItems="flex-end"
              spacing={2}
              sx={{mr:6}}
            >
              <Fab color="primary" aria-label="add">
                <AddIcon />
              </Fab>
            </Stack>) : null
            */}
            <Box sx={{ mb: 6, mt: 2 }}>
              <footer className="text-center mb-4 ">
                {/*  <a
                    href="https://twitter.com/alevant3X"
                    target="_blank"
                    className="text-red-500 hover:text-red-700"
                  >
                    {" "}
                    {/* &copy; 2022 by Alevante  	&#127464;&#127476;*/}
                <Typography
                  variant="p"
                  noWrap
                  component="span"
                  sx={{
                    fontWeight: 700,
                    color: "primary.main",
                    textDecoration: "none",
                    cursor: "pointer",
                    fontSize: "1rem",
                  }}
                >
                  &copy; 2022 by Alevante &#127464;&#127476;
                </Typography>
                {/* </a> */}

                <br />
                <Link href="/privacidad">
                  <a className="underline mt-2 text-gray-800 hover:text-red-500">
                    Políticas de Privacidad
                  </a>
                </Link>
              </footer>
            </Box>
            {folderModal && <NewFolderModal />}
          </Container>
        </Box>
      </Box>
    </>
  );
};

export default Layout;
