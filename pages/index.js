import React, { useContext, useEffect } from "react";
import Layout from "./../components/Layout/Layout";
import Alert from "./../components/Alerts/Alert";
import Dropzone from "./../components/Dropzone/Dropzone";
import HomeCopyLink from "./../components/HomeFiles/HomeCopyLink";
import Feature from "./../components/Feature";
import authContext from "../context/auth/authContext";
import appContext from "../context/app/appContext";
import { Link as NextLink } from "next/link";
import Link from "@mui/material/Link";

import Typography from "@mui/material/Typography";

const Home = () => {
  // Extraer el usuario autenticado del storage
  const AuthContext = useContext(authContext);
  const { userOauth, userAuthtenticate, user } = AuthContext;

  // extraer el mensaje de error del archivo
  const AppContext = useContext(appContext);
  const { fileMessage, url } = AppContext;

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      userOauth();

      userAuthtenticate();
    } else {
    }
  }, []);

  return (
    <Layout>
      <div className="md:w-4/5 xl:w-3/5 mx-auto mb-12">
        {url ? (
          <HomeCopyLink url={url} />
        ) : (
          <div>
            {fileMessage && <Alert />}
            <div className="lg:flex md:shadow-lg p-5 bg-white rounded-lg py-10 mb-4">
              <Dropzone />
              <div className="md:flex-1 mb-3 mx-2 ml-3 mt-16 lg:mt-0">
                <h2 className="md:text-4xl text-2xl font-sans font-bold text-gray-800 my-4">
                  Compartir archivos de forma fácil y privada
                </h2>
                <p className="text-lg leading-loose">
                  <Typography
                    variant="span"
                    noWrap
                    component="span"
                    sx={{
                      fontWeight: "bold",
                      color: "primary.main",
                      textDecoration: "none",
                    }}
                  >
                    SendMe
                  </Typography>{" "}
                  te permite compartir archivos de forma segura, archivos
                  protegidos por contraseña, archivos con un limite de descargas
                  y mucho más
                </p>
                {!user ? (
                  <>
                    <p className="mt-2">
                      <Link
                        sx={{ fontWeight: "bold" }}
                        href="/signup"
                        component={NextLink}
                        color="primary"
                      >
                        Crea una cuenta para obtener todos los beneficios
                      </Link>
                    </p>
                    <p className="mt-2">
                      <Link
                        href="/features"
                        component={NextLink}
                        color="primary"
                        sx={{ fontWeight: "bold" }}
                      >
                        Conoce todos los beneficios
                      </Link>
                    </p>
                    {/*
                          ---- versiones de links con buttons bonitos tipo jumbotron

                             <p className="mt-2">
                  <Link href="/signup">
                    <div className="rounded-md shadow cursor-pointer">
                      <a className="w-full flex items-center justify-center px-4 py-2 border border-transparent text-base rounded-md  hover:bg-red-600 bg-red-500  text-white font-bold text-lg  ">
                        Crea una cuenta para obtener todos los beneficios
                      </a>
                    </div>
                  </Link>
                </p>
                    <p className="mt-2">
                      <Link href="/features">
                        <div className="">
                          <a className="ounded-md text-red-500 font-bold underline mt-2">
                            Conoce todos los beneficios
                          </a>
                        </div>
                      </Link>
                    </p>

                      */}
                  </>
                ) : null}
              </div>
            </div>
            {/*}  <Feature/> }*/}
          </div>
        )}
      </div>
    </Layout>
  );
};
export default Home;
