import React, { useState, useContext } from "react";
import Layout from "../../components/Layout/Layout";
import axiosClient from "../../config/axios";
import appContext from "./../../context/app/appContext";
import authContext from "./../../context/auth/authContext";
import Alert from "./../../components/Alerts/Alert";
import { NotFoundError } from "next/error";
import { Link as NextLink } from "next/link";
import { useRouter } from "next/router";
import Head from "next/head";
import FileIconType from "./../../components/Files/FileIconType";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import QrCodeIcon from "@mui/icons-material/QrCode";
import CloudDownloadIcon from "@mui/icons-material/CloudDownload";
import Link from "@mui/material/Link";
import { bgcolor } from "@mui/system";
import LockIcon from "@mui/icons-material/Lock";
import LockOpenIcon from "@mui/icons-material/LockOpen";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";

export async function getServerSideProps({ params }) {
  const { link } = params;
  const response = await axiosClient.get(`/api/link/${link}`);
  return {
    props: {
      link: response.data,
    },
  };
}

export async function getServerSidePaths() {
  const links = await axiosClient.get("/api/links");
  return {
    paths: links.data.links.map((link) => ({
      params: { link: link.url },
    })),
    fallback: false,
  };
}

const link = ({ link, linkInfo }) => {
  // definir el context auth
  const AuthContext = useContext(authContext);
  const { user, auth } = AuthContext;
  const router = useRouter();
  // context de la app
  const AppContext = useContext(appContext);
  const { showAlert, fileMessage } = AppContext;

  const [hasPassword, setHasPassword] = useState(link.password);
  const [password, setPassword] = useState("");

  const verifyPassword = async (e) => {
    e.preventDefault();
    const data = {
      password,
    };
    try {
      const response = await axiosClient.post(`/api/link/${link.link}`, data);
      setHasPassword(response.data.password);
    } catch (error) {
      showAlert(error.response.data.message);
    }
  };

  const generateQR = () => {
    router.push({
      pathname: "/escanear-qr",
      query: {
        link: router.query.link,
      },
    });
  };

  console.log(link);
  return (
    <>
      <Layout>
        <Head>
          <title>SendMe - {link.originalName}</title>
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

          {/* OG for Facebook  */}
          <meta property="og:url" content="https://sendmefiles.cloud" />
          <meta property="og:type" content="website" />
          <meta
            property="og:title"
            content={`SendMeFiles - ${link.originalName}`}
          />
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
            content={`SendMeFiles - ${link.originalName}`}
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
        <Container maxWidth="sm">
          <Box sx={{ mt: "20px", pb: 4 }} component="div">
            {hasPassword && user?.id !== link.author ? (
              <div className="text-center ">
                {/*  <i className="fas fa-lock text-6xl mb-6  text-red-500 mt-2"></i>*/}
                <LockIcon color="primary" sx={{ fontSize: "4.5rem", mb: 2 }} />

                {fileMessage && <Alert error={true} />}

                <div className="flex justify-center mt-5">
                  <div className="w-full max-w-lg">
                    <Box
                      component="form"
                      sx={{ py: "20rem" }}
                      className="bg-white rounded shadow-md px-8 pt-6 pb-8 mb-4"
                      onSubmit={(e) => verifyPassword(e)}
                    >
                      <Typography
                        variant="p"
                        noWrap
                        component="p"
                        sx={{
                          my: 2,
                        }}
                      >
                        Este enlace se encuentra protegido por una contraseña
                      </Typography>
                      <div className="mb-4">
                        <TextField
                          type="password"
                          fullWidth
                          value={password}
                          sx={{ mt: 2 }}
                          onChange={(e) => setPassword(e.target.value)}
                          id="password"
                          label="Ingresa la contraseña del enlace"
                          variant="outlined"
                        />
                      </div>

                      <Button
                        type="submit"
                        variant="contained"
                        value="Validar Contraseña"
                        fullWidth
                        color="primary"
                        endIcon={<LockOpenIcon />}
                        sx={{ mr: 2, my: 2 }}
                      >
                        Desbloquear Enlace
                      </Button>
                    </Box>
                  </div>
                </div>
              </div>
            ) : (
              <Box sx={{ mt: "20px" }} component="div">
                <div className="flex justify-center">
                  <div className=" bg-white rounded shadow-md px-8 pt-6 pb-8 mb-4 max-w-md mb-10">
                    <h1 className="text-4xl text-center text-gray-700">
                      Descarga tu archivo
                    </h1>
                    <div className="file-info-container text-center">
                      {/* <p><span className="text-red-500"> Tamaño: {}</span></p> */}
                      <FileIconType
                        originalName={link.originalName}
                        textSize="text-5xl"
                      />
                      <p className="mt-2 mb-2">
                        <span className="text-gray-700">
                          {link.originalName.split(".")[0].slice(0, 30)}
                        </span>
                        <Typography
                        variant="span"
                        noWrap
                        component="span"
                        sx={{marginLeft: '-2px'}}
                        color="primary.main"
              
                      >                            .{link.originalName.split(".")[1]}
                        </Typography>
                      </p>
                      {link.fileSize && <p>{link.fileSize}</p>}
                      <p>
                      <Typography
                        variant="span"
                        noWrap
                        component="span"
                        color="primary.main"
                        sx={{
                          my: 2,
                        }}
                      >                          {" "}
                          Limite de descargas:{" "}
                        </Typography>{" "}
                        <span className="text-gray-700">
                          {link.downloadLimit}
                        </span>
                      </p>
                    </div>
                    <div className="flex items-center justify-center mt-8 ">
                      <Button
                        variant="link"
                        bgcolor="primary.main"
                        href={`${process.env.apiURL}/api/file/${
                          link.file ? link.file : link.fileName
                        }`}
                        download
                        sx={{
                          textDecoration: "none",
                          backgroundColor: "primary.main",
                          color: "white",
                          px: 8,
                          py: 2,
                          boxShadow: '0 1px 3px 0 rgb(0 0 0 / 10%), 0 1px 2px 0 rgb(0 0 0 / 6%)',
                          borderRadius: 2,
                          "&:hover": {
                            backgroundColor: "pinkLight.main",
                          },
                        }}
                      >
                        Aquí <CloudDownloadIcon sx={{ ml: 1 }} />
                      </Button>

                      {/*   <a  
                        href={`${process.env.apiURL}/${link.file}`} 
                        className="bg-red-500 text-center py-3 px-10 text-white rounded uppercase font-bold cursor-pointer"
                    >Ver Aquí</a> */}
                      <div></div>
                    </div>
                    <div className="mt-6 text-center">
                      <Button
                        onClick={generateQR}
                        endIcon={<QrCodeIcon />}
                        className="text-center py-4 px-12 text-red-500 rounded uppercase font-bold cursor-pointer shadow hover:bg-gray-200"
                      >
                        Generar QR
                      </Button>
                    </div>
                  </div>
                </div>
              </Box>
            )}
          </Box>
        </Container>
      </Layout>
    </>
  );
};

export default link;

/* 5xl todos menos mp3 y musica que es xl */
