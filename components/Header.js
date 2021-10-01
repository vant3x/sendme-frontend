import React, { useContext, useEffect } from "react";
import Link from "next/link";
import styles from "./../styles/Header.module.css";
import authContext from "../context/auth/authContext";
import appContext from "../context/app/appContext";
import { useRouter } from "next/router";
import HeaderDropdowns from "./HeaderDrowpdown";
import axiosClient from "../config/axios";

const Header = ({ newFolder }) => {
  // routing
  const router = useRouter();

  // Extraer el usuario autenticado del storage
  const AuthContext = useContext(authContext);
  const { user, userAuthtenticate, logout } = AuthContext;

  // Extraer el contex de la app
  const AppContext = useContext(appContext);
  const { resetState } = AppContext;

  useEffect(() => {
    userAuthtenticate();
  }, []);

  const redirect = () => {
    router.push("/");
    resetState();
  };

  
  const logoutOauth = () => {
    axiosClient.get("http://localhost:4000/api/auth/logout", {
        withCredentials: true
    }).then((res) => {
        if (res.data === "done") {
            window.location.href = "/"
        }
    })
}


  return (
    <header className="py-4 lg:px-4 flex flex-col md:flex-row items-center bg-white shadow justify-between">
      <span
        onClick={() => redirect()}
        className={`cursor-pointer sm:mb-4 mb-4 md:mb-0 lg:mb-0`}
      >
        <h1
          className={`${styles.titleLogo} w-64 mb-4 md:mb-0 sm:mb-4 text-gray-800`}
        >
          Send<span className="text-red-500">Me</span>{" "}
        </h1>
      </span>

      <nav>
        {user ? (
          <div className="flex items-center">
            <p className="mr-2">Hola {user.name  ? user.name  :  user.username ? user.username : null}</p>

            <HeaderDropdowns
              user={user}
              newFolder={newFolder}
              logout={user.googleId || user.twitterId || user.githubId  ? logoutOauth :  logout}
            />

            {/* <button 
                        className="bg-black px-5 py-3 rounded text-white font-bold uppercase ml-2 hover:bg-gray-800 sm:visible invisible" 
                        type="button"
                        onClick={()=> logout()}
                    >

                        Cerrar Sesión
                   </button> */}
          </div>
        ) : (
          <>
            <Link href="/login">
              <a className="bg-red-500 px-5 py-3 rounded text-white font-bold uppercase">
                Iniciar Sesión
              </a>
            </Link>
            <Link href="/signup ">
              <a className="bg-black px-5 py-3 rounded text-white font-bold uppercase ml-2 ">
                Crear Cuenta
              </a>
            </Link>
          </>
        )}
      </nav>
    </header>
  );
};
export default Header;
